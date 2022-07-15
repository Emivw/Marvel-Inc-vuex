<template>
  <div id="app">
    <div class="col-md-12 pt-5">
      <div class="site-heading text-center">
        <h2>Browse <span>Our Wares</span></h2>
        <h4></h4>
      </div>

      <div class="container">
         <button @click="sortPrice">sort by price</button>
        
        <div class="row">
        <div class="col-md-4">
         <label for="category">Category </label>
        <select v-model="category">
          <option value="All">All</option>
          <option value="Weapon">Weapon</option>
          <option value="Transport">Transport</option>
          <option value="Pet">Pet</option>
          <option value="Suit">Suit</option>
        </select>
        </div>
        <div class="col-md-4">
        <label for="Power">power level </label>
                <select v-model="power">
          <option value="All">All</option>
          <option value="4">4</option>
          <option value="6">6</option>
          <option value="8">8</option>
          <option value="10">10</option>
        </select>
        </div>
        <div class="col-md-4">
                <label for="price">price </label>
                <select v-model="price">
          <option value="All">All</option>
          <option value="4000">4000</option>
          <option value="6000000">6000000</option>
          <option value="800000000">800000000</option>
          <option value="100000000000">100000000000</option>
        </select>
        </div>
        </div>
      </div>
    </div>
    <!-- {{products}} -->
    <div v-if="products" class="row my-5">
      <ProductCard
        v-for="product in products"
        :key="product.id"
        :product="product"
      />
    </div>
    <div v-else>Loading....</div>
  </div>
</template>

<script>
import ProductCard from "../components/ProductCard.vue";

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
        // if (!product.title.toLowerCase().includes(this.search.toLowerCase())) {
        //   isMatch = false;
        // }
        if (this.category !== "All" && this.category !== product.category) {
          isMatch = false;
        }
        if (this.power !== "All" && this.power !== product.power) {
          isMatch = false;
        }        if (this.price !== "All" && this.price !== product.price) {
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
  components: { ProductCard },
};
</script>

<style scoped>
#app {
    background-color: #f8002f;
  background-image: linear-gradient(326deg, #f8002f 0%, #000c14 74%);
}
</style>
