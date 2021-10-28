<template>
  <div>
    <div class="main__blockRadio">
      <div class="main__radio" v-for="filter in filterList" :key="filter.id">
        <input
          type="radio"
          :id="`radio-${filter.id}`"
          name="radio"
          :value="filter.value"
          checked
          v-model="displayProductType"
        />
        <label :for="`radio-${filter.id}`">{{filter.label}}</label>
      </div>
    </div>
    <div class="main--clothes mb-24">
      <div class="main--clothes__element" v-for="product in getCheckedValue" :key="product.id">
        <img
          :src="product.image.url"
          alt="clothes"
          width="330"
          height="330"
          style="display:none"
          
        />
        <div class="main--clothes__imageCover" :style="{ backgroundImage: `url('${product.image.url}')` }">
        </div>
        <div class="main--clothes__textBlock">
          <p v-if="product.new" class="main--clothes__new">New</p>
          <p class="main--clothes__pts">{{product.cost}} баллов</p>
          <p class="main--clothes__text">{{product.title}}</p>
          <p class="main--clothes__size">Размеры {{product.size}}</p>
          <button type="button" class="main--clothes__btn" @click="showProductModal"> Заказать</button>
        </div>
      </div>
    </div>
    <super-modal :is-visible="productModalVisible" @closed="closeProductModal"/>
  </div>
</template>
<script>
import productlist from "@/products.json";
import superModal from "@/components/productModal.vue"
export default {
  name: "main-product-list",
  data() {
    return {
        productModalVisible:false,
      clothes: productlist.clothes,
      accessories: productlist.accessories,
      displayProductType: 1,
      filterList: [
          {     
              id:1,
              label: 'Все товары',
              value: 1,
          },
          {     
              id:2,
              label: 'Одежда',
              value: 2,
          },
          {     
              id:3,
              label: 'Аксессуары',
              value: 3,
          }
      ]
    };
  },
  components:{
      superModal
  },
  computed: {
    getCheckedValue: function () {
      let productList = [];
      if (this.displayProductType === 1) {
        productList = this.accessories.concat(this.clothes).sort((a, b) => {
          if (a.new === true && b.new === false) {
            return -1;
          }

          if (a.new === false && b.new === true) {
            return 1;
          }
          return 0;
        });
      } else if (this.displayProductType === 2) {
        productList = this.clothes;
      } else if (this.displayProductType === 3) {
        productList = this.accessories;
      }
      console.log(productList)
      return productList;
    },
  },
  methods: {
      showProductModal() {
          this.productModalVisible = true
      },
      closeProductModal() {
          this.productModalVisible = false
      }
  }
};
</script>