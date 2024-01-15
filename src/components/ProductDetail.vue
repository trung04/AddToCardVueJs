<template>
    <div class="product-detail-container">
        <div class="row">
            <div class="col-sm-3 mx-5">
                <img :src="productItem.image" :alt="productItem.name">
            </div>
            <div class="col-sm-6">
            <div class="product-name">{{ productItem.name }}</div>
            <div class="product-descriptio">{{ productItem.description }}</div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    props:{
        productItem:{
            type:Object
        }
    }

}
</script>

<style>
.product-detail-container{
    width: 700px;
}

</style>