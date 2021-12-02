<template>
    <div :class="{drawer:!p_checkOut}" >
        <div :class="{fullPage:p_checkOut}">
            <b-button class="close" @click="closecart">X</b-button>
        <checkOut v-if="p_checkOut"></checkOut>

        In your cart
        <b-card  v-for="s in selectedp" :key="s.index">
            <b-card-title> {{s.name}} </b-card-title>
            <b-img class="cartimg" :src="s.image" />
            <div/>
            <b-card-text> price:₪ {{s.price.toFixed(2)}}</b-card-text>
            <div/>
            <b-button @click="remove(s)">x</b-button>
            

        </b-card>
        <p> total ₪{{total.toFixed(2)}} </p>

        <b-form v-if="!loggedIn"    @submit.prevent="pressed">
         register
        <b-form-input type="email" placeholder="enter you email" v-model="email"></b-form-input>
            <b-form-input type="password" placeholder="enter a password" v-model="password"></b-form-input>
            <b-button type="submit">register</b-button>
        </b-form>
        <b-button v-else @click="proceed" >Proceed to Checkout </b-button>
        
        
      </div> 
    </div>
</template>

<style>
.drawer{
    
  position: fixed;
  top: 0;
  padding-top: 50px;
  height: 100%;
  width: 33%;
  background: grey;
  overflow-x: hidden;
  overflow-y: scroll;
  right: 0px;
  z-index: 1;
  
  
 

}
.fullPage{
    position: absolute;
    background-color: cornsilk;
  top: 0;
  z-index: 1;
   
   width: 100%;
}
.cartimg{
    width: 100px;
    height: 100px;
}



</style>

<script>
import checkOut from './checkOut.vue' ;
import firebase from "firebase/app";
import "firebase/auth";

export default {
    props:['selectedp'],
    components:{
        checkOut

    },
    methods:{
        remove(product){
            return this.selectedp.splice(product.index,1);
            


        },
        pressed(){
            firebase.auth().createUserWithEmailAndPassword(this.email,this.password)
            this.loggedIn=true
            
        },
        proceed(){
            this.p_checkOut=true
            this.$emit('checkout')
            
            
    
        },
        closecart(){
            this.$emit('close')
        }
        

    },
    data(){
        return{
            email: "",
            password: "",
            error:"",
            loggedIn:false,
            p_checkOut:false
        }
    },
    computed:{
        total:function(){
            let sum=0;
           for(let i=0;i<this.selectedp.length;i++){
               sum+=this.selectedp[i].price

           }
            return sum;    
            }

            
        
    }
   

             
}
</script>