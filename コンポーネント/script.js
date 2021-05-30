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

