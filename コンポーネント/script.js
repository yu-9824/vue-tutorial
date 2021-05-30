// var component = {
//     template: `
//         <div id="app-2">
//             <comp2/>
//         </div>`,
// }

Vue.component('comp-1', {
    template: `
    <div id='app-2'>
        <comp-2/>
    </div>
    `
})

Vue.component('comp-2', {
    data: function() {
        return {
            message: 'ccc',
        }
    },
    template: '<p> {{message}} </p>',
})

var app = new Vue({
    el: '#app',
})

var app2 = new Vue({
    el: '#app-2',
    data: {
        message: 'bbb'
    }
})


// ================================
// appとapp2のやり方をlocal定義にしただけ．しかし，これをすると結果は正しく表示されるもののエラーコードが出る．
// ================================

component3 = {
    template: `
    <div id='app-4'>
        <comp-4/>
    </div>
    `
}

var app3 = new Vue ({
    el: '#app-3',
    components: {
        'comp-3': component3,
    },
})

component4 = {
    data: function() {
        return {
            message: 'abc',
        }
    },
    template: '<p> {{message}} </p>',
}

var app4 = new Vue({
    el: '#app-4',
    data: {
        message: '',
    },
    components: {
        'comp-4': component4
    }
})