import { Component, OnInit } from '@angular/core';
import { JControl } from '../../JControl';
import { NgxSfManagerService } from '../../ngx-sf-manager.service';

@Component({
  selector: 'template-list-back',
  templateUrl: './template-list-back.component.html',
  styleUrls: ['./template-list-back.component.less']
})
export class TemplateListBackComponent implements OnInit {
  toolBoxList!: JControl[];

  constructor(
    private managerService: NgxSfManagerService
  ) { }

  ngOnInit(): void {
    // console.log('---- template-list-back 获取工具箱 ----');
    this.toolBoxList = this.managerService.toolBoxList
  }

}
