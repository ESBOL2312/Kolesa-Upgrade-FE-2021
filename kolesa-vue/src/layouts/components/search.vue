<template>
  <div class="header__search">
    <label for="search"
      ><div class="header__search__img" type="button">
        <img
          src="@/assets/search-big.svg"
          alt="search"
          height="24"
          width="24"
        />
      </div>
    </label>
    <input
      name="search"
      v-model.trim="searchValue"
      id="search"
      class="header__search__input"
      type="search"
      placeholder="Поиск"
    />
  </div>
</template>
<script>
export default {
  name: "search",
  data(){
    return{
      searchValue:''
    }
  }
};
</script>