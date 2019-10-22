<template>
<div class="col-sm-12 col-md-12 col-lg-10 parent">
    <div class="content">
        <h1>Railsメール設定</h1>
        <h2>development.rb</h2>
        <pre>
            <code>
    config.action_mailer.default_url.options = {host: 'localhost',port: 3000} //開発環境のポートに変更
    config.action_mailer.railse_delivery_errors = true //trueに変更

    config.action_mailer.perform_caching = true
    config.action_mailer.delivery_method = :smtp
    config.action_mailer.smtp_settings = {
        :enable_starttls_auto => true,
        :address => "smtp.sendgrid.net",
        :port => 587,
        :domain => 'herokuapp.com',
        :user_name => ENV.fetch("MAIL_ADDRESS"), //sendgridアカウント
        :password => ENV.fetch("MAIL_PASSWORD"), //sendgridパスワード
        :authentication => 'plain',
        :tls => true
    }
            </code>
        </pre>

        <h2>production.rb</h2>
        <h3>development.rbからの変更点</h3>
        <ul>
            <li><code>config.force_ssl = true</code></li>
            <li><code>config.action_mailer.default_url.options = { host: 'アプリ名.herokuapp.com' }</code></li>
            <li><code>config.action_mailer.delivery_method = :smtp</code></li>
        </ul>
        <h3>heroku + sendgridの使用</h3>
        <ul>
            <li class="bold">heroku addons:create sendgrid:starter</li>
            <ul>
                <li>herokuにアドオン追加</li>
            </ul>
        </ul>

        <h2>letter_opener</h2>
        <h3>インストール</h3>
        <code>Gemfile</code><span> ->追記したら<span class="bold">bundle install</span></span>
        <pre>
            <code>
    gem 'letter_opener'
    gem 'letter_opener_web'
            </code>
        </pre>
        <h3>routes.rb</h3>
        <code>mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?</code>
    </div>
</div>
</template>

<script>
export default {
    layout: 'desc'
}
</script>