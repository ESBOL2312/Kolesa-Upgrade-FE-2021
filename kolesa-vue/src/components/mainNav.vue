<template>
  <nav class="nav">
    <div class="nav__block">
        <a class="nav__link" href="#">
          Оргсхема
        </a>
        <a class="nav__link" href="#">
            Kolesa Team</a>
      <a class="nav__link nav__link-bold" href="#"
        >Kolesa Shop</a
      >
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
