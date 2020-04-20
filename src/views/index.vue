<style scoped lang="less">
    .index {
        width: 100%;
        position: absolute;
        top: 0;
        bottom: 0;
        left: 0;
        text-align: center;

        h1 {
            height: 150px;

            img {
                height: 100%;
            }
        }

        h2 {
            color: #666;
            margin-bottom: 200px;

            p {
                margin: 0 0 50px;
            }
        }

        .ivu-row-flex {
            height: 100%;
        }
    }
</style>
<template>
    <div class="index">
        <Row type="flex" justify="center" align="middle">
            <Col span="24">
                <h1>
                    <img src="static/images/da.png">
                </h1>
                <h2>
                    <p>开始你的炸弹秀!</p>
                    <Button @click="handleStart">Go!</Button>
                </h2>
            </Col>
        </Row>
    </div>
</template>
<script>
    export default {
        methods: {
            handleStart() {
                this.$router.push({
                    path: '/map',
                });
                /*                this.$Modal.info({
                                    title: 'Bravo',
                                    content: 'Now, enjoy the convenience of View UI.'
                                });*/
            }
        }
    }
</script>
