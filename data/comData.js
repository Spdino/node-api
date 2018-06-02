const data = {
  listTableData: [{
    name: '单据编号',
    value: 'VBELN'
  },
  {
    name: '单据日期',
    value: 'AUDAT'
  },
  {
    name: '单据类型',
    value: 'AUART'
  },
  {
    name: '售达方',
    value: 'KUNNR'
  },
  {
    name: '送达方',
    value: 'KUNWE'
  },
  {
    name: '销售组织',
    value: 'VKORG'
  },
  {
    name: '分销渠道',
    value: 'VTWEG'
  },
  {
    name: '产品组',
    value: 'SPART'
  },
  {
    name: '交货日期',
    value: 'VDATU'
  },
  {
    name: '制单人',
    value: 'VSNMR_V'
  },
  {
    name: '制单日期',
    value: 'AUDAT'
  },
  {
    name: '审核人',
    value: 'BNAME'
  },
  {
    name: '审核日期',
    value: 'MAHDT'
  },
  {
    name: '最后修改人',
    value: 'IHREZ'
  },
  {
    name: '最后修改时间',
    value: 'VBAK-MAHDT'
  }
  ],
  RangeData: [{
    label: '单据编号',
    name: 'RANGE_VBELN',
    type: 'text'
  },
  {
    label: '售达方',
    name: 'RANGE_KUNNR',
    type: 'text'
  },
  {
    label: '送达方',
    name: 'RANGE_ KUNWE',
    type: 'text'
  },
  {
    label: '销售组织',
    name: 'RANGE_VKORG',
    type: 'text'
  },
  {
    label: '分销渠道',
    name: 'RANGE_VTWEG',
    type: 'text'
  },
  {
    label: '产品组',
    name: 'RANGE_SPART',
    type: 'text'
  },
  {
    label: '制单人',
    name: 'RANGE_ VSNMR',
    type: 'text'
  },
  {
    label: '制单日期',
    type: 'date',
    name: 'RANGE_ERDAT'
  },
  {
    label: '审核人',
    name: 'RANGE_ BNAME',
    type: 'text'
  },
  {
    label: '审核日期',
    type: 'date',
    name: 'RANGE_MAHDT'
  },
  {
    label: '订单状态',
    name: 'RANGE_ LIFSK',
    type: 'text'
  },
  {
    label: '交货日期',
    type: 'date',
    name: 'RANGE_VDATU'
  }
  ],
  detailFormData: [
    {
      text: '订单状态',
      value: 'LIFSK',
      type: 'input'
    },
    {
      text: '订单编号',
      value: 'VBELN',
      type: 'input'
    },
    {
      text: '手工单号',
      value: 'BSTNK',
      type: 'input'
    },
    {
      text: '单据类型',
      value: 'AUART',
      type: 'input',
      required: true
    },
    {
      text: '价格类型',
      value: 'KALSM',
      type: 'input'
    },
    {
      text: '销售组织/分销渠道/产品组',
      value: 'xsfw',
      type: 'range',
      required: true
    },
    {
      text: '售达方',
      value: 'KUNNR',
      type: 'input'
    },
    {
      text: '送达方',
      value: 'KUNWE',
      type: 'input'
    },
    {
      text: '订单日期',
      value: 'AUDAT',
      type: 'date'
    },
    {
      text: '交货日期',
      value: 'VDATU',
      type: 'date'
    },
    {
      text: '备注',
      value: 'NOTES',
      type: 'input',
      width: 2
    }
  ],
  tabs: [
    {
      label: '货品明细',
      name: 'ProductDetails'
    },
    {
      label: '关联单据',
      name: 'AssociatedDocuments'
    },
    {
      label: '合作伙伴',
      name: 'CooperativePartner'
    },
    {
      label: '扩展描述',
      name: 'storeData'
    }
  ],
  detailColumns: [
    {
      text: ' ',
      value: 'line',
      width: '120'
    },
    {
      text: '货号',
      value: 'MATNR',
      type: 'input',
      width: '180'
    },
    {
      text: '品名',
      value: 'ARKTX',
      width: '200'
    },
    {
      text: '吊牌价',
      value: 'KBETR1',
      class: 'td-bg'
    },
    {
      text: '折扣',
      value: 'KBETR2',
      class: 'td-bg'
    },
    {
      text: '结算价',
      value: 'KBETR4',
      class: 'td-bg'
    },
    {
      text: '数量',
      value: 'KWMENG',
      class: 'td-bg'
    },
    {
      text: '金额',
      value: 'KBETR6'
    },
    {
      text: '交货日期',
      value: 'VDATU'
    },
    {
      text: '拒绝原因',
      value: 'ABGRU'
    }
  ]
}

module.exports = data
