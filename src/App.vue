<template>
  <div id="app">
    <div >
      <navbar @clicked="open_cart">
      </navbar>
      <cart v-if="cart_state==true" >
       
      </cart>
      <products v-if="false" @add_to_cart="addToCart(this.product.id)"/>
      
    
    </div>
    <router-view/>
  </div>
</template>
<script>


//import cart from "./components/cart.vue";
import Navbar from "./components/Navbar.vue";
import Products from './views/Products.vue';


export default {
  name: 'App',
  components: {
    //cart,
    Navbar,
    Products
    
   
  
  },
  methods:{
    open_cart(){
      return this.cart_state = true
        
      
    },
    addToCart(id){
     return this.products_in_cart.push(id);
    
      

    }
			
			
		},
    data:function(){
      return {
        cart_state : false,
        products_in_cart:[]


      
      
      }
        
    }
	}
</script>


