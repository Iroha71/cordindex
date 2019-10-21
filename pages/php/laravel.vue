<template>
<div class="col-sm-12 col-lg-10 col-md-12 parent">
    <div class="content">
        <h1>Laravel</h1>
        <ul>
            <li><a href="#project">プロジェクト作成</a></li>
            <li><a href="#serve">サーバ起動</a></li>
            <li><a href="#controller">コントローラ</a></li>
            <li><a href="#model">モデル</a></li>
            <li><a href="#migrate">マイグレーション</a></li>
            <li><a href="#rooting">ルーティング</a></li>
            <li><a href="#library">ライブラリ導入</a></li>
        </ul>
        <h2 id="project">プロジェクト作成</h2>
        <p class="bold">composer create-project laravel/laravel[=指定バージョン] [プロジェクト名] --prefer-dist</p>
        <ul>
            <li>例)<code>composer create-project laravel/laravel=6.0 exampleapp --prefer-dist</code></li>
        </ul>
        <h2 id="serve">サーバ起動</h2>
        <p class="bold">php artisan serve</p>
        <h2 id="controller">コントローラ</h2>
        <p class="bold">php artisan make:controller [コントローラ名] [-r]</p>
        <ul>
            <li>例)<code>php artisan make:controller</code></li>
            <ul>
                <li><code>-r</code>でresourceルーティング</li>
            </ul>
        </ul>
        <h2 id="model">モデル</h2>
        <p class="bold">php artisan make:model [モデル名][-m]</p>
        <ul>
            <li>例)<code>php artisan make:model User -m</code></li>
            <ul>
                <li><code>-m</code>でマイグレーションファイルを作成</li>
            </ul>
        </ul>
        <h2 id="migrate">マイグレーション</h2>
        <p class="bold">php artisan migrate</p>
        <h3>マイグレーションの編集</h3>
        <pre>
            <code>
    public function up(){
        Schema::create('contents', function (Blueprint $table) {
            $table->increments('id');
            $table->string('title'); //$table->[型名]([カラム名])
            $table->text('body');
            $table->timestamps();
        });
    }
            </code>
        </pre>
        <h3>シード値</h3>
        <p class="bold">php artisan seed</p>
        <h2 id="rooting">ルーティング (routes/web.php or routes/api.php)</h2>
        <p class="bold">Route::[httpメソッド]([ルート名], [コントローラ@メソッド名])</p>
        <ul>
            <li>例)<code>Route::get('user/','UsersController@index')</code></li>
            <li>例2)<code>Route::resource(User, UsersController)</code></li>
            <ul>
                <li>resourceルーティング</li>
            </ul>
        </ul>
        <h2 id="library">ライブラリ導入</h2>
        <p class="bold">composer require [ライブラリ名]</p>
        <ul>
            <li><code>composer require vlucas/phpdotenv</code></li>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    layout: 'desc'
}
</script>

<style lang="scss" scoped>
.parent{
    max-height: 100%;
    overflow-y: scroll;
    .content{
        width: 100%;
        padding: 15px;
        background: rgba(255,255,255,0.7);
    }
}
</style>