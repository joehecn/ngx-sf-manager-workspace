import { JOption } from "./JControl";

export const defaultOptions: JOption[] = [
  {
    sn: 0,
    name: 'boolean',
    title: 'Boolean 开关',
    binds: [
      { ts: [{ from: 'schema', key: 'title' }], m: { key: 'title', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'description' }], m: { key: 'description', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'checkedChildren' }], m: { key: 'checkedChildren', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'unCheckedChildren' }], m: { key: 'unCheckedChildren', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'size' }], m: { key: 'size', reset: false, json: false } },
    ],
    sfTemplate: {
      schema: {
        properties: {
          // 指定内容文本
          boolean: {
            // 属性描述
            title: 'Boolean',
            type: 'boolean',
            // 是否只读状态，等同 nzDisabled
            readOnly: false,
            default: false,
            // 属性目的性解释
            description: '',
          },
        },
        // 必填项
        required: [],
        type: 'object',
      },
      ui: {
        $boolean: {
          checkedChildren: '开',
          unCheckedChildren: '关',
          size: 'default',
        }
      },
      formData: {
        boolean: false,
      }
    },
    sfModel: {
      schema: {
        properties: {
          // schema
          title: {
            title: '名称',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性名称 - 必填项',
          },
          description: {
            title: '描述',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性目的性解释',
          },
          // ui
          checkedChildren: {
            title: '选中时',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '选中时的内容',
          },
          unCheckedChildren: {
            title: '未选中',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '未选中时的内容',
          },
          size: {
            title: '尺寸',
            type: 'string',
            enum: ['default', 'small'],
            default: 'default',
            // 属性目的性解释
            description: '控件大小, 默认值: default',
          },
          // required
          required: {
            title: '是否必填',
            type: 'boolean',
            default: false,
          },
        },
        required: ['title'],
        type: 'object',
      },
      ui: {
        $size: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        },
        $required: {
          widget: 'checkbox',
        },
      },
      formData: {
        // schema
        title: '',
        description: '',
        // ui
        checkedChildren: '',
        unCheckedChildren: '',
        size: 'default',
        // required
        required: false,
      },
    }
  },
  {
    sn: 0,
    name: 'checkbox',
    title: 'Checkbox 多选框',
    binds: [
      { ts: [{ from: 'schema', key: 'title' }], m: { key: 'title', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'description' }], m: { key: 'description', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'enum' }], m: { key: 'enum', reset: true, json: false, delete: true } },
    ],
    sfTemplate: {
      schema: {
        properties: {
          checkbox: {
            title: 'Checkbox',
            type: 'boolean', // 'string'
            // enum: null,
            // 是否只读状态，等同 nzDisabled
            readOnly: false,
            // default: false,
            // 属性目的性解释
            description: '',
          }
        },
        // 必填项
        required: [],
        type: 'object',
      },
      ui: {
        $checkbox: {
          widget: 'checkbox',
          // styleType: 'button',
          checkAll: false,
          checkAllText: '全选',
          // span: 24,
          // asyncData: () =>
          //   of([
          //     { label: 'Apple', value: 'Apple' },
          //     { label: 'Pear', value: 'Pear' },
          //     { label: 'Orange', value: 'Orange' },
          //   ]).pipe(delay(200))
          // change: (value: any) => {}
        },
      },
      formData: {
        checkbox: false, // 单选框 boolean 多选框 string[]
      },
    },
    sfModel: {
      schema: {
        properties: {
          // schema
          title: {
            title: '名称',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性名称 - 必填项',
          },
          description: {
            title: '描述',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性目的性解释',
          },
          enum: {
            title: '选项',
            type: 'string',
            enum: [],
            default: null,
            // 属性目的性解释
            description: '数据源，当数据源存在时表示一组多选框',
          },
          // // ui
          // styleType: {
          //   title: '样式',
          //   type: 'string',
          //   enum: ['default', 'button'],
          //   default: 'default',
          // },
          // required
          required: {
            title: '是否必填',
            type: 'boolean',
            default: false,
          },
        },
        required: ['title'],
        type: 'object',
      },
      ui: {
        $enum: {
          widget: 'select',
          mode: 'tags',
          ingoreKeywords: ['minItems'],
          autoFocus: true,
        },
        // $styleType: {
        //   widget: 'radio',
        // },
        $required: {
          widget: 'checkbox',
        },
      },
      formData: {
        // schema
        title: '',
        description: '',
        enum: null,
        // ui
        // styleType: 'default',
        // required
        required: false,
      },
    }
  },
  {
    sn: 0,
    name: 'date',
    title: 'Date 日期',
    binds: [
      { ts: [{ from: 'schema', key: 'title' }], m: { key: 'title', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'description' }], m: { key: 'description', reset: false, json: false } },
      {
        ts: [
          { from: 'ui', key: 'mode' },
          { from: 'ui', key: 'format' },
          { from: 'schema', key: 'format' }
        ],
        m: { key: 'mode', reset: false, json: true }
      },
      { ts: [{ from: 'ui', key: 'size' }], m: { key: 'size', reset: false, json: false } },
    ],
    sfTemplate: {
      schema: {
        properties: {
          date: {
            title: 'Date',
            type: 'string',
            format: 'date',
            default: '',
            // 是否只读状态，等同 nzDisabled
            readOnly: false,
            // 属性目的性解释
            description: '',
          }
        },
        // 必填项
        required: [],
        type: 'object',
      },
      ui: {
        $date: {
          widget: 'date',
          mode: 'date',
          format: 'yyyy-MM-dd',
          size: 'default',
        }
      },
      formData: {
        date: '',
      }
    },
    sfModel: {
      schema: {
        properties: {
          // schema
          title: {
            title: '名称',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性名称 - 必填项',
          },
          description: {
            title: '描述',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性目的性解释',
          },
          // ui
          mode: {
            title: '模式',
            type: 'string',
            enum: [
              {
                label: '日期', value: JSON.stringify([
                  { from: 'ui', key: 'mode', value: 'date' },
                  { from: 'ui', key: 'format', value: 'yyyy-MM-dd' },
                  { from: 'schema', key: 'format', value: 'date' },
                ])
              },
              {
                label: '日期时间', value: JSON.stringify([
                  { from: 'ui', key: 'mode', value: 'date-time' },
                  { from: 'ui', key: 'format', value: 'yyyy-MM-dd HH:mm:ss' },
                  { from: 'schema', key: 'format', value: 'date-time' },
                ])
              },
              {
                label: '年', value: JSON.stringify([
                  { from: 'ui', key: 'mode', value: 'year' },
                  { from: 'ui', key: 'format', value: 'yyyy' },
                  { from: 'schema', key: 'format', value: 'year' },
                ])
              },
              {
                label: '月', value: JSON.stringify([
                  { from: 'ui', key: 'mode', value: 'month' },
                  { from: 'ui', key: 'format', value: 'yyyy-MM' },
                  { from: 'schema', key: 'format', value: 'month' },
                ])
              },
            ],
            default: JSON.stringify([
              { from: 'ui', key: 'mode', value: 'date' },
              { from: 'ui', key: 'format', value: 'yyyy-MM-dd' },
              { from: 'schema', key: 'format', value: 'date' },
            ]),
            // 属性目的性解释
            description: '控件的渲染模式, 默认值: 日期',
          },
          size: {
            title: '尺寸',
            type: 'string',
            enum: ['default', 'small'], // 暂时屏蔽 large
            default: 'default',
            // 属性目的性解释
            description: '控件大小, 默认值: default',
          },
          // required
          required: {
            title: '是否必填',
            type: 'boolean',
            default: false,
          },
        },
        required: ['title'],
        type: 'object',
      },
      ui: {
        $mode: {
          widget: 'select'
        },
        $size: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        },
        $required: {
          widget: 'checkbox',
        },
      },
      formData: {
        // schema
        title: '',
        description: '',
        // ui
        mode: JSON.stringify([
          { from: 'ui', key: 'mode', value: 'date' },
          { from: 'ui', key: 'format', value: 'yyyy-MM-dd' },
          { from: 'schema', key: 'format', value: 'date' },
        ]),
        size: 'default',
        // required
        required: false,
      },
    }
  },
  {
    sn: 0,
    name: 'number',
    title: 'Number 数字',
    binds: [
      { ts: [{ from: 'schema', key: 'title' }], m: { key: 'title', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'description' }], m: { key: 'description', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'minimum' }], m: { key: 'minimum', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'exclusiveMinimum' }], m: { key: 'exclusiveMinimum', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'maximum' }], m: { key: 'maximum', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'exclusiveMaximum' }], m: { key: 'exclusiveMaximum', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'multipleOf' }], m: { key: 'multipleOf', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'unit' }], m: { key: 'unit', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'hideStep' }], m: { key: 'hideStep', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'size' }], m: { key: 'size', reset: false, json: false } },
    ],
    sfTemplate: {
      schema: {
        properties: {
          number: {
            title: 'Number',
            type: 'number',
            minimum: 0,
            exclusiveMinimum: false,
            exclusiveMaximum: false,
            multipleOf: 1,
            // 是否只读状态，等同 nzDisabled
            readOnly: false,
            default: null,
            // 属性目的性解释
            description: '',
          },
        },
        // 必填项
        required: [],
        type: 'object',
      },
      ui: {
        $number: {
          // prefix: '$',
          unit: '',
          hideStep: false,
          size: 'default',
        }
      },
      formData: {
        number: null,
      }
    },
    sfModel: {
      schema: {
        properties: {
          // schema
          title: {
            title: '名称',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性名称 - 必填项',
          },
          description: {
            title: '描述',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性目的性解释',
          },
          minimum: {
            title: '最小值',
            type: 'number',
            default: 18,
            // 属性目的性解释
            description: '最小值',
          },
          exclusiveMinimum: {
            title: '最小约束',
            type: 'boolean',
            default: false,
            // 属性目的性解释
            description: '约束是否包括 minimum 值, true 表示排除 minimum 值',
          },
          maximum: {
            title: '最大值',
            type: 'number',
            default: 100,
            // 属性目的性解释
            description: '最大值',
          },
          exclusiveMaximum: {
            title: '最大约束',
            type: 'boolean',
            default: false,
            // 属性目的性解释
            description: '约束是否包括 maximum 值, true 表示排除 maximum 值',
          },
          multipleOf: {
            title: '倍数',
            type: 'number',
            default: 1,
            // 属性目的性解释
            description: '倍数, 可以设置为小数, 默认值: 1',
          },
          // ui
          // prefix: {
          //   title: '前缀',
          //   type: 'string',
          //   default: '',
          //   // 属性目的性解释
          //   description: '前缀',
          // },
          unit: {
            title: '单位',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '单位',
          },
          hideStep: {
            title: '隐藏步长',
            type: 'boolean',
            default: false,
            // 属性目的性解释
            description: '隐藏步数操作区域, 默认值: false',
          },
          size: {
            title: '尺寸',
            type: 'string',
            enum: ['default', 'small'],
            default: 'default',
            // 属性目的性解释
            description: '控件大小, 默认值: default',
          },
          // required
          required: {
            title: '是否必填',
            type: 'boolean',
            default: false,
          },
        },
        required: ['title', 'multipleOf'],
        type: 'object',
      },
      ui: {
        $size: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        },
        $required: {
          widget: 'checkbox',
        },
      },
      formData: {
        // schema
        title: '',
        description: '',
        minimum: 18,
        exclusiveMinimum: false,
        maximum: 100,
        exclusiveMaximum: false,
        multipleOf: 1,
        // ui
        // prefix: '',
        unit: '',
        hideStep: false,
        size: 'default',
        // required
        required: false,
      },
    }
  },
  {
    sn: 0,
    name: 'radio',
    title: 'Radio 单选框',
    binds: [
      { ts: [{ from: 'schema', key: 'title' }], m: { key: 'title', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'description' }], m: { key: 'description', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'enum' }], m: { key: 'enum', reset: false, json: false } },
    ],
    sfTemplate: {
      schema: {
        properties: {
          radio: {
            title: 'Radio',
            type: 'string',
            // enum: [],
            // default: '',
            // 是否只读状态，等同 nzDisabled
            readOnly: false,
            // 属性目的性解释
            description: '',
          },
        },
        // 必填项
        required: [],
        type: 'object',
      },
      ui: {
        $radio: {
          widget: 'radio',
          // size: 'default',
          // styleType: 'default',
          // buttonStyle: 'outline',
        },
      },
      formData: {
        radio: null,
      }
    },
    sfModel: {
      schema: {
        properties: {
          // schema
          title: {
            title: '名称',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性名称 - 必填项',
          },
          description: {
            title: '描述',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性目的性解释',
          },
          enum: {
            title: '枚举',
            type: 'string',
            enum: [],
            default: null,
            // 属性目的性解释
            description: '数据源',
          },
          // required
          required: {
            title: '是否必填',
            type: 'boolean',
            default: false,
          },
        },
        required: ['title'],
        type: 'object',
      },
      ui: {
        $enum: {
          widget: 'select',
          mode: 'tags',
          ingoreKeywords: ['minItems'],
          autoFocus: true,
        },
        $required: {
          widget: 'checkbox',
        },
      },
      formData: {
        // schema
        title: '',
        description: '',
        enum: null,
        // ui
        // styleType: 'default',
        // required
        required: false,
      },
    }
  },
  {
    sn: 0,
    name: 'select',
    title: 'Select 选择器',
    binds: [
      { ts: [{ from: 'schema', key: 'title' }], m: { key: 'title', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'description' }], m: { key: 'description', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'enum' }], m: { key: 'enum', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'mode' }], m: { key: 'mode', reset: true, json: false } },
      { ts: [{ from: 'ui', key: 'size' }], m: { key: 'size', reset: false, json: false } },
    ],
    sfTemplate: {
      schema: {
        properties: {
          select: {
            title: 'Select',
            type: 'string',
            enum: [],
            default: null,
            // 是否只读状态，等同 nzDisabled
            readOnly: false,
            // 属性目的性解释
            description: '',
          },
        },
        // 必填项
        required: [],
        type: 'object',
      },
      ui: {
        $select: {
          widget: 'select',
          mode: 'default',
          size: 'default',
        },
      },
      formData: {
        select: null,
      }
    },
    sfModel: {
      schema: {
        properties: {
          // schema
          title: {
            title: '名称',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性名称 - 必填项',
          },
          description: {
            title: '描述',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性目的性解释',
          },
          enum: {
            title: '选项',
            type: 'string',
            enum: [],
            default: null,
            // 属性目的性解释
            description: '下拉选项数据源',
          },
          // ui
          mode: {
            title: '模式',
            type: 'string',
            enum: ['default', 'multiple'],
            default: 'default',
            // 属性目的性解释
            description: '控件的渲染模式, 默认值: default',
          },
          size: {
            title: '尺寸',
            type: 'string',
            enum: ['default', 'small'],
            default: 'default',
            // 属性目的性解释
            description: '控件大小, 默认值: default',
          },
          // required
          required: {
            title: '是否必填',
            type: 'boolean',
            default: false,
          },
        },
        required: ['title'],
        type: 'object',
      },
      ui: {
        $enum: {
          widget: 'select',
          mode: 'tags',
          ingoreKeywords: ['minItems'],
          autoFocus: true,
        },
        $mode: {
          widget: 'select'
        },
        $size: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        },
        $required: {
          widget: 'checkbox',
        },
      },
      formData: {
        // schema
        title: '',
        description: '',
        enum: [],
        // ui
        mode: 'default',
        size: 'default',
        // required
        required: false,
      },
    }
  },
  {
    sn: 0,
    name: 'string',
    title: 'String 文本框',
    binds: [
      { ts: [{ from: 'schema', key: 'title' }], m: { key: 'title', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'description' }], m: { key: 'description', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'size' }], m: { key: 'size', reset: false, json: false } },
    ],
    sfTemplate: {
      schema: {
        properties: {
          string: {
            title: 'String',
            type: 'string',
            maxLength: 10,
            default: '',
            // 是否只读状态，等同 nzDisabled
            readOnly: false,
            // 属性目的性解释
            description: '',
          }
        },
        // 必填项
        required: [],
        type: 'object',
      },
      ui: {
        $string: {
          size: 'default',
        }
      },
      formData: {
        string: '',
      }
    },
    sfModel: {
      schema: {
        properties: {
          // schema
          title: {
            title: '名称',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性名称 - 必填项',
          },
          description: {
            title: '描述',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性目的性解释',
          },
          // ui
          size: {
            title: '尺寸',
            type: 'string',
            enum: ['default', 'small'],
            default: 'default',
            // 属性目的性解释
            description: '控件大小, 默认值: default',
          },
          // required
          required: {
            title: '是否必填',
            type: 'boolean',
            default: false,
          },
        },
        required: ['title'],
        type: 'object',
      },
      ui: {
        $size: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        },
        $required: {
          widget: 'checkbox',
        },
      },
      formData: {
        // schema
        title: '',
        description: '',
        // ui
        size: 'default',
        // required
        required: false,
      },
    }
  },
  {
    sn: 0,
    name: 'textarea',
    title: 'Textarea 多行文本框',
    binds: [
      { ts: [{ from: 'schema', key: 'title' }], m: { key: 'title', reset: false, json: false } },
      { ts: [{ from: 'schema', key: 'description' }], m: { key: 'description', reset: false, json: false } },
      { ts: [{ from: 'ui', key: 'size' }], m: { key: 'size', reset: false, json: false } },
    ],
    sfTemplate: {
      schema: {
        properties: {
          textarea: {
            title: 'Textarea',
            type: 'string',
            maxLength: 100,
            default: '',
            // 是否只读状态，等同 nzDisabled
            readOnly: false,
            // 属性目的性解释
            description: '',
          },
        },
        // 必填项
        required: [],
        type: 'object',
      },
      ui: {
        $textarea: {
          widget: 'textarea',
          size: 'default',
          autosize: { minRows: 2, maxRows: 6 },
          borderless: false,
        },
      },
      formData: {
        textarea: '',
      }
    },
    sfModel: {
      schema: {
        properties: {
          // schema
          title: {
            title: '名称',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性名称 - 必填项',
          },
          description: {
            title: '描述',
            type: 'string',
            default: '',
            // 属性目的性解释
            description: '属性目的性解释',
          },
          // ui
          size: {
            title: '尺寸',
            type: 'string',
            enum: ['default', 'small'],
            default: 'default',
            // 属性目的性解释
            description: '控件大小, 默认值: default',
          },
          // required
          required: {
            title: '是否必填',
            type: 'boolean',
            default: false,
          },
        },
        required: ['title'],
        type: 'object',
      },
      ui: {
        $size: {
          widget: 'radio',
          styleType: 'button',
          buttonStyle: 'solid',
        },
        $required: {
          widget: 'checkbox',
        },
      },
      formData: {
        // schema
        title: '',
        description: '',
        // ui
        size: 'default',
        // required
        required: false,
      },
    }
  }
]