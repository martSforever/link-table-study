<template>
    <div class="demo-animation">
        <div>
            <link-toggle v-model="flag"/>
        </div>
        <div class="demo-animation-login-type-wrapper">
            <div>二维码登录</div>
            <div>账号密码登录</div>
            <div>第三方登录</div>
        </div>
        <div>
            <div class="demo-animation-login">
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
        </div>
    </div>
</template>

<script>
    export default {
        name: "demo-animation",
        data() {
            return {
                flag: true,
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

            & > div {
                flex: 1;
                text-align: center;
                padding: 12px 0;
            }
        }

        .demo-animation-login {
            width: 300px;
            box-shadow: 0 0 15px 1px #ddd;
            box-sizing: border-box;
            padding: 50px 12px;

            & > div {
                display: flex;
                align-items: center;
                justify-content: space-between;

                &:not(:last-child) {
                    margin-bottom: 12px;
                }
            }
        }
    }
</style>