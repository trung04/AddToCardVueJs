<template>
  <header>
    <TheHeader :cartInfo="cartList" @remove-pro="handleRemovePro" @handle-up-or-down="handleUpOrDown"></TheHeader>
  </header>
  <main class="container">
    <ProductList @handle-buy="handleBuy" ></ProductList>
  </main>
</template>
<script>
import TheHeader from './components/TheHeader.vue';
import ProductList from './components/ProductList.vue';
export default{
  data(){
    return{
      cartList:[],
    }

  },
  components:{
    TheHeader,
    ProductList
  },
  methods:{
    handleBuy(productInfo){
      let index=this.cartList.findIndex((cart)=>cart.id===productInfo.id);
      if(index===-1){
        let proInfo={...productInfo,quantity:1};
        this.cartList=[...this.cartList,proInfo];
        console.log(proInfo);
      }
      else{
        this.cartList[index].quantity+=1;
        // console.log(this.cartList[index].quantity);
      }
    },
    handleRemovePro(cartItem){
      this.cartList=this.cartList.filter((cart)=>cart.id!==cartItem.id);
      // console.log(cartItem);
    },
    handleUpOrDown(status,cartItem){
      let index=this.cartList.findIndex((cart)=>cart.id===cartItem.id);

      if(status===true){
        this.cartList[index].quantity+=1;


      }else if(status===false ){
        if( this.cartList[index].quantity >1){
          this.cartList[index].quantity-=1;
        }
        else{
          this.handleRemovePro(cartItem);
        }
      }

        
    }
    

  }

}

</script>

<style scoped>
.container{
  margin-left: -283px;
    margin-top: -131px;

}
#app {
    text-align: center;
    border: 1px solid red;
    margin-top: 0px;
    position: absolute;
    top: 0px;
}
</style>
