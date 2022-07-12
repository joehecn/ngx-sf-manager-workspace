import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'control-item',
  templateUrl: './control-item.component.html',
  styleUrls: ['./control-item.component.less']
})
export class ControlItemComponent implements OnInit {
  @Input() title?: string;

  constructor() { }

  ngOnInit(): void {
  }
}
