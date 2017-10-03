
var app = new Vue({
    el: '#app',
    data: {
        message: null,
        response: null,
    },
    methods: {
        getData: function (api) {
            Vue.axios.get(api).then((response) => {
                this.response = response.data
            })
        },
        getCurrentWeather: function () {
            var api = "http://127.0.0.1:8080/test.json"
            this.getData(api)
        }
    }
})