<template>
<div>
    <span v-for="(t, index) in text"
            v-text="t"
            :key="index"
            :class="animation"
            :style="{ animationDelay: `${index*100}ms` }">
    </span>
</div>
</template>

<script>
export default {
    props:[
        'text',
        'animation'
    ]
}
</script>

<style lang="scss" scoped>
span{
    display: inline-block;
}
@keyframes fade {
    0%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}

@keyframes neon {
    0%{
        opacity: 0;
    }
    25%, 75%{
        opacity: .5;
    }
    50%{
        opacity: 0;
    }
    100%{
        opacity: 1;
    }
}
.fade{
    animation: fade 3.0s ease 0s both;
}

.neon{
    animation: neon 3.0s ease 0s both;
}
</style>