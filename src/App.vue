<template>
    <div class="app">
        <div class="app-header"></div>
        <div class="app-body">
            <div class="app-left">
                <div class="app-menu">
                    <div class="app-menu-item"
                         v-for="(menu,index) in menus"
                         :key="index"
                         @click="$refs.tabs.push(menu.path,menu.name)">
                        <span>{{menu.name}}</span>
                        <link-icon icon="pl-arrow-right"/>
                    </div>
                </div>
            </div>
            <div class="app-right">
                <link-navigator-tab ref="tabs" id="1544529635688"
                                    :initPages="[{title:'demo-for-render',path:'/demo-for-render/demo-for-render'}]"/>
            </div>
        </div>
    </div>
</template>

<script>
    import DemoList from "./demo/demo-list";
    import DemoForRender from "./demo/demo-for-render/demo-for-render";

    export default {
        name: 'app',
        components: {
            DemoForRender,
            DemoList,
        },
        data() {
            return {
                menus: [
                    {
                        name: '选订单选产品服务实现demo',
                        path: '/demo-for-render/demo-for-render'
                    },
                    {
                        name: '渲染函数以及作用域插槽demo',
                        path: '/demo-list'
                    },
                    {
                        name: '讲解async|await示例页面',
                        path: '/demo-async-await/demo-async-await'
                    },
                    {
                        name: 'BaseTable基础实现',
                        path: '/demo-table/demo-table'
                    },
                    {
                        name: 'BaseTable固定列实现',
                        path: '/demo-table/demo-table-fixed'
                    },
                    {
                        name: 'Scroll滚动条组件示例',
                        path: '/demo-scroll/demo-scroll'
                    },
                ]
            }
        },
    }
</script>

<style lang="scss">
    html, body, .app {
        height: 100%;
        width: 100%;
        padding: 0;
        margin: 0;

        .app {
            display: flex;
            flex-direction: column;
        }

        .app-header {
            height: 64px;
            width: 100%;
            border-bottom: solid 1px #ddd;
        }

        .app-body {
            flex: 1;
            width: 100%;
            display: flex;

            .app-left {
                width: 250px;
                height: 100%;
                border-right: solid 1px #ddd;

                .app-menu-item {
                    font-size: 14px;
                    padding: 9px 12px;
                    display: flex;
                    align-items: center;
                    justify-content: space-between;
                    font-family: "PingFang HK";
                    cursor: pointer;

                    &:hover {
                        background-color: #f2f2f2;
                    }
                }
            }

            .app-right {
                flex: 1;
                height: 100%;
                overflow-y: hidden;
            }
        }
    }
</style>
