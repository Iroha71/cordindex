<template>
<div class="container-fluid">
    <div class="row root">
        <transition name="slide" mode="out-in">
            <Sidebar />
        </transition>
        <transition name="fade" mode="out-in">
            <nuxt />
        </transition>
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
        transform: translateX(-50%);
    }
}
.fade{
    &-enter-active, &-leave-active{
        transition: .5s;
    }
    &-enter, &-leave-to{
        opacity: 0;
    }
}
</style>