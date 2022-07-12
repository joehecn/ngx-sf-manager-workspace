import { Component, OnInit, ViewChildren, QueryList } from '@angular/core';
import { SFComponent, SFSchema, SFUISchema } from '@delon/form';
import { NzSafeAny } from 'ng-zorro-antd/core/types';
import { NgxSfManagerService } from '../../ngx-sf-manager.service';

import { JControl, JSFConfig } from '../../JControl';
import * as equal_ from 'fast-deep-equal';
import { deepCopy } from '@delon/util';

const equal = equal_;

@Component({
  selector: 'template-list',
  templateUrl: './template-list.component.html',
  styleUrls: ['./template-list.component.less']
})
export class TemplateListComponent implements OnInit {
  @ViewChildren("sf")
  sfs!: QueryList<SFComponent>;

  showEmptyItem = false;
  // 模板列表
  templateList: JControl[] = [];

  selectTemplate: JControl | null = null;

  constructor(
    private managerService: NgxSfManagerService
  ) { }

  getMaxSn() {
    return this.templateList.reduce((max, item) => Math.max(max, item.sn), 0);
  }

  deepCopySfTemplate(sfTemplate: JSFConfig, sn: number) {
    const _setValue = (sn: number, obj: SFSchema | SFUISchema | Record<string, NzSafeAny>, hasTitle = false) => {
      const key = Object.keys(obj)[0];
      const value = obj[key];

      if (hasTitle) value.title = `${value.title}_${sn}`;

      return {
        [`${key}_${sn}`]: value
      }
    }

    const sfTemplateCopy = deepCopy(sfTemplate) as JSFConfig;

    const { schema, ui, formData } = sfTemplateCopy;
    schema.properties = _setValue(sn, schema.properties!, true);
    sfTemplateCopy.ui = _setValue(sn, ui);
    sfTemplateCopy.formData = _setValue(sn, formData!);

    return sfTemplateCopy;
  }
  copyFromToolBox(toolBox: JControl) {
    const sn = this.getMaxSn() + 1;
    const { title, binds } = toolBox;

    const sfTemplate = this.deepCopySfTemplate(toolBox.sfTemplate, sn);
    const sfModel = deepCopy(toolBox.sfModel);

    const control = new JControl({
      sn,
      name: `${toolBox.name}_${sn}`,
      title,
      binds,
      sfTemplate,
      sfModel,
    });

    control.setSfModelFormData();

    return control
  }

  ngOnInit(): void {
    // this.toolBoxList = this.managerService.toolBoxList;
    this.templateList = this.managerService.templateList;
    if (this.templateList.length > 0) {
      this.managerService.setSelectTemplate(0);
    } else {
      this.managerService.setShowEmptyItem(true);
    }

    this.managerService.getShowEmptyItem().subscribe(showEmptyItem => {
      // console.log(showEmptyItem)
      this.showEmptyItem = showEmptyItem;
    });
    this.managerService.getSelectTemplate().subscribe(index => {
      // console.log('---- template-list 获取选中模板 ----');
      if (index > -1) {
        this.selectTemplate = this.templateList[index];
      } else {
        this.selectTemplate = null;
      }
    });
    this.managerService.getJMsg().subscribe(jMsg => {
      // console.log('---- template-list getJMsg() ----')
      // console.log(jMsg);
      if (!jMsg) return;

      const { from, tos, key, value } = jMsg;
      switch (key) {
        case 'sfModel-formData-change':
          const targetItemIndex = this.templateList.findIndex(template => template.sn === this.selectTemplate?.sn);
          
          if (targetItemIndex > -1) {
            const sf = this.sfs?.get(targetItemIndex);
            sf?.refreshSchema();
          }
          break;
        default:
          break;
      }
    });
  }

  // template-item-wrap
  onDragOver(e: DragEvent) {
    e.preventDefault && e.preventDefault();
  
    return false;
  }

  onDragenter(e: DragEvent) {
    const target = e.target as HTMLElement;

    if (target.getAttribute('allowdrop') === '') {
      target.classList.add('over');
    }
  }

  onDragLeave(e: DragEvent) {
    const target = e.target as HTMLElement;

    if (target.getAttribute('allowdrop') === '') {
      target.classList.remove('over');
    }
  }

  onDrop(e: DragEvent, item: JControl | null) {
    // console.log('onDrop')
    // console.log(item)
    e.preventDefault && e.preventDefault();

    const target = e.target as HTMLElement;
    target.classList.remove('over');

    const index = e.dataTransfer!.getData('index')
    const method = e.dataTransfer!.getData('method')

    const i = Number(index);

    let dropItem: JControl | null = null
    if (method === 'insert') {
      dropItem = this.copyFromToolBox(this.managerService.toolBoxList[i])
    } else if (method === 'move') { 
      dropItem = this.templateList[i]
    }

    // console.log(dropItem)

    const dropItemIndex = this.templateList.findIndex(template => template.sn === dropItem!.sn);

    let targetItemIndex = -1;
    if (item) {
      targetItemIndex = this.templateList.findIndex(template => template.sn === item.sn);
    } else {
      targetItemIndex = this.templateList.length;
    }

    if (dropItemIndex > -1) this.templateList.splice(dropItemIndex, 1);
    if (targetItemIndex > -1) {
      this.templateList.splice(targetItemIndex, 0, dropItem!);
      this.managerService.setSelectTemplate(targetItemIndex);
    }

    return false;
  }

  // button
  onDragStart(e: DragEvent, index: number) {
    const target = e.target as HTMLElement;

    const grandParent = target.parentElement!.parentElement!;
    grandParent.style.opacity = '0.4';
    grandParent.classList.add('draging');

    e.dataTransfer!.setData('index', index.toString());
    e.dataTransfer!.setData('method', 'move');

    const width = grandParent.clientWidth;
    const x = e.offsetX;
    const y = e.offsetY;

    e.dataTransfer!.setDragImage(grandParent, width + x - 104, y + 12);

    return true;
  }

  onDragEnd(e: DragEvent) {
    const target = e.target as HTMLElement;

    const grandParent = target.parentElement!.parentElement!;
    grandParent.style.opacity = '1';
    grandParent.classList.remove('draging');

    return false;
  }

  isSelectClass(item: JControl, withDisabled = false) {
    let selected = false;
    if (this.selectTemplate) { 
      selected = this.selectTemplate.sn === item.sn;
    }
    if (withDisabled) { 
      return { selected, disabled: !selected };
    } else {
      return { selected };
    }
  }

  handleItemEdit(index: number) {
    this.managerService.setSelectTemplate(index);
  }

  handleItemRemove(index: number) {
    const template = this.templateList.splice(index, 1)[0];

    if (this.selectTemplate === template) {
      this.managerService.setSelectTemplate(-1);
    }

    if(this.templateList.length === 0) {
      this.managerService.setShowEmptyItem(true);
    }
  }

  handleFormChange(value: Record<string, unknown>) {
    console.log('---template-list handleFormChange 此处易发内存泄漏---')
    if (equal(value, this.selectTemplate!.sfTemplate.formData)) return;

    for (const key in value) {
      if (value.hasOwnProperty(key) && this.selectTemplate!.sfTemplate.formData!.hasOwnProperty(key)) {
        this.selectTemplate!.sfTemplate.formData![key] = value[key];
      }
    }

    this.managerService.setJMsg({ from: 'template-list', tos: ['ngx-sf-manager'],  key: 'sfTemplate-formData-change' });
  }
}
