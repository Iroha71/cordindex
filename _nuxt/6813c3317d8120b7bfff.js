(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{221:function(e,r,n){"use strict";n.r(r);var t={layout:"desc"},o=n(25),component=Object(o.a)(t,(function(){var e=this.$createElement;this._self._c;return this._m(0)}),[function(){var e=this,r=e.$createElement,n=e._self._c||r;return n("div",{staticClass:"col-sm-12 col-md-12 col-lg-10 parent"},[n("div",{staticClass:"content"},[n("h1",[e._v("Railsメール設定")]),e._v(" "),n("h2",[e._v("development.rb")]),e._v(" "),n("pre",[e._v("\r\n            "),n("code",[e._v("\r\n    config.action_mailer.default_url.options = {host: 'localhost',port: 3000} //開発環境のポートに変更\r\n    config.action_mailer.railse_delivery_errors = true //trueに変更\r\n\r\n    config.action_mailer.perform_caching = true\r\n    config.action_mailer.delivery_method = :smtp\r\n    config.action_mailer.smtp_settings = {\r\n        :enable_starttls_auto => true,\r\n        :address => \"smtp.sendgrid.net\",\r\n        :port => 587,\r\n        :domain => 'herokuapp.com',\r\n        :user_name => ENV.fetch(\"MAIL_ADDRESS\"), //sendgridアカウント\r\n        :password => ENV.fetch(\"MAIL_PASSWORD\"), //sendgridパスワード\r\n        :authentication => 'plain',\r\n        :tls => true\r\n    }\r\n            ")]),e._v("\r\n        ")]),e._v(" "),n("h2",[e._v("production.rb")]),e._v(" "),n("h3",[e._v("development.rbからの変更点")]),e._v(" "),n("ul",[n("li",[n("code",[e._v("config.force_ssl = true")])]),e._v(" "),n("li",[n("code",[e._v("config.action_mailer.default_url.options = { host: 'アプリ名.herokuapp.com' }")])]),e._v(" "),n("li",[n("code",[e._v("config.action_mailer.delivery_method = :smtp")])])]),e._v(" "),n("h3",[e._v("heroku + sendgridの使用")]),e._v(" "),n("ul",[n("li",{staticClass:"bold"},[e._v("heroku addons:create sendgrid:starter")]),e._v(" "),n("ul",[n("li",[e._v("herokuにアドオン追加")])])]),e._v(" "),n("h2",[e._v("letter_opener")]),e._v(" "),n("h3",[e._v("インストール")]),e._v(" "),n("code",[e._v("Gemfile")]),n("span",[e._v(" ->追記したら"),n("span",{staticClass:"bold"},[e._v("bundle install")])]),e._v(" "),n("pre",[e._v("\r\n            "),n("code",[e._v("\r\n    gem 'letter_opener'\r\n    gem 'letter_opener_web'\r\n            ")]),e._v("\r\n        ")]),e._v(" "),n("h3",[e._v("routes.rb")]),e._v(" "),n("code",[e._v("mount LetterOpenerWeb::Engine, at: '/letter_opener' if Rails.env.development?")])])])}],!1,null,null,null);r.default=component.exports}}]);