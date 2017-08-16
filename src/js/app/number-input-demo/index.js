import Vue from 'vue';
import Demo from './component/demo.vue';

new Vue({
    el: '#demo',
    render: h => h(Demo)
}).$mount('#demo');
