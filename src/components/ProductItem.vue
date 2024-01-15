<template>
  <div class="product-item">
    
    <div class="card text-left">
      <img class="card-img-top" :src="productInfo.image" alt="">
      <div class="card-body">
        <p class="card-text">{{productInfo.name }}</p>
      </div>
      <div>
          <button class="btn btn-primary" @click="handleBuy(productInfo)">Mua</button>
          <button class="btn btn-danger" @click="handleOpenCartList">Chi Tiet</button>
      </div>
    </div>
  </div>
  <Teleport to="body">
    <base-modal :isOpenCart="isOpen" :handleCloseCart="handleCloseCart" >
    <section>
      <product-detail :productItem="productInfo"/>
    </section>
  </base-modal>
  </Teleport>
</template>

<script>
import BaseModal from './BaseModal.vue';
import ProductDetail from './ProductDetail.vue';
export default {
  emits:['handle-buy'],
  components: { BaseModal, ProductDetail },
  data(){
    return {
      isOpen:false, 
    }
  },
  props:{
     productInfo:{
      type:Object
    }
  },
  methods:{
    handleBuy(productInfo){
      this.$emit("handle-buy",productInfo);
    },
    handleOpenCartList(){
      this.isOpen=true;
    },
    handleCloseCart(){
      this.isOpen=false;
    }
    
  }


}
</script>

<style>
.product-item {
    width: 150px;
    height: auto;
}
.card-body{
  height: 90px;
}

</style>