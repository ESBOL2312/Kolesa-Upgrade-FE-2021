<template>
  <div>
         <main-info />
    <hot-buttons />
    <super-filter @filterChange="changeFilter" />
    <div class="main--clothes mb-24">
      <productCard
        v-for="product in getCheckedValue"
        :key="product.id"
        :productInfo="product"
        @buyProduct="showProductModal"
      >
      </productCard>
    </div>
    <super-modal
      :productData="{modalP, UserInfo:userInfo}"
      :is-visible="productModalVisible"
      @closed="closeProductModal"
      :getScores="getScores"
    />
  </div>
</template>
<script>
import mainInfo from './components/mainInfo'
import hotButtons from './components/hotButtons.vue'
import superModal from "./components/productModal.vue";
import superFilter from "./components/filter.vue";
import productCard from "./components/productCard.vue";
// import api from '@/api/products.js'
import { mapActions, mapGetters } from "vuex";
export default {
  name: "main-product-list",
  data() {
    return {
      productModalVisible: false,
      clothes: [],
      accessories: [],
      displayProductType: null,
      modalP: null,
      getScores: 0,
    };
  },
  components: {
    superModal,
    superFilter,
    productCard,
    mainInfo,
    hotButtons
  },
  computed: {
      ...mapGetters([
          'userInfo'
      ]),
    getCheckedValue: function () {
      let productList = [];
      if (this.displayProductType === 1) {
        productList = this.$store.getters.accessories.concat(
          this.$store.getters.clothes
        );
      } else if (this.displayProductType === 2) {
        productList = this.$store.getters.accessories;
      } else if (this.displayProductType === 3) {
        productList = this.$store.getters.clothes;
      }
      return productList.sort((a, b) => {
        if (a.isNew === true && b.isNew === false) {
          return -1;
        }

        if (a.new === false && b.new === true) {
          return 1;
        }
        return 0;
      });
    },
  },
  watch: {
    displayProductType: function () {
      this.getCheckedValue;
    },
  },
  created() {
    this.fetchClothes();
    this.fetchAccessories();
  },
  methods: {
    ...mapActions(["fetchClothes", "fetchAccessories"]),
    changeFilter(id) {
      this.displayProductType = id;
    },
    showProductModal(product) {
      this.productModalVisible = true;
      this.modalP = product;
    },
    closeProductModal() {
      this.productModalVisible = false;
    },
  },
};
</script>