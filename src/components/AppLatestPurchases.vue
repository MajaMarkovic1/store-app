<template>

    <div>
        <div>{{ customer.firstName }}</div>
        <div>{{ customer.lastName }}</div>
        <div>{{ customer.email }}</div>
        <div>{{ customer.products }}</div>
        <router-link to="/customers">Back</router-link>
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