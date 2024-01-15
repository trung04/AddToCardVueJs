<template>
    <table class="table">
        <thead>
            <tr>
                <th>STT</th>
                <th>Name</th>
                <th>Price</th>
                <th>In Stock</th>
                <th>Quantity</th>
                <th>Thành Tiền</th>
                <th>Hoạt Động</th>
            </tr>
        </thead>
        <tbody>
            <tr v-for="(cartItem,index) in cartInfo" :key="index">
                <td scope="row">{{index+1}}</td>
                <td>{{ cartItem.name }}</td>
                <td>{{ cartItem.price }}</td>
                <td>{{ cartItem.quantityInStock }}</td>
                <td>
                    <button class="btn btn-success"  @click="handleUpOrDown(true,cartItem)"><i class="fa fa-angle-up"></i></button>
                   {{cartItem.quantity }}
                    <button class="btn btn-success" @click="handleUpOrDown(false,cartItem)"><i class="fa fa-angle-down" ></i></button>
                </td>
                <td>{{ cartItem.price *cartItem.quantity}}</td>
                
                <td class="text-center">
                    <button class="btn btn-danger" @click="handleRemovePro(cartItem)">
                        <i class="fa fa-trash"></i>
                    </button>
                </td>
            </tr>
            <tr>
                <td></td>
                <td>Tổng tiền</td>
                <td></td>
                <td></td>
                <td></td>
                <td>{{ sumPrice }}</td>
                <td></td>
            </tr>
            
        </tbody>
    </table>
</template>

<script>
export default {
    computed:{
      sumPrice(){
        let price=this.cartInfo.reduce((sum,cartItem)=>sum+=cartItem.price*cartItem.quantity,0); 
        return price;
      }
    },
    props:{
        cartInfo:{type:Object}
    },
    methods:{
    handleRemovePro(cartItem){
      this.$emit("remove-pro",cartItem);
    //   console.log(cartItem);
    },
    handleUpOrDown(status,cartItem){
        // console.log(status);
        this.$emit("handle-up-or-down",status,cartItem);
        
    }
   
    }

}
</script>

<style>

</style>