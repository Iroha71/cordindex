<template>
<div class="col-sm-12 col-md-12 col-lg-10 parent">
    <div class="content">
        <h1>DEVISE(Railsユーザ認証Gem)</h1>
        <p class="bold">メール認証する場合 => <nuxt-link to="/ruby/mail">メール設定</nuxt-link></p>
        <h2>インストール</h2>
        <code>Gemfile</code><span> ->追記したら<span class="bold">bundle install</span></span>
        <pre>
            <code>
    gem 'devise'
    gem 'devise_token_auth'
            </code>
        </pre>

        <h2>モデル作成</h2>
        <p>1.<span class="bold">rails g devise:install</span></p>
        <ul><li>devise本体のインストール</li></ul>
        <p>2.<span class="bold">rails g devise_token_auth:install User auth</span></p>
        <ul>
            <li>devise_token_authインストール(クラス名とパスを指定</li>
            <ul><li>認証パス＝URLのエンドポイント名</li></ul>
        </ul>
        <p>3.<code>user.rb</code>から<code>:trackableを削除</code></p>
        <ul><li>メール認証する場合は<code>:confirmable</code>を追加</li></ul>
        <p>4.<code>devise_token_auth.rb</code>のコメントを解除</p>
        <ul>
            <li>config.change_headers_on_each_request (=>リクエストごとに認証情報を変更するか?)</li>
            <li>config.headers.names (=>ヘッダに付与する認証情報)</li>
            <li>config.token_lifespan (=>トークンのリフレッシュ間隔)</li>
        </ul>
        <p>4.生成されたマイグレーションファイルでユーザのカラムを編集</p>

        <h2>コントローラ作成</h2>
        <p>1.<span class="bold">rails g controller auth/registrations</span></p>
        <pre>
            <code>
    class RegistrationsController &lt; DeviseTokenAuth::RegistrationsController #継承先をApplicationControllerから変更
        def sign_up_params
            params.permit(:name, :email)
        end

        def account_update_params
            params.permit(:name, :email)
        end
    end
            </code>
        </pre>
         <p>2.<code>routes.rb</code>にマウント</p>
         <code>mount_devise_token_auth_for 'User', at: 'auth', controller: { registrations: 'auth/registrations' }</code>
         <ul><li><code>at:</code>を変更することでパスを変更可能</li></ul>

         <h2>メール認証用コントローラ作成</h2>
         <p>1.<span class="bold">rails g controller devise_token_auth/confirmations</span></p>
         <pre>
             <code>
    module DeviseTokenAuth
      class ConfirmationsController &lt; DeviseTokenAuth::ApplicationController #継承先をApplicationControllerから変更
          def show
              @resource = resource_class.confirm_by_token(params[:confirmation_token])
                
              if @resource.errors.empty?
                  redirect_to(ENV.fetch("CONFIRM_REDIRECT_URL")) #メール認証後のリダイレクト先を指定
              else
                  raise ActionController::RoutingError, 'Not Found'
              end
          end
      end
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