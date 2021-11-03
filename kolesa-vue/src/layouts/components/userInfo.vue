<template>
  <button class="header__info" v-if="userInfo">
    <div>
      <img
      
        class="header__avatar"
        :src="userInfo.avatarUrl"
        alt="avatar"
        width="44"
        height="44"
      />
    </div>
    <div>
      <div class="header__name">{{userInfo.name}}</div>
      <div class="header__pts">{{userInfo.score}} баллов</div>
    </div>
  </button>
</template>
<script>

export default {
  name: "userInfo",
  props:['userInfo', 'userScore'],
  computed:{
    userScore(){
      if(this.userScore!==null){
        return
      }
    }
  }
};
</script>