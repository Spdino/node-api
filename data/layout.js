const layout = [{
  cid: '10001',
  component: 'layoutOrder',
  children: [],
  configs: {
  },
  module: {},
  render: `function (h) {
    const context = this
    return h(context.component, context.children.map((child) => {
      return child.render(h)
    }))
  }`
}]

module.exports = layout