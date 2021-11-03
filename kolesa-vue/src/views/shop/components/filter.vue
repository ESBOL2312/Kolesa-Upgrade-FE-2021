<template>
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
</template>
<script>
export default {
    name: 'filter',
      data() {
        return {
            displayProductType: null,
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
   mounted (){
     this.displayProductType = 1;
  },
  watch: {
    // whenever question changes, this function will run
    displayProductType: function (newQuestion) {
     this.$emit('filterChange',newQuestion)
    }
  },
}
</script>