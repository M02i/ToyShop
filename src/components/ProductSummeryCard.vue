<template>
    <b-col sm="100%"  >    
        <b-card >
        <b-card-title>{{product.name}} </b-card-title>

        <img id="myImage" :src= "product.image" />
        
        <h5 class="price: ">price:₪ {{product.price.toFixed(2)}}  </h5>
        <b-card-text>  {{product.description}}</b-card-text>
        <b-button @click="add_to_cart">add to cart</b-button>
        </b-card>
       
        
       
    </b-col>
</template>

<script>

export default {
    props: ['product'],
    methods:{
        add_to_cart(){
            this.$emit('add_to_cart',this.product)
        },
        pic(){
            this.product.image
        }
        
    }
    
    
    
}
</script>
<style  scoped>
img{
    width: 300px;
    height: 300px;
}


</style>