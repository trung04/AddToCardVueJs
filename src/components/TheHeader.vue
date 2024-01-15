<template>
    <nav class="navbar navbar-expand-lg navbar-dark bg-dark">
  <div class="container-fluid">
    <a class="navbar-brand" href="#">Cart</a>
    <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span class="navbar-toggler-icon"></span>
    </button>
    <div class="collapse navbar-collapse" id="navbarSupportedContent">
      <ul class="navbar-nav me-auto mb-2 mb-lg-0">
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Link</a>
        </li>
        <li class="nav-item dropdown">
          <a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
            Dropdown
          </a>
          <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
            <li><a class="dropdown-item" href="#">Action</a></li>
            <li><a class="dropdown-item" href="#">Another action</a></li>
            <li><hr class="dropdown-divider"></li>
            <li><a class="dropdown-item" href="#">Something else here</a></li>
          </ul>
        </li>
        <li class="nav-item">
          <a class="nav-link disabled" href="#" tabindex="-1" aria-disabled="true">Disabled</a>
        </li>
      </ul>
      <form class="d-flex">
        <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search">
        <button class="btn btn-outline-success" type="submit">Search</button>
      </form>
      <div @click="handleOpenCartList">
        <button class="btn btn-danger"><i class="fa fa-shopping-cart"></i>
            <span class="badge text-bg-secondary mx-2">4</span>
        </button>
        

      </div>
    </div>
  </div>
</nav>
<Teleport to="body">
  <BaseModal :isOpenCart="isOpenCartList" :handleCloseCart="handleCloseCartList">
  <section>
    <cart-list :cartInfo="cartInfo" @remove-pro="handleRemovePro" @handle-up-or-down="handleUpOrDown"></cart-list>
  </section>
</BaseModal>
 
</Teleport>

</template>

<script>
import BaseModal from "./BaseModal.Vue"
import CartList from "./CartList.vue";
export default {
  emits:['remove-pro','handle-up-or-down'],
  data(){
    return{
      isOpenCartList:false,

    }

  },
  methods:{
    handleOpenCartList(){
      this.isOpenCartList=true;
    },
    handleCloseCartList(){
      this.isOpenCartList=false;
    },
    handleRemovePro(cartItem){
      this.$emit("remove-pro",cartItem);
      // console.log(cartItem);
    },
    handleUpOrDown(status,cartItem){
      // console.log(status);
        this.$emit("handle-up-or-down",status,cartItem);
    }

  



  },
components:{
  BaseModal,
  CartList,

},
props:{
  cartInfo:{
    type:Object
  }
}

}
</script>

<style>
nav.navbar.navbar-expand-lg.navbar-dark.bg-dark {
    position: absolute;
    top: 0px;
    width: -webkit-fill-available;
    left: 0px;
}

</style>