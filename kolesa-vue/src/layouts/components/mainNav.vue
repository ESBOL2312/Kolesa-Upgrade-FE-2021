<template>
  <nav class="nav">
    <div class="nav__block">
        <router-link class="nav__link" :to="{name: 'GetScores'}" exact active-class="nav__link-bold">
          Получить баллы
        </router-link>
        <a class="nav__link" href="#">
            Kolesa Team</a>
      <router-link class="nav__link" :to="{name: 'Home'}" exact active-class="nav__link-bold">Kolesa Shop</router-link>
      <a class="nav__link" href="#">Картина компании</a>
      <a class="nav__link" href="#">Новости</a>
      <a class="nav__link" href="#">Education</a>
      <a class="nav__link" href="#">Guidelines</a>
      <a class="nav__link" href="#">Библиотека</a>
      <a class="nav__link" href="#">FAQ</a>
    </div>
  </nav>
</template>
<script>
export default {
  name: "nave",
  data() {
    return {
        menulist: [
            {
                label: 'Оргсхема'
            },
            {
                label: 'Kolesa Team'
            },
             {
                label: 'Kolesa Shop'
            },
             {
                label: 'Картина компании'
            },
             {
                label: 'Новости'
            },
             {
                label: 'Education'
            },
               {
                label: 'Guidelines'
            },
                {
                label: 'Библиотека'
            },
                   {
                label: 'FAQ'
            },

        ]
    }
    }
};
</script>
