<template>
  <button @click="sortPrice">sort by price</button>
  <input type="text" v-modal="search" placeholder="search...">
  <select v-modal="Category">
  <option value="All">All</option>
  </select>
  <div v-if="products" class="flex-container">
  --</div>
</template>

<script>


export default {
    data(){
        return{
            search:"",
            Category:"All"
        }
    },
methods:{
    sortPrice() {
        this.$store.commit("sortProductsbyPrice");
    }
}
};
computed:{
    products(){
        return this$store.state.products?.flter(product=>{
            let isMatch =true;
            if(!product.title.toLowerCase().includes(this.search.toLowerCase())){
                isMatch=false;
            }
            if(this.Category !== "All" && this.category !== product.Category){
                isMatch = false;
            }
            return isMatch;

        });
    },
   
}

</script>

<style>

</style>