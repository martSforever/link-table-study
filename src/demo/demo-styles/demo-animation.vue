<template>
    <div class="demo-animation">
        <div>
            <link-toggle v-model="flag"/>
        </div>
        <div class="demo-animation-login-type-wrapper">
            <div class="demo-animation-login-type-item"
                 :class="{'demo-animation-login-type-item-active':type === TYPE.CODE}"
                 @click="type=TYPE.CODE">
                二维码登录
            </div>
            <div class="demo-animation-login-type-item"
                 :class="{'demo-animation-login-type-item-active':type === TYPE.PASSWORD}"
                 @click="type=TYPE.PASSWORD">
                账号密码登录
            </div>
            <div class="demo-animation-login-type-item"
                 :class="{'demo-animation-login-type-item-active':type === TYPE.THIRD}"
                 @click="type=TYPE.THIRD">
                第三方登录
            </div>
        </div>
        <div class="demo-animation-type-wrapper">
            <div class="demo-animation-login"
                 :class="[`demo-animation-login-${type === TYPE.PASSWORD?'show':'hide'}`]">
                <div>
                    <span>用户名：</span>
                    <link-input/>
                </div>
                <div>
                    <span>密码：</span>
                    <link-input/>
                </div>
                <div>
                    <link-button label="登录" long/>
                </div>
            </div>
            <div class="demo-animation-code"
                 :class="[`demo-animation-login-${type === TYPE.CODE?'show':'hide'}`]">
                <img src="http://116.228.77.183:25080/outer/static/img/link-crm-prod.befc1b4.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>

    const TYPE = {
        CODE: 1,
        PASSWORD: 2,
        THIRD: 3,
    }

    export default {
        name: "demo-animation",
        data() {
            return {
                flag: true,

                type: TYPE.PASSWORD,
                TYPE,
            }
        },
    }
</script>

<style lang="scss">
    .demo-animation {
        .demo-animation-login-type-wrapper {
            width: 300px;
            display: flex;
            align-items: center;

            .demo-animation-login-type-item {
                flex: 1;
                text-align: center;
                height: 36px;
                line-height: 36px;

                &.demo-animation-login-type-item-active {
                    box-sizing: border-box;
                    border-bottom: solid $color-warn 2px;
                }
            }
        }

        .demo-animation-type-wrapper {
            position: relative;

            & > div {
                position: absolute;
                top: 0;
                left: 0;
                transition: all 0.15s linear;
                background-color: white;
            }

            .demo-animation-login-show {
                transform: rotateY(0) perspective(0px);
                z-index: 1;
            }

            .demo-animation-login-hide {
                transform: rotateY(90deg) perspective(600px);
                z-index: 0;
            }

            .demo-animation-code {
                width: 300px;
                padding: 30px;
                box-sizing: border-box;

                img {
                    width: 100%;
                    height: auto;
                }
            }

            .demo-animation-login {
                width: 300px;
                height: 300px;
                box-shadow: 0 0 15px 1px #ddd;
                box-sizing: border-box;
                padding: 50px 12px;
                background-color: white;

                display: flex;
                flex-direction: column;
                justify-content: center;

                & > div {
                    display: flex;
                    align-items: center;
                    justify-content: space-between;

                    &:not(:last-child) {
                        margin-bottom: 24px;
                    }
                }
            }
        }

    }
</style>