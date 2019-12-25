<template>
<div class="col-2 d-none d-lg-block">
    <h5 @click="$router.push('/')">TOP</h5>
    <h5 @click="$router.push('/php/laravel')">laravel</h5>
    <h5 @click="$router.push('/js/nuxt')">NUXT.js</h5>
    <h5 @click="$router.push('/ruby/rails')">Ruby on Rails</h5>
    <h5 @click="$router.push('/js/linebot')">LineBot</h5>
</div>
</template>

<script>
export default {
}
</script>

<style lang="scss" scoped>
div{
    background-color: rgba(255,255,255, 0.7);
    flex-direction: column;
    padding-top: 15px;
    h5{
        padding-left: 5px;
        border-left: solid 5px #31adb6;
        border-bottom: solid 1px #31adb6;
        transition: .3s;
        cursor: pointer;
        &:hover{
            background: #31adb6;
        }
    }
}
</style>