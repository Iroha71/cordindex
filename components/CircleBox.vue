<template>
<div class="circle flex-center" :style="style" @click="$router.push(transPath)">
    <img :src="`/images/languages/${language}.png`" alt="">
    <h2>{{ language }}</h2>
</div>
</template>

<script>
export default {
    props:[
        'size',
        'language',
        'color',
        'transPath'
    ],
    data(){
        return{
            style:{
                'background-color': 'rgba(255,255,255,0.3)',
                'height': this.size,
                'width': this.size
            }
        }
    }
}
</script>

<style lang="scss" scoped>
.circle{
    border-radius: 50%;
    border: solid 5px #fff;
    flex-direction: column;
    animation: bounce-in .5s ease 0s both;
    cursor: pointer;
    h2{
        color: #fff;
        font-family: 'marske';
        font-weight: bold;
        border: none;
    }
    img{
        width: 70%;
    }
}

@keyframes bounce-in {
  0%{
    transform: scale(0)
  }
  80%{
    transform: scale(1.2)
  }
  100%{
    transform: scale(1.0)
  }
}
</style>