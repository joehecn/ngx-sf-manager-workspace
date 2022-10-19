import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { JControl, JMsg, JOption, JSFConfig } from './JControl';
import { defaultOptions } from './defaultOptions';

@Injectable({
  providedIn: 'root'
})
export class NgxSfManagerService {
  private showEmptyItem$ = new BehaviorSubject<boolean>(false);
  private seleteTemplate$ = new BehaviorSubject<number>(-1);
  private jMsg$ = new BehaviorSubject<JMsg | null>(null);

  // 工具箱
  toolBoxList: JControl[] = [];
  // 模板
  templateList: JControl[] = [];
  
  constructor() { }

  public getShowEmptyItem() {
    return this.showEmptyItem$.asObservable();
  }
  public setShowEmptyItem(value: boolean) {
    this.showEmptyItem$.next(value);
  }

  public getSelectTemplate() {
    return this.seleteTemplate$.asObservable();
  }
  public setSelectTemplate(value: number) {
    this.seleteTemplate$.next(value);
  }

  public getJMsg() {
    return this.jMsg$.asObservable();
  }
  public setJMsg(value: JMsg | null) {
    this.jMsg$.next(value);
  }

  public getDefaultOptions() {
    return defaultOptions;
  }

  // 注册到工具箱
  public toolBoxRegister(option: JOption) {
    this.toolBoxList.push(new JControl(option));
  }

  public templateRegister(template: JOption) {
    this.templateList.push(new JControl(template));
  }

  public getForm(): JSFConfig | null {
    if (this.templateList.length === 0) return null;

    const form: JSFConfig = {
      schema: {
        properties: {},
        required: []
      }, ui: {}, formData: {}
    };

    for (let i = 0, len = this.templateList.length; i < len; i++) {
      const { sfTemplate: { schema: { properties, required }, ui, formData } } = this.templateList[i]
      form.schema.properties = Object.assign(form.schema.properties!, properties)
      form.ui = Object.assign(form.ui!, ui)
      form.formData = Object.assign(form.formData!, formData)

      form.schema.required!.push(...required!)
    }

    return form;
  }

  // 判断是不是 retina 显示屏
  public isRetinaDisplay(): boolean {
    if (window.matchMedia) {
        var mq = window.matchMedia("only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)");
        return (mq && mq.matches || (window.devicePixelRatio > 1));
    }

    return false;
  }

  // 获取表单模板list
  public getTemplateList() {
    return this.templateList;
  }
}
