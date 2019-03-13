const BasicTableMixin = {
    props: {
        data: {type: Array, default: () => []},         //basicTable渲染的行数组数据
        bodyRowHeight: {type: Number, default: 36},     //表体的行高
        headRowHeight: {type: Number, default: 40},     //标题的行高
        headColumns: {type: Array},                     //渲染表头的列信息数组
        bodyColumns: {type: Array},                     //渲染表体的列信息数组
    },
}
export {
    BasicTableMixin
}