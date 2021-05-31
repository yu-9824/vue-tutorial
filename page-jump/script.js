// 1. ルートコンポーネントを定義します
// 他のファイルからインポートすることもできます
const Index = { template: '<div>index</div>' }
const Work = { template: '<div>work</div>' }



// 2. ルートをいくつか定義します
// 各ルートは 1 つのコンポーネントとマッピングされる必要があります。
// このコンポーネントは実際の `Vue.extend()`、
// またはコンポーネントオプションのオブジェクトでも構いません。
// ネストされたルートに関しては後で説明します
const routes = [
    {
      path: '/',           //パスの設定
      component: Index,    //表示するコンポーネント
      name: 'index',       //ルートの名前を指定
    },
    {
      path: '/work',            
      component: Work,
      name: 'work',
    },
  ]

// 3. ルーターインスタンスを作成して、ルートオプションを渡します
// 追加のオプションをここで指定できますが、
// この例ではシンプルにしましょう
const router = new VueRouter({
    mode: 'history',
    routes: routes // `routes: routes` の短縮表記
})

// 4. root となるインスタンスを作成してマウントします
// アプリケーション全体がルーターを認知できるように、
// ルーターをインジェクトすることを忘れないでください。
var app = new Vue({
    router,
  }).$mount('#app')
  
  // これで開始です!