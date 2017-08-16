## 目录

- [在线演示](#在线演示)
- [参数说明](#参数说明)
- [代码示例](#代码示例)
- [事件](#事件)
- [杂记](#杂记)

## 在线演示

在线演示: [链接](http://htmlpreview.github.io/?https://github.com/ct-adc/ct-adc-custom-input/blob/master/view/number-input-demo.html).

![demo.gif](../../img/number-input-demo.gif)

## 参数说明

名称|类型|默认值|是否必填|描述
--- | --- | --- | --- | --- |
min | Number |  | 是 | 输入框的最小值
max | Number |  | 是 | 输入框的最大值
sep | String | , | 否 | 分隔符，比如将 1000 转换成 1,000
step | Number | 3 | 是 | 分隔位数，默认每 3 位分隔一次，1000 则为 1,000
v-model[.number] | [vue] |  | 是 | 输入框的最大值

## 代码示例

#### JavaScript
```javascript
import { NumberInput } from 'cy-adc-custom-input.vue';

export default {
    components: {
        NumberInput
    },
    data() {
        return {
            setting: {
                min: 1,
                max: 100000,
                sep: ',', // default[,]
                step: 4, // default[3]
                val: 'awdawd12345678'
            }
        };
    }
};
```

#### HTML

```html
<number-input class="form-control"
                              :min="setting.min"
                              :max="setting.max"
                              :sep="setting.sep"
                              :step="setting.step"
                              v-model="setting.val"></number-input>
```

## 事件

- input: 每次输入[input]都触发，返回最新 value
- change: 每次失去焦点[blur]触发，返回最新 value

## 杂记

#### 功能

- 数值范围
  > 设置最小值（min）和最大值（max）

- 整数、浮点数、不限
  > 设置

- 正数、负数、不限
  > 设置

- 千分位逗号分隔
  > 分割位数（step）可以设置、分隔符（sep）可以设置



#### 参数

- min: 最小值
- max: 最大值

- sep: 千分位分隔符
- step: 分割步长

- val: 绑定的数值

#### 处理步骤

1. 将输入的字符 val 格式化
  - 使用相应数字类型的正则，将 val 格式化为所需要的数字类型 num
  - 整数非 0 开头；无小数点；无负号
  - 浮点数小于 0 可以 0 开头，此外不能 0 开头；可以有一个小数点
  - 正数不能出现负号（也不考虑 + 符号）
  - 负数 - 开头，只能一个 -
2. 判断 num 的范围
  - 如果小于 min，则 num 为 min
  - 如果大于 max，则 num 为 max
  - 否则，则 num 不变
3. emit 此时的 num
4. 将 num 用分隔符 sep 进行分割，分割步长为 step
  - 将数字以非数字符（负号、小数点）分割成数组
  - 整数部分，每 step 个长度插入一个 sep
  - 合并数组成 val
5. 显示 val

#### 问题

- 如果实时限制 val 的 min、max，则无法更改第一个数字，比如 1~1000，如何输入 2
 - 可以 emit change 的时候判断校正数值范围

- 如果实时格式化千分位，会导致光标位置错位（概率性出现）
  - 同样也可以 emit change 的时候格式化（不喜欢这种方式）
  - 在 input 的时候，使用 [selectText](https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLInputElement/setSelectionRange) 将光标移至末尾