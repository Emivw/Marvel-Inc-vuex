<template>
  <div id="app">
    <div class="col-md-12 pt-5">
      <div class="site-heading text-center">
        <h2>Browse <span>Our Wares</span></h2>
        <h4></h4>
      </div>

      <div class="container">
        <input type="text" v-model="search" placeholder="search..." />
        <select v-model="Category">
          <option value="All">All</option>
        </select>
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
      Category: "All",
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
        if (this.Category !== "All" && this.category !== product.Category) {
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
#app{
background: white;
}
</style>
