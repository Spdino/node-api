const comData = [{
    cid: '20001',
    component: 'Range',
    configs: {
      selecTypes: ['单据']
    },
    model: {
      prop: [{
        name: 'RangeData',
        type: 'Array',
        hidden: true,
        value: ''
      }]
    },
    render: `function(h) {
    const context = this
    return h(context.component, {
      props: {
        Fields: context.model.prop[0].value
      },
      slot: 'Range'
    })
  }`
  },
  {
    cid: '20002',
    component: 'listTable',
    configs: {
      selecTypes: ['单据']
    },
    model: {
      prop: [{
        name: 'listTableData',
        type: 'Array',
        hidden: true,
        value: ''
      }]
    },
    render: `function (h) {
      const context = this
      return h(context.component, {
        props: {
          elTheadList: context.model.prop[0].value
        },
        slot: 'listTable'
      })
    }`
  },
  {
    cid: '20003',
    component: 'detailForm',
    configs: {
      selecTypes: ['单据']
    },
    model: {
      prop: [{
        name: 'detailFormData',
        type: 'Array',
        hidden: true,
        value: ''
      }]
    },
    render: `function (h) {
      const context = this
      return h(context.component, {
        props: {
          formList: context.model.prop[0].value
        },
        slot: 'detailForm'
      })
    }`
  },
  {
    cid: '20004',
    component: 'opreationGroup',
    configs: {
      selecTypes: ['单据']
    },
    model: {
      prop: []
    },
    render: `function (h) {
      const context = this
      return h(context.component, {
        slot: 'opreationGroup'
      })
    }`
  },
  {
    cid: '20005',
    component: 'detailTab',
    configs: {
      selecTypes: ['单据']
    },
    children: [],
    model: {
      prop: [{
        name: 'tabs',
        type: 'Array',
        hidden: true,
        value: ''
      }]
    },
    render: `function (h) {
      const context = this
      return h(context.component, {
        props: {
          tabs: context.model.prop[0].value
        },
        slot: 'detailTab'
      }, context.children.map((child) => {
        return child.render(h)
      }))
    }`
  },
  {
    cid: '20006',
    component: 'ProductDetails',
    parentId: '20005',
    configs: {
      selecTypes: ['单据']
    },
    model: {
      prop: [{
        name: 'detailColumns',
        type: 'Array',
        hidden: true,
        value: ''
      }]
    },
    render: `function (h) {
      const context = this
      return h(context.component, {
        props: {
          columns: context.model.prop[0].value
        },
        slot: 'ProductDetails'
      })
    }`
  },
  {
    cid: '20007',
    component: 'AssociatedDocuments',
    parentId: '20005',
    configs: {
      selecTypes: ['单据']
    },
    model: {
      prop: [{
        name: 'formList',
        type: 'Array',
        hidden: true,
        value: ''
      }],
      selecTypes: ['单据']
    },
    render: `function (h) {
      const context = this
      return h(context.component, {
        props: {
          formList: context.model.prop[0].value
        },
        slot: 'AssociatedDocuments'
      })
    }`
  },
  {
    cid: '20008',
    component: 'CooperativePartner',
    parentId: '20005',
    configs: {
      selecTypes: ['单据']
    },
    model: {
      prop: [{
        name: 'formList',
        type: 'Array',
        hidden: true,
        value: ''
      }]
    },
    render: `function (h) {
      const context = this
      return h(context.component, {
        props: {
          formList: context.model.prop[0].value
        },
        slot: 'CooperativePartner'
      })
    }`
  },
  {
    cid: '20009',
    component: 'storeData',
    parentId: '20005',
    configs: {
      selecTypes: ['单据']
    },
    model: {
      prop: [{
        name: 'formList',
        type: 'Array',
        hidden: true,
        value: ''
      }]
    },
    render: `function (h) {
      const context = this
      return h(context.component, {
        props: {
          formList: context.model.prop[0].value
        },
        slot: 'storeData'
      })
    }`
  }
]

module.exports = comData