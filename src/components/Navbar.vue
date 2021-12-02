<template>
    <b-navbar type="light" variant="light" >
       
        <router-link :class="{active:$route.name === 'Home'}" to="/" padding=10px>Home</router-link>
        
       
        <router-link :class="{active:$route.name === 'About'}" to="/about">About</router-link>
        <router-link :class="{active:$route.name === 'Products'}" to="/products">Products</router-link>
        
       
    </b-navbar>
</template>

<style scoped>
.button{
  border: none;
  background: none;

}
nav a{   
  padding:10px 10px;
  font-weight: bold;
  color: darkgray;
  text-decoration:none;
}

.active{
  color: rgb(90, 90, 90);
}
  

  

</style>
<script>
export default {
  
  
  methods:{
    
  }
}
</script>