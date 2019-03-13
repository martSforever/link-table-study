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
            <!--<transition name="demo-animation-rotate">-->
            <transition name="demo-animation-rotate">
                <div class="demo-animation-login demo-animation-item" key="login" v-if="type === TYPE.PASSWORD">
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
                <div class="demo-animation-code demo-animation-item" key="code" v-if="type === TYPE.CODE">
                    <img src="http://116.228.77.183:25080/outer/static/img/link-crm-prod.befc1b4.png" alt="">
                </div>
                <div class="demo-animation-third demo-animation-item" key="third" v-if="type === TYPE.THIRD">
                    <div>
                        <link-button label="QQ登录"/>
                    </div>
                </div>
            </transition>
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

            .demo-animation-item {
                position: absolute;
                left: 0;
                top: 0;
                transition: all 0.15s linear;
                background-color: white;
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

            .demo-animation-third {
                width: 300px;
                height: 300px;
                display: flex;
                align-items: center;
                justify-content: center
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

    .demo-animation-rotate-enter {
        transform: perspective(600px) rotateY(-180deg);
        opacity: 0;
    }

    .demo-animation-rotate-enter-active {

    }

    .demo-animation-rotate-enter-to {
        transform: perspective(600px) rotateY(0deg);
        opacity: 1;
    }

    .demo-animation-rotate-leave {
        transform: perspective(600px) rotateY(0deg);
        opacity: 1;
    }

    .demo-animation-rotate-leave-active {

    }

    .demo-animation-rotate-leave-to {
        transform: perspective(600px) rotateY(180deg);
        opacity: 0;
    }

    .slide-fade-enter-active {
        transition: all 3s ease;
    }

    .slide-fade-leave-active {
        transition: all 3s cubic-bezier(1.0, 0.5, 0.8, 1.0);
    }

    .slide-fade-enter, .slide-fade-leave-to {
        opacity: 0;
    }

</style>