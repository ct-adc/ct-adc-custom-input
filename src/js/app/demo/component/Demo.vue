<template>
    <div class="container-fluid" id="demo">
        <div class="col-md-4 col-md-offset-3 mt20">

            <div class="row">
                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="control-label">数字范围：</label>

                        <div class="input-group m-b-5">
                            <span class="input-group-addon">min</span>
                            <input type="text" class="form-control"
                                   v-model.number="setting.min">
                        </div>

                        <div class="input-group">
                            <span class="input-group-addon">max</span>
                            <input type="text" class="form-control"
                                   v-model.number="setting.max">
                        </div>
                    </div>
                </div>

                <div class="col-sm-6">
                    <div class="form-group">
                        <label class="control-label">数字分割：</label>

                        <div class="input-group m-b-5">
                            <span class="input-group-addon">sep</span>
                            <input type="text" class="form-control" readonly
                                   v-model.number="setting.sep">
                        </div>

                        <div class="input-group">
                            <span class="input-group-addon">step</span>
                            <input type="text" class="form-control" readonly
                                   v-model.number="setting.step">
                        </div>
                    </div>
                </div>
            </div>

            <div class="form-group">
                <label class="control-label">演示：</label>
                <number-input class="form-control"
                              :min="setting.min"
                              :max="setting.max"
                              :sep="setting.sep"
                              :step="setting.step"
                              v-model="setting.val"></number-input>
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
                    step: 4,
                    val: 'awdawd12345678'
                }
            };
        }
    };
</script>

<style rel="stylesheet/scss" lang="scss" scoped>
    .m-b-5 {
        margin-bottom: 5px;
    }
</style>
