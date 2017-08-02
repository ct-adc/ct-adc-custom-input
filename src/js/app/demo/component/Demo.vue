<template>
    <div class="container-fluid" id="demo">
        <div class="col-md-6 col-md-offset-3 mt20">

            <div class="form-horizontal">

                <div class="form-group">
                    <div class="col-sm-12">
                        <number-input class="form-control" placeholder="maxlength 10"
                                      :min="setting.min"
                                      :max="setting.max"
                                      :sep="setting.sep"
                                      :step="setting.step"
                                      v-model="setting.val"></number-input>
                    </div>
                </div>

            </div>

        </div>
    </div>
</template>

<script type="text/ecmascript-6">
    import NumberInput from '../../../../component/number-input.vue';

    export default {
        components: {
            NumberInput
        },
        data() {
            return {
                setting: {
                    min: 1,
                    max: 100000,
                    sep: ',',
                    step: 3,
                    val: 'awdawd12345678'
                }
            };
        },
        methods: {}
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>

</style>
