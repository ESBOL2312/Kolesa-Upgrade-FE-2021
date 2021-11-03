<template>
  <div id="app">
    <header-c  @userLoaded="userInfoSet" :userScore="score"/>
    <div class="container app-main">
        <main class="main">
          <main-nav />
          <div class="main__content">
            <transition name="fade" mode="out-in">
             <router-view></router-view>
             </transition>
          </div>
        </main>
    </div>
  </div>
</template>
<script>
import headerC from '@/layouts/components/header'
import mainNav from '@/layouts/components/mainNav'

export default {
  name:'template',
  components: {
    headerC,
    mainNav,
  },
  data(){
    return {
      userInfo:null,
      score:null
    }
  },
  methods:{
    userInfoSet(user){
      this.userInfo = user
    },
  }
}
</script>
<style lang="scss">
    @import "@/assets/style/vars.scss";
    @import "@/assets/style/main.scss";
    .fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s ease;
}


.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>
