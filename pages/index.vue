<template>
<div class="root row">
  <div class="col-md-12 title-area flex-center">
    <h1 class="title" :class="{ small:isSmall }">
      <span class="titlespan" v-for="(t, index) in titleText"
            :key="index"
            :style="{ animationDelay:`${Math.random()*1000}ms` }">
        <span v-if="t !== ' '">{{ t }}</span>
        <span v-else>&ensp;</span>
      </span>
    </h1>
    <h2 class="title">
       <span class="verspan" v-for="(t, index) in verText"
            :key="index"
            v-text="t"
            :style="{ animationDelay:`${Math.random()*1000}ms` }">
      </span>
    </h2>
  </div>
  <div class="col-sm-12 menu-area d-flex justify-content-around">
    <CircleBox size="15vw" color="#fff" language="laravel" v-if="isSmall" transPath="/php/laravel" />
    <CircleBox size="15vw" color="#fff" language="rails" v-if="isSmall" transPath="/ruby/rails" />
    <CircleBox size="15vw" color="#fff" language="nuxt.js" v-if="isSmall" transPath="/js/nuxt" />
    <CircleBox size="15vw" color="#fff" language="LineBot" v-if="isSmall" transPath="/js/linebot" />
  </div>
</div>
</template>

<script>
import AnimTxt from '~/components/AnimTxt.vue'
import CircleBox from '~/components/CircleBox.vue'
export default {
  components:{
    AnimTxt,
    CircleBox
  },
  mounted(){
    setTimeout(() => { this.isSmall = true }, 1200)
  },
  data(){
    return{
      isSmall: false,
      titleText: 'WELC0ME 2 INDEX',
      verText: 'ver.3.0.1'
    }
  }
}
</script>

<style lang="scss" scoped>
.title-area{
  width: 100%;
  height: 20vh;
  flex-direction: column;
  .title{
    font-family: 'marske';
    color: #fff;
    transition: .5s;
    border: none;
    .titlespan, .verspan{
      animation: neon 3.0s ease 0s both;
      font-size: 3em;
    }
    .verspan{
      font-size: 1.5em;
    }
  }
  .small{
    font-size: 2em;
  }
}

.menu-area{
  height: 80vh;
  padding-top: 15px;
  padding-bottom: 15px;
}

@keyframes neon {
  0%{
    opacity: 0;
  }
  1%{
    opacity: .85;
  }
  4%{
    opacity: .4;
  }
  5%{
    opacity: .85;
  }
  7%{
    opacity: .4;
  }
  8%{
    opacity: .85;
  }
}
</style>
