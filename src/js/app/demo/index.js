import Vue from 'vue';
import Demo from './component/Demo.vue';

new Vue({
    el: '#demo',
    render: h => h(Demo)
}).$mount('#demo');
