<template>
  <div id="app">
    <header-c />
    <div class="container app-main">
        <main class="main">
          <main-nav />
          <div class="main__content">
            <main-info />
            <main-product-list />
          </div>
        </main>
    </div>
  </div>
</template>
<script>
import headerC from '@/components/header'
import mainNav from '@/components/mainNav'
import mainInfo from '@/components/mainInfo'
import mainProductList from './components/mainProductList'
export default {
  name:'template',
  components: {
    headerC,
    mainNav,
    mainInfo,
    mainProductList,
  }
}
</script>
<style lang="scss">
    @import "@/assets/style/vars.scss";
    @import "@/assets/style/main.scss";
</style>
