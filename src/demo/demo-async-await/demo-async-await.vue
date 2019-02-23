<template>
    <div class="demo-async-await">
        <div>
            <link-button-group>
                <link-button @click="testAjaxLink" label="testAjax"/>
                <link-button @click="testAjaxNotLink" label="testAjaxNotLink"/>
                <link-button @click="testAxios" label="testAxios"/>
                <link-button @click="testAxiosNotLink" label="testAxiosNotLink"/>
            </link-button-group>

        </div>
    </div>
</template>

<script>

    export default {
        name: "demo-async-await",
        data() {
            const that = this
            return {
                ajax: {
                    post(path, param, onSuccess, onError) {
                        this.request(path, param, onSuccess, onError, 'post')
                    },
                    get(path, param, onSuccess, onError) {
                        this.request(path, param, onSuccess, onError, 'get')
                    },
                    request(path, param, onSuccess, onError, method) {
                        setTimeout(() => {
                            if (path.indexOf('link') > -1) {
                                !!onSuccess && onSuccess()
                                that.$message.show(`${method} success`)
                            } else {
                                !!onError && onError()
                                that.$message.show(`${method} error`)
                            }
                        }, 1000)
                    }
                },

                axios: {
                    post(path, param) {
                        return this.request(path, param, 'post')
                    },
                    get(path, param) {
                        return this.request(path, param, 'get')
                    },
                    request(path, param, method) {
                        return new Promise((resolve, reject) => {
                            setTimeout(() => {
                                if (path.indexOf('link') > -1) {
                                    resolve()
                                    that.$message.show(`${method} success`)
                                } else {
                                    reject()
                                    that.$message.show(`${method} error`)
                                }
                            }, 1000)
                        })
                    },
                }
            }
        },
        methods: {
            testAjaxLink() {
                this.ajax.post('link/dakjdsha', null, () => {
                    this.$message.show('testAjax success')
                }, () => {
                    this.$message.show('testAjax error')
                })
            },
            testAjaxNotLink() {
                this.ajax.post('djkahs/dakjdsha', null, () => {
                    this.$message.show('testAjaxNotLink success')
                }, () => {
                    this.$message.show('testAjaxNotLink error')
                })
            },

            testAxios() {
                this.axios.post('link/dakjdsha', null)
                    .then(() => {
                        this.$message.show('testAxios success')
                        return this.axios.post('dasd',{})
                    })
                    .catch(() => {
                        this.$message.show('testAxios error')
                    })
                    .then((data) => {
                        this.$message.show(data)
                    })
            },
            testAxiosNotLink() {
                this.axios.post('dsajkdha/dakjdsha', null)
                    .then(() => {
                        this.$message.show('testAxiosNotLink success')
                    })
                    .catch(() => {
                        this.$message.show('testAxiosNotLink error')
                    })
            },
        }
    }
</script>

<style lang="scss">
    .demo-async-await {
        min-width: initial;
    }
</style>