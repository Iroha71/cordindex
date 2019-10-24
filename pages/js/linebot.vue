<template>
<div class="col-sm-12 col-md-12 col-lg-10 parent">
    <div class="content">
        <h1>LineBot</h1>
        <h2>前提</h2>
        <ul>
            <li><a href="https://developers.line.biz/ja/">Line Developersに登録しておく</a></li>
        </ul>
        <h2>流れ</h2>
        <ul>
            <li>LineDevelpersでLineBot作成</li>
            <li>node.jsなどで開発<code>MessagingAPI</code>を使用</li>
            <li>Herokuにデプロイ</li>
        </ul>
        <h2>ローカルでのデバッグ</h2>
        <ul>
            <li><code>Ngrok</code>をインストール(Pathを通しておく)</li>
            <li>起動：<span class="bold">ngrok http [任意のポート番号]</span></li>
            <li>
                <code>Forwarding https://~</code>のURL+<code>/callback</code>をLineDevelopersで作成したBotの<code>Webhook URLに追加</code>
            </li>
            <ul><li>例）https//localhost:3000/hogehoge/callback</li></ul>
        </ul>
    </div>
</div>
</template>

<script>
export default {
    layout: 'desc'
}
</script>