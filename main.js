
// Vueインスタンスの作成
// コンストラクタ関数Vueを使用
// 返り値はルートのインスタンス 変数化しておくとコンソールからアクセスできる
// app vmといった変数名が使用される
var app = new Vue({
  // オプション
  el: '#app',
  data: {
    // message: 'Hello, Vue.js!'
    // list:['りんご', 'ばなな', 'いちご']

  },

  methods: {
    // ボタンを押すと、handleClickメソッドが動く
    handleClick: function(event){
      // eventのDOMを返すプロパティ
      alert(event.target) // [object HTMLButtonElement]
    }
  }
})

// オプションに定義したデータは外部から次のようにアクセスできる
// app.data.messageではないことに注意！
// console.log(app.message)

// app.list.push('おれんじ')
// console.log(app.list[0])