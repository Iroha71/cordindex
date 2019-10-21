<template>
  <div class="container-fluid">
    <nuxt class="content" />
  </div>
</template>

<style lang="scss">
html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 16px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
}
.container-fluid{
  background: url('/images/bg-cyberpunk.jpg');
  background-attachment: fixed;
  &::before{
    content: '';
    filter: blur(2px);
    position: absolute;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background: inherit;
  }
}
.root{
  height: 100vh;
}
</style>
