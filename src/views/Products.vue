<template>
<div>
    <button class="button" @click="opencart" >
          <img src="https://img.icons8.com/windows/32/000000/shopping-cart.png"/>
          {{selectedp.length}}
          </button>
    <b-container fluid class=products-cards-container sm="12">
        
            <b-row  v-if="stateProducts">
                <b-col v-for="product in toys" :key="product.id" sm="12" md="6" lg="4">
        
        
        <Product-Summery-Card  @add_to_cart="add_to_cart"  :product="product"/>
     
                </b-col>
            </b-row>
      <cart v-if="open" :selectedp="selectedp" @close="closecart" @checkout="closeProducts"/> 
            
        

    </b-container>
</div>
</template>
<script>
import cart from "../components/cart.vue";
import store from '@/store.js';
import ProductSummeryCard from '../components/ProductSummeryCard.vue'

export default {
    name: "Products",
    components:{ProductSummeryCard,cart},

    data(){
        return {
            open:false,
            stateProducts:true,
            toys: store,
            selectedp:[]
        };
    },
    methods:{
        add_to_cart(product){
            this.selectedp.push(product)
            this.open=true
        },
        opencart(){
            this.open=true;

        },
        closecart(){
            this.open=false;
        },
        closeProducts(){
            this.stateProducts=false

        }
        
       
    }//,
    //computed:{
      //  remove(removedProduct){
        //    return this.selectedp.pop(removedProduct);
        //}
   // }

    
};
</script>
<style scoped>
.button{
  border: none;
  background: none;
  z-index: 1;
  position: absolute;
  top: 2%;
  right: 1%;
  

}

</style>