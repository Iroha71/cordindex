<template>
<div class="col-12 col-lg-10 col-md-12 parent">
    <div class="content">
        <h1>NUXT.js</h1>

        <ul>
            <li><a href="#project">プロジェクト作成</a></li>
            <li><a href="#serve">サーバ起動</a></li>
            <li><a href="#urlParam">urlパラメータ取得</a></li>
            <li><a href="#queryStr">クエリストリング取得</a></li>
            <li><a href="#ajax">Ajax関連</a></li>
            <li><a href="#localStorage">ローカルストレージへの保存</a></li>
            <li><a href="#middleware">ミドルウェア</a></li>
            <li><a href="#accessBody">bodyにアクセス</a></li>
        </ul>

        <h2 id="project">プロジェクト作成</h2>
        <p class="bold">yarn create nuxt-app [プロジェクト名]</p>
        <p>npx create-nuxt-app [プロジェクト名] (yarnがないとき)</p>
        
        <h2 class="serve">サーバ起動</h2>
        <p class="bold">yarn dev</p>
        <p>npm run dev (yarnがないとき)</p>
        <h3>デフォルトポート変更</h3>
        <code>package.json</code>
        <pre>
            <code>
    "scripts":{
        "dev": "nuxt --port 3001"
    }
            </code>
        </pre>

        <h2 id="urlParam">urlパラメータ取得</h2>
        <p>例）~localhost:3000/user/1</p>
        <h3>params引数があるとき(asyncDataなど)</h3>
        <p class="bold">params.id</p>
        <h3>methodsなどのとき</h3>
        <p class="bold">this.$nuxt.$route.params.id</p>

        <h2 id="queryStr">クエリストリング取得</h2>
        <p>例）~localhost:3000/user?id=1</p>
        <h3>query引数があるとき(asyncDataなど)</h3>
        <p class="bold">query.id</p>
        <h3>methodsなどのとき</h3>
        <p class="bold">this.$route.query.id</p>

        <h2 id="ajax">Ajax関連(axios)</h2>
        <h3>書き方</h3>
        <p class="bold">this.$axios.$get(url).then(res => {})</p>
        <ul>
            <li><p class="bold">return this.$axios.get(url)</p></li>
            <ul>
                <li>共通化する書き方</li>
            </ul>
        </ul>
        <h3>ヘッダの設定</h3>
        <code>plugins/axios.js</code>
        <pre>
            <code>
    export default function({$axios, store}){
        $axios.onRequest(config => {
            config.headers.common['Authorization'] = `トークンなど`
        })
        return config
    }
            </code>
        </pre>
        <code>nuxt.confing.hs</code>
        <pre>
            <code>
    plugins:[
        '~/plugins/axios.js'
    ]
            </code>
        </pre>

        <h2 id="localStorage">localStorageへの保存</h2>
        <p class="bold">yarn add vuex-persistedstate</p>
        <code>plugins/persistedstate.js</code>
        <pre>
            <code>
    import createPersistedState from 'vuex-persistedstate'
    export default({store}) => {
        window.onNuxtReady(() => {
            createPersistedState({key: 'キー名'})(store)
        })
    }
            </code>
        </pre>
        <code>nuxt.confing.hs</code>
        <pre>
            <code>
    plugins:[
        '~/plugins/persistedstate.js'
    ]
            </code>
        </pre>

        <h2 id="middleware">ミドルウェア</h2>
        <code>middleware/auth.js</code>
        <pre>
            <code>
    export default function({route, redirect, store}){
        ユーザチェックなどの処理
    }
            </code>
        </pre>

        <h2 id="accessBody">bodyにアクセス</h2>
        <pre>
            <code>
    export default{
        head(){
            return{
                bodyAttrs:{
                    class: 'クラス名'
                }
            }
        }
    }
            </code>
        </pre>
    </div>
</div>
</template>

<script>
export default {
    layout: 'desc'
}
</script>