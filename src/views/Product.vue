<template>
    <div v-if="product">
            <img :src="product.img" :alt="product.title">
            <h2>{{ product.title }}</h2>
    </div>
    <div v-else>Loading...</div>
</template>

<script>
export default {
    name: 'product',
    props: ["id"],
    mounted() {
        return this.$store.dispatch("getProduct", this.id );
    },
    computed: {
        product() {
            return this.$store.state.product
        },
    }
}
</script>