import { NgModule } from '@angular/core';
import { NgxSfManagerComponent } from './ngx-sf-manager.component';

import { NzAffixModule } from 'ng-zorro-antd/affix';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzButtonModule } from 'ng-zorro-antd/button';
import { NzEmptyModule } from 'ng-zorro-antd/empty';
import { NzIconModule } from 'ng-zorro-antd/icon';
import { NzTabsModule } from 'ng-zorro-antd/tabs';

import { DelonFormModule } from '@delon/form';
import { EllipsisModule } from '@delon/abc/ellipsis';

import { ControlListComponent } from './components/control-list/control-list.component';
import { ControlItemComponent } from './components/control-item/control-item.component';
import { DemoModalComponent } from './components/demo-modal/demo-modal.component';
import { TemplateListBackComponent } from './components/template-list-back/template-list-back.component';
import { TemplateItemBackComponent } from './components/template-item-back/template-item-back.component';
import { TemplateListComponent } from './components/template-list/template-list.component';
import { TemplateItemComponent } from './components/template-item/template-item.component';

import { BrowserModule } from '@angular/platform-browser';

@NgModule({
  declarations: [
    NgxSfManagerComponent,
    ControlListComponent,
    ControlItemComponent,
    DemoModalComponent,
    TemplateListBackComponent,
    TemplateItemBackComponent,
    TemplateListComponent,
    TemplateItemComponent,
  ],
  imports: [
    BrowserModule,
    NzAffixModule,
    NzGridModule,
    NzButtonModule,
    NzEmptyModule,
    NzIconModule,
    NzTabsModule,
    DelonFormModule,
    EllipsisModule,
  ],
  exports: [
    NzAffixModule,
    NzGridModule,
    NzButtonModule,
    NzEmptyModule,
    NzIconModule,
    NzTabsModule,
    DelonFormModule,
    EllipsisModule,
    NgxSfManagerComponent,
  ]
})
export class NgxSfManagerModule { }
