<template>
    <div>
        <h3>Product:</h3>
        <div><strong>Title :</strong> {{ product.title }}</div>
        <div><strong>Quantity:</strong> {{ product.quantity }}</div>
        <div><strong>Choose customer: </strong></div>
        <select v-if="product.quantity" class="form-control" id="customer" v-model="newCustomer">
            <option v-for="customer in customers" :key="customer.id" :value="customer">
                {{customer.firstName}}
            </option>
        </select>
        
        <div>
            <button class="btn btn-success" @click="confirmCustomer()">Confirm</button>
            <router-link class="btn btn-success" to="/products">Cancel</router-link>
            <router-link class="btn btn-success" v-if="product.quantity <= 0" to="/products">Go back to products</router-link>
        </div>
        
    </div>
</template>

<script>
import { productService } from '../services/ProductService'
import { customerService } from '../services/CustomerService';


export default {
    props: ['id'],
    created(){
        this.product = productService.find(this.id);
        this.customers = customerService.list();
        
    },
    data(){
        return {
            newCustomer: {}
        }
    },
    
    methods: {
        confirmCustomer(){
           
            if (!this.newCustomer.firstName){
                
                alert('Please, choose a customer!');
            } else {

                customerService.addProduct(this.newCustomer, this.product);
                
                productService.removeProduct(this.product);
            }
            
        }
    }
    
}

</script>

<style>

.btn-success {
    margin: 0.3rem;

}
</style>