<template>
    <div class="container app-header">
        <div class="header">
            <div class="header__block">
                <router-link :to="{name:'Home'}"> 
                    <img src="@/assets/KolesaGroup.png"  height="35" width="215" alt="Kolesa logo">
                </router-link>
                <header-search></header-search>
            </div>
            <user-info :userInfo="userInfo"></user-info>
        </div>
    </div>
</template>
<script>
import { mapActions, mapGetters } from 'vuex'
import headerSearch  from './search.vue'
import userInfo  from './userInfo.vue'
export default {
    name: 'header',
    components: {
        headerSearch,
        userInfo
    },
    computed: {
      ...mapGetters([
          'userInfo'
      ])
  },
  methods: {
        ...mapActions([
            'fetchUserInfo',
        ]),
  },
  created() {
      this.fetchUserInfo().then(()=>{
        this.$emit('userLoaded', this.userInfo)
      })
      
  }
}
</script>
<style lang="scss">
    @import "@/assets/style/vars.scss";
    .app-header{
        width: 100%;
    }
.header {
    display: flex;
    justify-content: space-between;
    &__block {
        display: flex;
        align-items: center;
        margin: 32px 0 0 0;
    }

    &__search {
        position: relative;
        margin-left: 66px;

        &__img {
            position: absolute;
            width: 24px;
            height: 24px;
            margin: 10px 16px 10px 16px;
            background: $backgroundGray;
            border: none;
            transition: 0.2s linear;
            cursor: pointer;

            &:hover {
                transform: scale(1.2);
            }
        }

        &__input {
            width: 308px;
            height: 44px;
            background: $backgroundGray;
            border-radius: 8px;
            font-family: $primaryFont;
            font-style: normal;
            font-weight: $normalFont;
            font-size: 18px;
            line-height: 28px;
            color: #888b94;
            border: none;
            padding: 8px 0 8px 56px;

            &:active {
                border: $inputBorder;
            }

            &:focus {
                border: $inputBorder;
            }
        }
    }

    &__info {
        display: flex;
        align-items: center;
        margin-top: auto;
        margin-left: 584px;
        transition: 0.2s linear;
        border: none;
        background: none;

        &:hover {
            transform: scale(1.1);
        }
    }

    &__avatar {
        margin-right: 16px;
        border: none;
        background: none;
        transition: 0.2s linear;
        padding: 0;
        border-radius: 50%;
    }

    &__name {
        display: block;
        font-family: $primaryFont;
        font-style: normal;
        padding: 0;
        font-weight: $BoldFont;
        font-size: 14px;
        line-height: 24px;
        color: #2a81dd;
        border: none;
        background: none;
        transition: 0.2s linear;
    }

    &__pts {
        display: block;
        font-family: $primaryFont;
        font-style: normal;
        font-weight: $normalFont;
        font-size: 13px;
        line-height: 20px;
        color: $primaryColor;
        border: none;
        background: none;
        transition: 0.2s linear;
        padding: 0;
    }
}
</style>