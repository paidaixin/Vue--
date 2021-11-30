import Vue from 'vue'
import Dialog from './index.vue'

let instance = null
const Builder = Vue.extend(Dialog)

class Getcomponent {
    constructor(options) {
        this.options = options
    }
    init() {
        if (instance) return
        instance = new Builder({
            render: (createElement) => {
                return createElement(Dialog, {
                    props: { ...this.options }
                })
            }
            // 以 jsx 语法编写
           /*  render: (h: CreateElement) => {
                return (
                    <Dialog></Dialog>
                )
            } */
        })
        // console.log(instance);
        instance.vm = instance.$mount()
        document.body.appendChild(instance.vm.$el);
        return instance
    }
    hide() {
        instance.vm.$el.remove();
        instance = null;
    }
}

const getComponent = (options) => {
    return new Getcomponent(options)
}

export default {
    install(Vue) {
        Vue.prototype.$Dialog = getComponent
    }
}