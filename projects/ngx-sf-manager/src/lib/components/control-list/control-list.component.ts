import { Component, OnInit } from '@angular/core';
import { JControl } from '../../JControl';
import { NgxSfManagerService } from '../../ngx-sf-manager.service';

@Component({
  selector: 'control-list',
  templateUrl: './control-list.component.html',
  styleUrls: ['./control-list.component.less']
})
export class ControlListComponent implements OnInit {
  toolBoxList!: JControl[];

  constructor(
    private managerService: NgxSfManagerService
  ) { }

  ngOnInit(): void {
    // console.log('---- control-list 获取工具箱 ----');
    this.toolBoxList = this.managerService.toolBoxList;
  }

  onDragStart(e: DragEvent, index: number) {
    // showEmptyItem
    this.managerService.setShowEmptyItem(true);

    const target = e.target as HTMLElement;
    target.style.opacity = '0.4';

    e.dataTransfer!.setData('index', index.toString());
    e.dataTransfer!.setData('method', 'insert');

    const elements = document.getElementsByClassName('template-list-back')[0].children;
    const element = elements[index].children[0] as HTMLElement;

    const width = element.clientWidth;

    if (this.managerService.isRetinaDisplay()) {
      e.dataTransfer!.setDragImage(element, (width - 96) * 2, 20 * 2);
    } else {
      e.dataTransfer!.setDragImage(element, (width - 96), 20);
    }

    return true;
  }

  onDragEnd(e: DragEvent) {
    const target = e.target as HTMLElement;
    
    target.style.opacity = '1';

    this.managerService.setShowEmptyItem(false);

    return false;
  }
}
