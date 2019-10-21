<template>
<div class="col-2 d-none d-lg-block">
    <h5 @click="$router.push('/cordindex/')">ＴＯＰ</h5>
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
        border-left: solid 5px #31adb6;
        border-bottom: solid 1px #31adb6;
    }
}
</style>