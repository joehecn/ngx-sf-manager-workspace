import { NzSafeAny } from "ng-zorro-antd/core/types";
import { SFSchema, SFUISchema, SFUISchemaItem, SFUISchemaItemRun } from "@delon/form";
import * as equal_ from 'fast-deep-equal';
import { deepCopy } from "@delon/util";

const equal = equal_;

export type JSFConfig = {
  schema: SFSchema;
  ui: SFUISchema;
  formData: Record<string, NzSafeAny>;
}

export type BindT = {
  from: 'schema' | 'ui';
  key: string;
  value?: NzSafeAny;
}

export type Bind = {
  ts: BindT[],
  m: {
    key: string;
    reset: boolean;
    json: boolean;
    delete?: boolean;
  }
}

export type JOption = {
  sn: number;
  name: string;
  title: string;
  // schema: Record<string, boolean>,
  // ui: Record<string, boolean>,
  binds: Bind[];
  sfTemplate: JSFConfig;
  sfModel: JSFConfig;
}

export class JControl {
  readonly _sfTemplateFormData: Record<string, NzSafeAny>;

  sn: number;
  name: string;
  title: string;
  // schema: Record<string, boolean>;
  // ui: Record<string, boolean>;
  binds: Bind[];
  sfTemplate: JSFConfig;
  sfModel: JSFConfig;

  constructor(option: JOption) {
    this._sfTemplateFormData = deepCopy(option.sfTemplate.formData);

    this.sn = option.sn;
    this.name = option.name;
    this.title = option.title;
    // this.schema = option.schema;
    // this.ui = option.ui;
    this.binds = option.binds;
    this.sfTemplate = option.sfTemplate;
    this.sfModel = option.sfModel;
  }

  setSfModelFormData() {
    const formData = this.sfModel.formData;

    const map = {
      schema: this.sfTemplate.schema.properties![this.name],
      ui: this.sfTemplate.ui[`$${this.name}`],
    };
    
    this.binds.forEach(({ ts, m }) => {
      if (m.json) {
        const jsonMap: BindT[] = [];
        ts.forEach(({ from, key }) => {
          jsonMap.push({ from, key, value: map[from][key] });
        });
        formData[m.key] = JSON.stringify(jsonMap);
      } else {
        const {key, from} = ts[0];
        formData[m.key] = map[from][key];
      }
    });
  }

  setSfTemplate() {
    const formData = this.sfModel.formData;
    
    const schemaRequired = this.sfTemplate.schema.required!;
    const oldRequired = schemaRequired.includes(this.name);

    if (formData.required !== oldRequired) {
      if (oldRequired) {
        this.sfTemplate.schema.required = [];
      } else {
        this.sfTemplate.schema.required = [this.name];
      }
      return;
    }

    const schemaProperty = this.sfTemplate.schema.properties![this.name];
    const uiProperty = this.sfTemplate.ui[`$${this.name}`];
    const beforeSchemaProperty = deepCopy(schemaProperty);
    const beforeUiProperty = deepCopy(uiProperty);

    const beforeMap = {
      schema: beforeSchemaProperty,
      ui: beforeUiProperty,
    }

    const map = {
      schema: schemaProperty,
      ui: uiProperty,
    };
    
    let needReset = false;
    let arr: { key: string; value: NzSafeAny; property: SFSchema | SFUISchemaItem | SFUISchemaItemRun; }[] = [];

    this.binds.forEach(({ ts, m }) => {
      if (m.json) {
        const beforeJsonMap: BindT[] = [];
        const jsonMap: BindT[] = JSON.parse(formData[m.key]);
        ts.forEach(({ key, from }) => {
          beforeJsonMap.push({ from, key, value: beforeMap[from][key] });
          jsonMap.forEach(({ from, key, value }) => {
            arr.push({ key, value, property: map[from] });
          });
        });

        if (m.reset && !equal(beforeJsonMap, formData[m.key])) needReset = true;
      } else {
        const { from, key } = ts[0];

        if (m.delete && formData[m.key] && formData[m.key].length === 0) {
          // console.log('---- delete -----');
          delete map[from][key];
        } else {
          arr.push({ key, value: formData[m.key], property: map[from] });
        }

        if (m.reset && beforeMap[from][key] !== formData[m.key]) needReset = true;
      }
    });

    if (needReset) {
      const formData = deepCopy(this._sfTemplateFormData);
      for (let key in formData) {
        this.sfTemplate.formData[key] = formData[key];
      }
    }

    for (let { key, value, property } of arr) {
      property[key] = value;
    }
  }
}

export type JMsg = {
  from: string;
  tos: string[];
  key: string;
  value?: NzSafeAny;
}
