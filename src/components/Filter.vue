<template>
       
</template>

<script>
export default {
 data() {
    return {
      search: "",
      category: "All",
      power: "All",
      price: "All",
    };
  },
  name: "product",
  mounted() {
    return this.$store.dispatch("getProducts");
  },
  computed: {
    products() {
      return this.$store.state.products?.filter((product) => {
        let isMatch = true;
        if (!product.title.toLowerCase().includes(this.search.toLowerCase())) {
          isMatch = false;
        }
        if (this.category !== "All" && this.category !== product.category) {
          isMatch = false;
        }
        if (this.power !== "All" && this.power !== product.power) {
          isMatch = false;
        }        
        if (this.price !== "All" && this.price !== product.price) {
          isMatch = false;
        }
        return isMatch;
      });
    },
  },
  methods: {
    sortPrice() {
      this.$store.commit("sortProductsbyPrice");
    },
  },
}
</script>

<style>

</style>