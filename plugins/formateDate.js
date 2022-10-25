import Vue from 'vue'

export default () => {
    Vue.filter('formateDate', function (value) {
        if (!value) return ''

        const options = { year: 'numeric', month: 'long', day: 'numeric' }
        return new Date(value).toLocaleDateString('de', options)
    })
}