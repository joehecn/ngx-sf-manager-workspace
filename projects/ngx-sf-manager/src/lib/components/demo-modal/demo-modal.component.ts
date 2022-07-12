import { Component, OnInit } from '@angular/core';
import { JSFConfig } from '../../JControl';
import { NgxSfManagerService } from '../../ngx-sf-manager.service';

@Component({
  selector: 'demo-modal',
  templateUrl: './demo-modal.component.html',
})
export class DemoModalComponent implements OnInit {
  demo: JSFConfig | null = null;

  constructor(
    private managerService: NgxSfManagerService
  ) { }

  ngOnInit(): void {
    this.demo = this.managerService.getForm()
  }
}
