import { ChangeDetectionStrategy, Component } from '@angular/core';
// import { NgxSfManagerService } from 'projects/ngx-sf-manager/src/public-api';
import { NgxSfManagerService } from 'ngx-sf-manager';
// import { ModalHelper } from '@delon/theme';
// import { DemoModalComponent } from 'projects/ngx-sf-manager/src/lib/components/demo-modal/demo-modal.component';

// import { JOption } from 'projects/ngx-sf-manager/src/public-api';
// import { JOption } from 'ngx-sf-manager';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class DashboardComponent {

  constructor(
    // private mh: ModalHelper
    private managerService: NgxSfManagerService
  ) { }
  
  openModal() {
    // this.mh.create(DemoModalComponent).subscribe(console.log);
    const demo = this.managerService.getForm();
    console.log(demo);
  }
  // options: JOption[] = []

  // templates: JOption[] = [
  //   // {
  //   //   sn: 1,
  //   //   name: 'boolean_1',
  //   //   title: 'Boolean 开关',
  //   //   binds: [
  //   //     { ts: [{ key: 'title', from: 'schema' }], m: { key: 'title', reset: false, json: false } },
  //   //     { ts: [{ key: 'description', from: 'schema' }], m: { key: 'description', reset: false, json: false } },
  //   //     { ts: [{ key: 'checkedChildren', from: 'ui' }], m: { key: 'checkedChildren', reset: false, json: false } },
  //   //     { ts: [{ key: 'unCheckedChildren', from: 'ui' }], m: { key: 'unCheckedChildren', reset: false, json: false } },
  //   //     { ts: [{ key: 'size', from: 'ui' }], m: { key: 'size', reset: false, json: false } },
  //   //   ],
  //   //   sfTemplate: {
  //   //     schema: {
  //   //       properties: {
  //   //         // 指定内容文本
  //   //         boolean_1: {
  //   //           // 属性描述
  //   //           title: 'Boolean_1',
  //   //           type: 'boolean',
  //   //           // 是否只读状态，等同 nzDisabled
  //   //           readOnly: false,
  //   //           default: false,
  //   //           // 属性目的性解释
  //   //           description: '',
  //   //         },
  //   //       },
  //   //       // 必填项
  //   //       required: [],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $boolean_1: {
  //   //         checkedChildren: '开',
  //   //         unCheckedChildren: '关',
  //   //         size: 'default',
  //   //       }
  //   //     },
  //   //     formData: {
  //   //       boolean_1: false,
  //   //     }
  //   //   },
  //   //   sfModel: {
  //   //     schema: {
  //   //       properties: {
  //   //         // schema
  //   //         title: {
  //   //           title: '名称',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性名称 - 必填项',
  //   //         },
  //   //         description: {
  //   //           title: '描述',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性目的性解释',
  //   //         },
  //   //         // ui
  //   //         checkedChildren: {
  //   //           title: '选中时',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '选中时的内容',
  //   //         },
  //   //         unCheckedChildren: {
  //   //           title: '未选中',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '未选中时的内容',
  //   //         },
  //   //         size: {
  //   //           title: '尺寸',
  //   //           type: 'string',
  //   //           enum: ['default', 'small'],
  //   //           default: 'default',
  //   //           // 属性目的性解释
  //   //           description: '控件大小, 默认值: default',
  //   //         },
  //   //         // required
  //   //         required: {
  //   //           title: '是否必填',
  //   //           type: 'boolean',
  //   //           default: false,
  //   //         },
  //   //       },
  //   //       required: ['title'],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $size: {
  //   //         widget: 'radio',
  //   //         styleType: 'button',
  //   //         buttonStyle: 'solid',
  //   //       },
  //   //       $required: {
  //   //         widget: 'checkbox',
  //   //       },
  //   //     },
  //   //     formData: {
  //   //       // schema
  //   //       title: 'Boolean_1',
  //   //       description: '',
  //   //       // ui
  //   //       checkedChildren: '开',
  //   //       unCheckedChildren: '关',
  //   //       size: 'default',
  //   //       // required
  //   //       required: false,
  //   //     },
  //   //   }
  //   // },
  //   // {
  //   //   sn: 2,
  //   //   name: 'checkbox_2',
  //   //   title: 'Checkbox 多选框',
  //   //   sfTemplate: {
  //   //     schema: {
  //   //       properties: {
  //   //         checkbox: {
  //   //           title: 'Checkbox',
  //   //           type: 'boolean', // 'boolean'
  //   //           // enum: null,
  //   //           // 是否只读状态，等同 nzDisabled
  //   //           readOnly: false,
  //   //           // default: false,
  //   //           // 属性目的性解释
  //   //           description: '',
  //   //         }
  //   //       },
  //   //       // 必填项
  //   //       // required: [],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $checkbox: {
  //   //         widget: 'checkbox',
  //   //         // styleType: 'button',
  //   //         checkAll: false,
  //   //         checkAllText: '全选',
  //   //         // span: 24,
  //   //         // asyncData: () =>
  //   //         //   of([
  //   //         //     { label: 'Apple', value: 'Apple' },
  //   //         //     { label: 'Pear', value: 'Pear' },
  //   //         //     { label: 'Orange', value: 'Orange' },
  //   //         //   ]).pipe(delay(200))
  //   //         // change: (value: any) => {}
  //   //       } as SFCheckboxWidgetSchema,
  //   //     },
  //   //     formData: {
  //   //       checkbox: false, // 单选框 boolean 多选框 string[]
  //   //     },
  //   //   },
  //   //   sfModel: {
  //   //     schema: {
  //   //       properties: {
  //   //         // schema
  //   //         title: {
  //   //           title: '名称',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性名称 - 必填项',
  //   //         },
  //   //         description: {
  //   //           title: '描述',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性目的性解释',
  //   //         },
  //   //         enum: {
  //   //           title: '选项',
  //   //           type: 'string',
  //   //           enum: [],
  //   //           default: null,
  //   //           // 属性目的性解释
  //   //           description: '数据源，当数据源存在时表示一组多选框',
  //   //         },
  //   //         // // ui
  //   //         // styleType: {
  //   //         //   title: '样式',
  //   //         //   type: 'string',
  //   //         //   enum: ['default', 'button'],
  //   //         //   default: 'default',
  //   //         // }
  //   //       },
  //   //       required: ['title'],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $enum: {
  //   //         widget: 'select',
  //   //         mode: 'tags',
  //   //         ingoreKeywords: ['minItems'],
  //   //         autoFocus: true,
  //   //       },
  //   //       // $styleType: {
  //   //       //   widget: 'radio',
  //   //       // }
  //   //     },
  //   //     formData: {
  //   //       // schema
  //   //       title: '',
  //   //       description: '',
  //   //       enum: null,
  //   //       // ui
  //   //       // styleType: 'default',
  //   //     },
  //   //   }
  //   // },
  //   // {
  //   //   sn: 3,
  //   //   name: 'date_3',
  //   //   title: 'Date 日期',
  //   //   sfTemplate: {
  //   //     schema: {
  //   //       properties: {
  //   //         date: {
  //   //           title: 'Date',
  //   //           type: 'string',
  //   //           format: 'date',
  //   //           default: '',
  //   //           // 是否只读状态，等同 nzDisabled
  //   //           readOnly: false,
  //   //           // 属性目的性解释
  //   //           description: '',
  //   //         }
  //   //       },
  //   //       // 必填项
  //   //       // required: [],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $date: {
  //   //         widget: 'date',
  //   //         mode: 'date',
  //   //         format: 'yyyy-MM-dd',
  //   //         size: 'default',
  //   //       } as SFDateWidgetSchema
  //   //     },
  //   //     formData: {
  //   //       date: '',
  //   //     }
  //   //   },
  //   //   sfModel: {
  //   //     schema: {
  //   //       properties: {
  //   //         // schema
  //   //         title: {
  //   //           title: '名称',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性名称 - 必填项',
  //   //         },
  //   //         description: {
  //   //           title: '描述',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性目的性解释',
  //   //         },
  //   //         // ui
  //   //         mode: {
  //   //           title: '模式',
  //   //           type: 'string',
  //   //           enum: [
  //   //             { label: '日期', value: 'date' },
  //   //             { label: '日期时间', value: 'date-time' },
  //   //             { label: '年', value: 'year' },
  //   //             { label: '月', value: 'month' },
  //   //           ],
  //   //           default: 'date',
  //   //           // 属性目的性解释
  //   //           description: '控件的渲染模式, 默认值: date',
  //   //         },
  //   //         size: {
  //   //           title: '尺寸',
  //   //           type: 'string',
  //   //           enum: ['default', 'small'], // 暂时屏蔽 large
  //   //           default: 'default',
  //   //           // 属性目的性解释
  //   //           description: '控件大小, 默认值: default',
  //   //         },
  //   //       },
  //   //       required: ['title'],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $mode: {
  //   //         widget: 'select'
  //   //       },
  //   //       $size: {
  //   //         widget: 'radio',
  //   //         styleType: 'button',
  //   //         buttonStyle: 'solid',
  //   //       }
  //   //     },
  //   //     formData: {
  //   //       // schema
  //   //       title: '',
  //   //       description: '',
  //   //       // ui
  //   //       mode: 'date',
  //   //       size: 'default',
  //   //     },
  //   //   }
  //   // },
  //   // {
  //   //   sn: 4,
  //   //   name: 'number_4',
  //   //   title: 'Number 数字',
  //   //   sfTemplate: {
  //   //     schema: {
  //   //       properties: {
  //   //         number: {
  //   //           title: 'Number',
  //   //           type: 'number',
  //   //           minimum: 18,
  //   //           exclusiveMinimum: false,
  //   //           maximum: 100,
  //   //           exclusiveMaximum: false,
  //   //           multipleOf: 1,
  //   //           // 是否只读状态，等同 nzDisabled
  //   //           readOnly: false,
  //   //           default: null,
  //   //           // 属性目的性解释
  //   //           description: '',
  //   //         },
  //   //       },
  //   //       // 必填项
  //   //       // required: [],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $number: {
  //   //         // prefix: '$',
  //   //         unit: '',
  //   //         hideStep: false,
  //   //         size: 'default',
  //   //       }
  //   //     },
  //   //     formData: {
  //   //       number: null,
  //   //     }
  //   //   },
  //   //   sfModel: {
  //   //     schema: {
  //   //       properties: {
  //   //         // schema
  //   //         title: {
  //   //           title: '名称',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性名称 - 必填项',
  //   //         },
  //   //         description: {
  //   //           title: '描述',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性目的性解释',
  //   //         },
  //   //         minimum: {
  //   //           title: '最小值',
  //   //           type: 'number',
  //   //           default: 18,
  //   //           // 属性目的性解释
  //   //           description: '最小值',
  //   //         },
  //   //         exclusiveMinimum: {
  //   //           title: '最小约束',
  //   //           type: 'boolean',
  //   //           default: false,
  //   //           // 属性目的性解释
  //   //           description: '约束是否包括 minimum 值, true 表示排除 minimum 值',
  //   //         },
  //   //         maximum: {
  //   //           title: '最大值',
  //   //           type: 'number',
  //   //           default: 100,
  //   //           // 属性目的性解释
  //   //           description: '最大值',
  //   //         },
  //   //         exclusiveMaximum: {
  //   //           title: '最大约束',
  //   //           type: 'boolean',
  //   //           default: false,
  //   //           // 属性目的性解释
  //   //           description: '约束是否包括 maximum 值, true 表示排除 maximum 值',
  //   //         },
  //   //         multipleOf: {
  //   //           title: '倍数',
  //   //           type: 'number',
  //   //           default: 1,
  //   //           // 属性目的性解释
  //   //           description: '倍数, 可以设置为小数, 默认值: 1',
  //   //         },
  //   //         // ui
  //   //         // prefix: {
  //   //         //   title: '前缀',
  //   //         //   type: 'string',
  //   //         //   default: '',
  //   //         //   // 属性目的性解释
  //   //         //   description: '前缀',
  //   //         // },
  //   //         unit: {
  //   //           title: '单位',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '单位',
  //   //         },
  //   //         hideStep: {
  //   //           title: '隐藏步长',
  //   //           type: 'boolean',
  //   //           default: false,
  //   //           // 属性目的性解释
  //   //           description: '隐藏步数操作区域, 默认值: false',
  //   //         },
  //   //         size: {
  //   //           title: '尺寸',
  //   //           type: 'string',
  //   //           enum: ['default', 'small'],
  //   //           default: 'default',
  //   //           // 属性目的性解释
  //   //           description: '控件大小, 默认值: default',
  //   //         },
  //   //       },
  //   //       required: ['title', 'multipleOf'],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $size: {
  //   //         widget: 'radio',
  //   //         styleType: 'button',
  //   //         buttonStyle: 'solid',
  //   //       }
  //   //     },
  //   //     formData: {
  //   //       // schema
  //   //       title: '',
  //   //       description: '',
  //   //       minimum: 18,
  //   //       exclusiveMinimum: false,
  //   //       maximum: 100,
  //   //       exclusiveMaximum: false,
  //   //       multipleOf: 1,
  //   //       // ui
  //   //       // prefix: '',
  //   //       unit: '',
  //   //       hideStep: false,
  //   //       size: 'default',
  //   //     },
  //   //   }
  //   // },
  //   // {
  //   //   sn: 5,
  //   //   name: 'radio_5',
  //   //   title: 'Radio 单选框',
  //   //   sfTemplate: {
  //   //     schema: {
  //   //       properties: {
  //   //         radio: {
  //   //           title: 'Radio',
  //   //           type: 'string',
  //   //           enum: [],
  //   //           // default: '',
  //   //           // 是否只读状态，等同 nzDisabled
  //   //           readOnly: false,
  //   //           // 属性目的性解释
  //   //           description: '',
  //   //         },
  //   //       },
  //   //       // 必填项
  //   //       // required: [],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $radio: {
  //   //         widget: 'radio',
  //   //         // size: 'default',
  //   //         // styleType: 'default',
  //   //         // buttonStyle: 'outline',
  //   //       } as SFRadioWidgetSchema,
  //   //     },
  //   //     formData: {
  //   //       radio: null,
  //   //     }
  //   //   },
  //   //   sfModel: {
  //   //     schema: {
  //   //       properties: {
  //   //         // schema
  //   //         title: {
  //   //           title: '名称',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性名称 - 必填项',
  //   //         },
  //   //         description: {
  //   //           title: '描述',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性目的性解释',
  //   //         },
  //   //         enum: {
  //   //           title: '枚举',
  //   //           type: 'string',
  //   //           enum: [],
  //   //           default: null,
  //   //           // 属性目的性解释
  //   //           description: '数据源',
  //   //         },
  //   //       },
  //   //       required: ['title'],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $enum: {
  //   //         widget: 'select',
  //   //         mode: 'tags',
  //   //         ingoreKeywords: ['minItems'],
  //   //         autoFocus: true,
  //   //       },
  //   //     },
  //   //     formData: {
  //   //       // schema
  //   //       title: '',
  //   //       description: '',
  //   //       enum: null,
  //   //       // ui
  //   //       // styleType: 'default',
  //   //     },
  //   //   }
  //   // },
  //   // {
  //   //   sn: 6,
  //   //   name: 'select_6',
  //   //   title: 'Select 选择器',
  //   //   sfTemplate: {
  //   //     schema: {
  //   //       properties: {
  //   //         select: {
  //   //           title: 'Select',
  //   //           type: 'string',
  //   //           enum: [],
  //   //           default: null,
  //   //           // 是否只读状态，等同 nzDisabled
  //   //           readOnly: false,
  //   //           // 属性目的性解释
  //   //           description: '',
  //   //         },
  //   //       },
  //   //       // 必填项
  //   //       // required: [],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $select: {
  //   //         widget: 'select',
  //   //         mode: 'default',
  //   //         size: 'default',
  //   //       } as SFSelectWidgetSchema,
  //   //     },
  //   //     formData: {
  //   //       select: null,
  //   //     }
  //   //   },
  //   //   sfModel: {
  //   //     schema: {
  //   //       properties: {
  //   //         // schema
  //   //         title: {
  //   //           title: '名称',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性名称 - 必填项',
  //   //         },
  //   //         description: {
  //   //           title: '描述',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性目的性解释',
  //   //         },
  //   //         enum: {
  //   //           title: '选项',
  //   //           type: 'string',
  //   //           enum: [],
  //   //           default: null,
  //   //           // 属性目的性解释
  //   //           description: '下拉选项数据源',
  //   //         },
  //   //         // ui
  //   //         mode: {
  //   //           title: '模式',
  //   //           type: 'string',
  //   //           enum: ['default', 'multiple'],
  //   //           default: 'default',
  //   //           // 属性目的性解释
  //   //           description: '控件的渲染模式, 默认值: default',
  //   //         },
  //   //         size: {
  //   //           title: '尺寸',
  //   //           type: 'string',
  //   //           enum: ['default', 'small'],
  //   //           default: 'default',
  //   //           // 属性目的性解释
  //   //           description: '控件大小, 默认值: default',
  //   //         },
  //   //       },
  //   //       required: ['title'],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $enum: {
  //   //         widget: 'select',
  //   //         mode: 'tags',
  //   //         ingoreKeywords: ['minItems'],
  //   //         autoFocus: true,
  //   //       },
  //   //       $mode: {
  //   //         widget: 'select'
  //   //       },
  //   //       $size: {
  //   //         widget: 'radio',
  //   //         styleType: 'button',
  //   //         buttonStyle: 'solid',
  //   //       }
  //   //     },
  //   //     formData: {
  //   //       // schema
  //   //       title: '',
  //   //       description: '',
  //   //       size: 'default',
  //   //     },
  //   //   }
  //   // },
  //   // {
  //   //   sn: 7,
  //   //   name: 'string_7',
  //   //   title: 'String 文本框',
  //   //   sfTemplate: {
  //   //     schema: {
  //   //       properties: {
  //   //         string: {
  //   //           title: 'String',
  //   //           type: 'string',
  //   //           maxLength: 10,
  //   //           default: '',
  //   //           // 是否只读状态，等同 nzDisabled
  //   //           readOnly: false,
  //   //           // 属性目的性解释
  //   //           description: '',
  //   //         }
  //   //       },
  //   //       // 必填项
  //   //       // required: [],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $string: {
  //   //         size: 'default',
  //   //       }
  //   //     },
  //   //     formData: {
  //   //       string: '',
  //   //     }
  //   //   },
  //   //   sfModel: {
  //   //     schema: {
  //   //       properties: {
  //   //         // schema
  //   //         title: {
  //   //           title: '名称',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性名称 - 必填项',
  //   //         },
  //   //         description: {
  //   //           title: '描述',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性目的性解释',
  //   //         },
  //   //         // ui
  //   //         size: {
  //   //           title: '尺寸',
  //   //           type: 'string',
  //   //           enum: ['default', 'small'],
  //   //           default: 'default',
  //   //           // 属性目的性解释
  //   //           description: '控件大小, 默认值: default',
  //   //         },
  //   //       },
  //   //       required: ['title'],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $size: {
  //   //         widget: 'radio',
  //   //         styleType: 'button',
  //   //         buttonStyle: 'solid',
  //   //       }
  //   //     },
  //   //     formData: {
  //   //       // schema
  //   //       title: '',
  //   //       description: '',
  //   //       // ui
  //   //       size: 'default',
  //   //     },
  //   //   }
  //   // },
  //   // {
  //   //   sn: 8,
  //   //   name: 'textarea_8',
  //   //   title: 'Textarea 多行文本框',
  //   //   sfTemplate: {
  //   //     schema: {
  //   //       properties: {
  //   //         textarea: {
  //   //           title: 'Textarea',
  //   //           type: 'string',
  //   //           maxLength: 100,
  //   //           default: '',
  //   //           // 是否只读状态，等同 nzDisabled
  //   //           readOnly: false,
  //   //           // 属性目的性解释
  //   //           description: '',
  //   //         },
  //   //       },
  //   //       // 必填项
  //   //       // required: [],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $textarea: {
  //   //         widget: 'textarea',
  //   //         size: 'default',
  //   //         autosize: { minRows: 2, maxRows: 6 },
  //   //         borderless: false,
  //   //       } as SFTextareaWidgetSchema,
  //   //     },
  //   //     formData: {
  //   //       textarea: '',
  //   //     }
  //   //   },
  //   //   sfModel: {
  //   //     schema: {
  //   //       properties: {
  //   //         // schema
  //   //         title: {
  //   //           title: '名称',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性名称 - 必填项',
  //   //         },
  //   //         description: {
  //   //           title: '描述',
  //   //           type: 'string',
  //   //           default: '',
  //   //           // 属性目的性解释
  //   //           description: '属性目的性解释',
  //   //         },
  //   //         // ui
  //   //         size: {
  //   //           title: '尺寸',
  //   //           type: 'string',
  //   //           enum: ['default', 'small'],
  //   //           default: 'default',
  //   //           // 属性目的性解释
  //   //           description: '控件大小, 默认值: default',
  //   //         },
  //   //       },
  //   //       required: ['title'],
  //   //       type: 'object',
  //   //     },
  //   //     ui: {
  //   //       $size: {
  //   //         widget: 'radio',
  //   //         styleType: 'button',
  //   //         buttonStyle: 'solid',
  //   //       }
  //   //     },
  //   //     formData: {
  //   //       // schema
  //   //       title: '',
  //   //       description: '',
  //   //       // ui
  //   //       size: 'default',
  //   //     },
  //   //   }
  //   // }
  // ]
}
