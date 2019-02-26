<template>
    <div class="demo-scroll">
        <div class="demo-scroll-box">
        <link-scroll scroll-x>
            <div class="demo-scroll-inner-box">
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
            </div>
        </link-scroll>
    </div>

        <div class="demo-scroll-box">
            <div class="demo-scroll-inner-box">
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
                开始讲电话卡计划的卡号的开挖机会点卡
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        name: "demo-scroll"
    }
</script>

<style lang="scss">
    .demo-scroll {
        display: block;
        .demo-scroll-box {
            height: 300px;
            width: 300px;
            overflow: auto;
            display: inline-block;
            margin-right: 12px;
            .demo-scroll-inner-box {
                height: 500px;
                width: 500px;
                background-color: grey;
                color: white;
            }
        }
    }
</style>