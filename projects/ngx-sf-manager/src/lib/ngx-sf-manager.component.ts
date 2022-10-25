import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { SFComponent } from '@delon/form';
import { ModalHelper } from '@delon/theme';
import * as equal_ from 'fast-deep-equal';
import { JOption, JControl } from './JControl';
import { NgxSfManagerService } from './ngx-sf-manager.service';
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';

const equal = equal_;

@Component({
  selector: 'ngx-sf-manager',
  templateUrl: './ngx-sf-manager.component.html',
  styleUrls: ['./ngx-sf-manager.component.less']
})
export class NgxSfManagerComponent implements OnInit {
  @Input()
  options: JOption[] = [];

  @Input()
  showPreviewBtn: boolean = true;

  @Input()
  showSchemaTabs: boolean = false;

  @Input() 
  set setTemplate(templates: JOption[]) {
    this.templates = templates;

    this.initTemplate();
  }

  @ViewChild('sf') sf!: SFComponent;

  templates: JOption[] = []

  selectedTabIndex = 0;

  selectTemplate: JControl | null = null;

  preCode = 'null';
  preModel = 'null';

  constructor(
    private managerService: NgxSfManagerService,
    private mh: ModalHelper
  ) { }

  setPreModel() {
    // console.log('---- ngx-sf-manager setPreModel ----');
    if (this.selectTemplate) {
      this.preModel = JSON.stringify(this.selectTemplate.sfModel, null, 2)
    } else {
      this.preModel = 'null';
    }
  }

  handleFormChange(value: Record<string, unknown>) {
    console.log('---ngx-sf-manager handleFormChange 此处易发内存泄漏---')
    // 校验表单
    // console.log(this.sf.getProperty('/enum')?.errors);
    if (!this.sf.valid) return;
    if (equal(value, this.selectTemplate!.sfModel.formData)) return;

    for (const key in value) {
      if (value.hasOwnProperty(key) && this.selectTemplate!.sfModel.formData.hasOwnProperty(key)) {
        this.selectTemplate!.sfModel.formData![key] = value[key];
      }
    }

    this.selectTemplate!.setSfTemplate();

    this.preCode = JSON.stringify(this.selectTemplate!.sfTemplate, null, 2)

    this.managerService.setJMsg({ from: 'ngx-sf-manager', tos: ['template-list'],  key: 'sfModel-formData-change' });
  }

  openModal() {
    this.mh.create(DemoModalComponent).subscribe(console.log);
  }

  ngOnInit(): void {

  }

  // 初始化模板
  initTemplate() {
    /** 工具箱 */
    if (this.managerService.toolBoxList.length === 0) {
      // 注册默认工具箱
      const defaultOptions = this.managerService.getDefaultOptions();
      defaultOptions.forEach(option => {
        this.managerService.toolBoxRegister(option);
      });
      // 注册从外部注入的工具箱
      this.options.forEach(option => {
        this.managerService.toolBoxRegister(option)
      });
      // console.log('---- ngx-sf-manager 注册工具箱完成 ----');
    }

    // 注册模板
    // if (this.managerService.templateList.length === 0) {
      // 模板初始化
      this.managerService.initTemplates();
      this.templates.forEach(template => {
        this.managerService.templateRegister(template)
      })
      // console.log('---- ngx-sf-manager 导入模板完成 ----');
    // }

    this.selectedTabIndex = 0;
    this.selectTemplate = null;
    this.preCode = 'null';
    this.preModel = 'null';

    this.managerService.getSelectTemplate().subscribe(index => {
      if (index > -1) {
        this.selectTemplate = this.managerService.templateList[index];
        this.sf && this.sf.refreshSchema();
        this.selectedTabIndex = 0;
      } else {
        this.selectTemplate = null;
      }

      if (this.selectTemplate) {
        this.preCode = JSON.stringify(this.selectTemplate.sfTemplate, null, 2)
      } else {
        this.preCode = 'null';
      }
    });
    this.managerService.getJMsg().subscribe(jMsg => {
      // console.log('---- ngx-sf-manager getJMsg() ----')
      // console.log(jMsg);
      if (!jMsg) return;

      const { from, tos, key, value } = jMsg;
      switch (key) {
        case 'sfTemplate-formData-change':
          if (this.selectTemplate) {
            this.preCode = JSON.stringify(this.selectTemplate.sfTemplate, null, 2)
          } else {
            this.preCode = 'null';
          }
          break;
        default:
          break;
      }
    });
}
}
