<template>
    <div>
        <h3>Customer:</h3>
        <div><strong>First name:</strong> {{ customer.firstName }}</div>
        <div><strong>Last name:</strong> {{ customer.lastName }}</div>
        <div><strong>Email:</strong> {{ customer.email }}</div>
        <strong>Products:</strong>
        <div v-for="product in customer.products" :key="product.id">{{ product.title }}</div>
        <div><router-link to="/customers">Back</router-link></div>
    </div>
</template>

<script>
import { customerService } from '../services/CustomerService'
export default {
    props: ['id'],
    created(){
        this.customer = customerService.find(this.id);
    }
    
}

</script>