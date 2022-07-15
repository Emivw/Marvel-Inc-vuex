<template>
    <div v-if="product">
        <div class="container">
            <div class="row">
                <h2>{{ product.title }}</h2>
                <div class="col">
                    <img :src="product.img" :alt="product.title">
                </div>
                <div class="col">
                    <h5>Description:</h5>
                    <p>{{product.desc }}</p>
                    <h5>Price: <span>${{ product.price }}</span></h5>
                    <h5>Category: <span>{{ product.category }}</span></h5>
                    <h5>Power: <span>{{ product.power }}</span></h5>
                    <h5>Used By: <span>{{ product.used_by }}</span></h5>
                </div>
            </div>
        </div>
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