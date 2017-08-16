<template>
    <input :value="value"
           @input="updateValue($event.target.value)"
           @blur="handleChange($event.target.value)"
           v-model="val"
           ref="input">
</template>

<script type="text/ecmascript-6">
    export default {
        name: 'vue-number-input-demo',
        mounted() {
            this.handleChange(this.value);
        },
        props: {
            value: {
                required: true,
                type: [Number, String]
            },

            min: {
                type: Number
            },
            max: {
                type: Number
            },

            numberType: {
                type: String,
                default: 'integer'
            },

            sep: {
                type: String,
                default: ','
            },
            step: {
                type: Number,
                default: 3
            }
        },
        data() {
            return {
                val: '',

                pattern: ''
            };
        },
        methods: {
            formatValue(val) {
                const formattedValue = val.toString().replace(/^0+(?=\d)|\D*/g, '');

                return formattedValue;
            },

            // 限制数值大小
            restrictValue(num) {
                if (num === '' || parseFloat(num) < this.min) {
                    return this.min;
                }

                if (parseFloat(num) > this.max) {
                    return this.max;
                }

                return num;
            },

            selectText(el) {
                const len = this.val.length;

                setTimeout(() => {
                    el.setSelectionRange(len, len); // 光标移至末尾
                }, 0);
            },

            updateValue(val) {
                const value = this.formatValue(val);

                this.val = this.splitNumber(value, this.step, this.sep);
                this.selectText(this.$refs.input);
                this.emitInput(value);
            },

            handleChange(val) {
                let value = this.formatValue(val);

                value = this.restrictValue(value);
                value = this.splitNumber(value, this.step, this.sep);

                this.val = value;

                this.emitInput(value);
                this.emitChange(value);
            },

            emitInput(val) {
                this.$emit('input', this.formatValue(val));
            },
            emitChange(val) {
                this.$emit('change', this.formatValue(val));
            },

            splitNumber(num, len = 3, sep = ',') {
                const reg = new RegExp('\\B(?=(?:\\d{' + len + '})+(?!\\d))', 'g');

                const parts = (num + '').split('.');

                if (parts[0].length > len) {
                    parts[0] = parts[0].replace(reg, sep);
                }

                return parts.join('.');
            }

        },
        watch: {
            value(val) {
                this.updateValue(val);
            }
        }
    };
</script>

<style>
</style>
