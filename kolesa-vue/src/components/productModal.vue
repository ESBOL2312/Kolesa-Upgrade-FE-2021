<template>
    <div class="modal-container modal-1" v-if="visible">
        <div class="modal d-flex">
            <button class="modal__close" type="button" @click="close">
                <img src="@/assets/close-icon.svg" width="17" height="17" alt="close icon">
            </button>
            <div class="modal__left-side">
                <div class="modal__left-side__media-block">
                    <img :src="productData.mainImage" class="modal__left-side__media-block__product-img"
                        :alt="productData.title" width="100%">
                    <div class="slide-block d-flex">
                        <img src="@/assets/img-1.png" class="slide-item active"
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-2.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-1.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-2.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-1.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-2.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-1.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-2.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-1.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                        <img src="@/assets/img-2.png" class="slide-item "
                            alt=" Футболка Эволюционируй или сдохни серый" width="50" height="50">
                    </div>
                </div>
            </div>
            <div class="modal__right-side">
                <div class="modal__right-side__title">
                    <h2 class="title-1 mb-8 fw-4">
                        {{productData.title}}
                    </h2>
                </div>
                <div class="action-block d-flex mb-24">
                    <div>
                        <h2 class="title-1 action-block__cost mb-8 fw-6">
                            {{productData.price}} баллов
                        </h2>
                        <button class="btn primary-btn" type="button">
                            Заказать
                        </button>
                    </div>
                    <div>
                        <div class="badge badge-2">
                            <div class="d-flex balance">
                                <div>
                                    <p class="balance__label">Твой баланс:</p>
                                    <span class="balance__count">
                                        3 945 баллов
                                    </span>
                                </div>
                                <img src="@/assets/cartt.svg" width="40" alt="Иконка пакетов" class="balance__icon">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="product-variant">
                    <div class="product-variant__color mb-24">
                        <h4 class="title-3 mb-8 fw-4">
                            Цвета:
                        </h4>
                        <div class="product-variant__color__variants">
                            <template v-for="(color, index) in productData.colors">
                                <input :key="index" class="custom-radio" type="radio" :id="`colorChoice-${index}`" name="contact" :value="color.label">
                                <label :key="index" class="radio-choice-btn" :for="`colorChoice-${index}`">
                                    <div class="radio-choice-btn__color mr-8" :style="`background:${color.color}`">
                                    </div>
                                    <span class="radio-choice-btn__text">{{color.label}}</span>
                                </label>
                            </template>
                        </div>
                    </div>
                    <div class="product-variant__color mb-24">
                        <h4 class="title-3 mb-8 fw-4">
                            Размер:
                        </h4>
                        <div class="product-variant__color__variants size-list">
                        </div>
                    </div>
                </div>
                <div class="product-detail">
                    <div class="info-block">
                        <h4 class="info-block__title title-3">
                            Детали:
                        </h4>
                        <p class="info-block__description detail">
                            {{productData.description}}
                        </p>
                    </div>
                    <div class="info-block">
                        <h4 class="info-block__title title-3">
                            Как выбрать размер:
                        </h4>
                        <p class="info-block__description">
                            Написать дяде Рику для уточнения.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
export default {
  name: 'modal',
  props: {
      isVisible:{
          type: Boolean,
          default: false
      },
      productData: {
          type: Object
      }
  },
   data() {
    return {
        visible: false,
    }
   },
   watch: {
   
    isVisible: function () {
      this.visible = this.isVisible
    }
  },
   mounted(){
       this.visible = this.isVisible
   },
   methods:{
       close () {
           this.visible = false;
           this.$emit('closed');
       }
   }
}
</script>