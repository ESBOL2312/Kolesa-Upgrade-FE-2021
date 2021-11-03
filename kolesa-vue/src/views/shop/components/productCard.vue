<template>
  <div class="main--clothes__element">
    <img
      :src="productInfo.mainImage"
      alt="clothes"
      width="330"
      height="330"
      style="display: none"
    />
    <div
      class="main--clothes__imageCover"
      :style="{ backgroundImage: `url('${productInfo.mainImage}')` }"
    >
        <p v-if="productInfo.isNew" class="main--clothes__new">New</p>
    </div>
    <div class="main--clothes__textBlock">
      <p class="main--clothes__pts">{{ productInfo.price }} баллов</p>
      <p class="main--clothes__text">{{ productInfo.title }}</p>
      <p class="main--clothes__size">Размеры {{ productInfo.sizes }}</p>
      <button
        type="button"
        class="main--clothes__btn"
        @click="showProductModal(productInfo)"
      >
        Заказать
      </button>
    </div>
  </div>
</template>
<script>
export default {
    name: 'productCard',
    props: ['productInfo'],
    methods: {
        showProductModal(product){
            this.$emit('buyProduct', product);
        }
    }
}
</script>