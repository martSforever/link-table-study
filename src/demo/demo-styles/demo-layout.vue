<template>
    <div class="demo-layout">
        <div class="demo-layout-header"></div>
        <div class="demo-layout-content">
            <div class="demo-layout-content-wrapper">
                <div class="demo-layout-content-left">
                    <div class="demo-layout-content-left-wrapper">
                        <div class="demo-layout-content-left-title">数字化营销平台</div>
                        <div>以消费者运营为核心，利用数据驱动变革，</div>
                        <div>提升全场景消费者体验</div>
                    </div>
                </div>
                <div class="demo-layout-content-right">
                    <div class="demo-layout-content-login">

                    </div>
                </div>
            </div>
        </div>
        <div class="demo-layout-footer"></div>
    </div>
</template>

<script>
    export default {
        name: "demo-layout"
    }
</script>

<style lang="scss">
    .demo-layout {
        background: url(http://116.228.77.183:25080/outer/static/img/bg.358455f.png) no-repeat;
        background-size: cover;
        white-space: nowrap;
        text-align: center;
        overflow: hidden;
        width: 100%;
        height: 100%;

        display: flex;
        flex-direction: column;

        .demo-layout-header {
            height: 9vh;
            border-bottom: solid white 1px;
            box-sizing: border-box;
        }

        .demo-layout-footer {
            height: 9%;
            border-top: solid white 1px;
        }

        .demo-layout-content {
            flex: 1;
            display: flex;
            align-items: center;
            justify-content: center;

            .demo-layout-content-wrapper {
                height: 50vh;
                width: 60vw;
                background-color: rgba(white, 0.15);
                box-shadow: 0 0 15px 5px rgba(white, 0.15);
                display: flex;

                & > div {
                    display: flex;
                    align-items: center;
                    justify-content: center;
                }

                .demo-layout-content-left {
                    color: white;
                    flex: 1;
                    font-size: 1.2vw;

                    .demo-layout-content-left-wrapper {
                        text-align: left;

                        .demo-layout-content-left-title {
                            font-size: 1.8vw;
                            margin-bottom: 16px;
                        }
                    }
                }

                .demo-layout-content-right {
                    flex: 1;

                    .demo-layout-content-login {
                        height: 70%;
                        width: 70%;
                        background-color: white;
                    }
                }
            }
        }
    }
</style>