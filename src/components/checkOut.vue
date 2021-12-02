<template>
<div id="c">
   
    <b-form class="form">
        <h3> Customer Information</h3>
    <b-input type="email" placeholder="email">email</b-input>
    <h4>Shipping Adress</h4>
    <div></div>
    Full Name<b-input></b-input>
    Street<b-input></b-input>
    City<b-input></b-input>
    State<b-input></b-input>
    Zip<b-input></b-input>
    Country<b-input></b-input>
    Phone number<b-input></b-input>
    Add notes<b-textarea></b-textarea>
    </b-form>
</div>
    
</template>
<style scoped>
#c{
    background-color: rgb(149, 176, 226);
    display: flex;
    
    
    justify-content: center;
    
    
}
.form{
    
    width: 500PX;
   
    top:200px;
}

</style>