<template>
  <div>
    <super-filter @filterChange="changeFilter" />
    <div class="main--clothes mb-24">
      <div class="main--clothes__element" v-for="product in getCheckedValue" :key="product.id">
        <img
          :src="product.mainImage"
          alt="clothes"
          width="330"
          height="330"
          style="display:none"
          
        />
        <div class="main--clothes__imageCover" :style="{ backgroundImage: `url('${product.mainImage}')` }">
        </div>
        <div class="main--clothes__textBlock">
          <p v-if="product.isNew" class="main--clothes__new">New</p>
          <p class="main--clothes__pts">{{product.price}} баллов</p>
          <p class="main--clothes__text">{{product.title}}</p>
          <p class="main--clothes__size">Размеры {{product.sizes}}</p>
          <button type="button" class="main--clothes__btn" @click="showProductModal(product)"> Заказать</button>
        </div>
      </div>
    </div>
    <super-modal :productData="modalP" :is-visible="productModalVisible" @closed="closeProductModal"/>
  </div>
</template>
<script>
import superModal from "@/components/productModal.vue"
import superFilter from "@/components/filter.vue"
import api from '@/api/products.js'
export default {
  name: "main-product-list",
  data() {
    return {
      productModalVisible:false,
      clothes: [],
      accessories: [],
      displayProductType: null,
      modalP: null,
    };
  },
  components:{
      superModal,
      superFilter
  },
  computed: {
    getCheckedValue: function () {
      let productList = [];
      if (this.displayProductType === 1) {
        productList = this.accessories.concat(this.clothes).sort((a, b) => {
          if (a.isNew === true && b.isNew === false) {
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
  mounted (){
     this.getClothesApi()
     this.getAccApi()
  },
  methods: {
    changeFilter(id){
      this.displayProductType=id;
    },
     async getClothesApi(){
         await api.getClothes().then(resp => {
           this.clothes = resp.data
         });
      },
      async getAccApi(){
         await api.getAccessories().then(resp => {
           this.accessories = resp.data
         });
      },
      showProductModal(product) {
          this.productModalVisible = true
          this.modalP = product;
      },
      closeProductModal() {
          this.productModalVisible = false
      }
  }
};
</script>