<template>
  <div v-if="isOpenCart" class="modal" @click="handleRemove">
    <div class="modal-container" @click.stop>
        <div class="modal-header">
            <i class="fa fa-shopping-cart cart"></i>
            <div class="modal-close" @click="handleRemove">
                <i class="fa fa-times"></i>
            </div>
        </div>
        <div class="modal-body">
            <slot></slot>
        </div>
        <div class="modal-footer"></div>
    </div>
  </div>
</template>

<script>
export default {
    props:{
        isOpenCart:{
            type:Boolean
        },
        handleCloseCart:{
            type:Function
        }
        
    },
    methods:{
        handleRemove(){
            this.handleCloseCart();
        }
    }

}

</script>

<style>
.modal{
    position:fixed;
    z-index: 1;
    top: 0px;
    left: 0px;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    display: flex;
}
.modal-container{
    width: auto;
    height: auto;
    background: white;
    margin: auto;
}
.modal-close{
    border-radius: 50%;
    line-height: 50px;
    width: 50px;
    height: 50px;
    font-size: 30px;
    display: flex;
    justify-content: center;
    align-items: center;

}
.modal-close:hover{
    cursor: pointer;
    background: rgba(0, 0, 0, 0.2);
}
.cart{
    font-size: 30px;
}

</style>