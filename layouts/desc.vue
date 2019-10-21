<template>
<div class="container-fluid">
    <div class="row root">
        <transition name="slide" mode="out-in">
            <Sidebar />
        </transition>
        <nuxt />
    </div>
</div>
</template>

<script>
import Sidebar from '~/components/Sidebar.vue'
export default {
    components:{
        Sidebar
    }
}
</script>

<style lang="scss" scoped>
.slide{
    &-enter-active, &-leave-active{
        transition: .5s;
    }
    &-enter, &-leave-to{
        opacity: 0;
    }
}
</style>