<template>
<div class="col-sm-12 col-md-12 col-lg-10 parent">
    <div class="content">
        <h1>Ruby on Rails (~><nuxt-link to="/ruby/devise">DEVISE</nuxt-link>, ~><nuxt-link to="/ruby/mail">メール関連</nuxt-link>)</h1>
        <ul>
            <li><a href="#project">プロジェクト作成</a></li>
            <li><a href="#dbInit">データベース作成</a></li>
            <li><a href="#controller">コントローラ</a></li>
            <li><a href="#model">モデル</a></li>
            <li><a href="#rooting">ルーティング</a></li>
            <li><a href="#migrate">マイグレーション</a></li>
        </ul>
        <h2 id="project">プロジェクト作成</h2>
        <p class="bold">rails new アプリ名 [-d mysql][--api]</p>
        <ul>
            <li><code>-d DB名</code>でデータベースの種類を指定</li>
            <li><code>--api</code>でAPIモードで作成</li>
        </ul>
        <h2 id="dbInit">データベース作成</h2>
        <code>config/database.yml</code>
        <pre>
            <code>
    default: &default
        ~~
        username: ユーザ名
        password: パスワード
            </code>
        </pre>

        <h2 id="serve">サーバ起動</h2>
        <p class="bold">rails s</p>

        <h2 id="controller">コントローラ</h2>
        <h3>作成</h3>
        <p class="bold">rails g controller コントローラ名</p>
        <p>例</p>
        <ul>
            <li><code>rails g controller User</code></li>
            <li><code>rails g controller api::User</code></li>
        </ul>
        <h3>メソッド</h3>
        <h4>検索</h4>
        <ul>
            <li><code>User.find_by(id: 1)</code></li>
            <li><code>User.where(id: 1)</code></li>
        </ul>
        <h4>レコード作成</h4>
        <ul>
            <li><code>User.new(name: 'hoge', email: 'hoge@example.com').save!</code></li>
            <li><code>User.new(params.require(:user).permit(:name)).save!</code></li>
            <ul>
                <li>ストロングパラメータでの書き方</li>
            </ul>
        </ul>
        <h4>更新</h4>
        <ul>
            <li><code>User.update_all(name: 'hoge')</code></li>
            <li><code>User.update()</code></li>
        </ul>
        <h4>削除</h4>
        <ul>
            <li><code>User.delete()</code></li>
            <li><code>User.destroy()</code></li>
        </ul>

        <h2 id="model">モデル</h2>
        <p class="bold">rails g model モデル名</p>
        <h3>アソシエーション</h3>
        <p class="bold">has_many :posts</p>
        <ul><li>1:多</li></ul>
        <p class="bold">belongs_to :user</p>
        <ul><li>多:1</li></ul>
        <h3>メソッド</h3>
        <p class="bold">has_secure_password</p>
        <ul><li>パスワードをハッシュ化</li></ul>
        <p class="bold">has_secure_token</p>
        <ul><li>ユニークなトークンを発行</li></ul>

        <h2 id="rooting">ルーティング(config/route.rb)</h2>
        <p class="bold">httpメソッド パス => モデル#メソッド</p>
        <p>例</p>
        <ul><li><code>get '/login' => 'user#login'</code></li></ul>
        <h3>resourceルーティング</h3>
        <pre>
            <code>
    namespace 'api', {format: 'json'} do
        resources :user do
            collection do   #urlが固定(user/login)など
                get :login
            end

            member do       #urlが動的(user/1/mypage)など
                get :mypage
            end
            </code>
        </pre>
        <h2 id="migrate">マイグレーション</h2>
        <h3>実行</h3>
        <p class="bold">rails db:migrate</p>
        <h3>やり直し</h3>
        <p class="bold">rails db:rollback</p>
        <h3>シード</h3>
        <p class="bold">rails db:seed</p>
        <h3>ファイル作成</h3>
        <p class="bold">rails g migration ファイル名(AddNameToUserなど)</p>
        <pre>
            <code>
    def up #変更内容を記述
        change_column :users, :name, :string, null: false #カラムの変更(テーブル名、カラム名、型、オプション)

        add_column :users, :name, :string, default: '', after: :email #カラム追加(テーブル名、カラム名、型、オプション、追加位置の指定)

        remove_column :users,:name #カラム削除
    end
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