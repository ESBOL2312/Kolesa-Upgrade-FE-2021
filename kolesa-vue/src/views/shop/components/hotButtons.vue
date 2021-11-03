<template>
  <div class="main__buttons">
    <button type="button" class="main__btn main__btn-get">
      <img
        class="main__btn-image"
        src="@/assets/plus.svg"
        alt="plus"
        height="41"
        width="40"
      />Получить баллы
    </button>
    <button @click="$router.push({ name: 'GetScores'})" class="main__btn main__btn-question">
      <img
        class="main__btn-image"
        src="@/assets/question.png"
        alt="question"
        width="40"
        height="41"
      />Как получить баллы?
    </button>
    <button type="button" class="main__btn main__btn-gift">
      <img
        class="main__btn-image"
        src="@/assets/gift.png"
        alt="gift"
        height="41"
        width="40"
      />Подарить баллы
    </button>
  </div>
</template>
<script>
export default {
    name: 'hotKeys'
}
</script>