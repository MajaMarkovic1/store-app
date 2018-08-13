<template>
  <div>
      <h1>Customers</h1>
      <form @submit.prevent class="form-group">
          <label>First name: </label>
          <input v-model="newCustomer.firstName" class="form-control" id="formGroupExampleInput" type="text" placeholder="First name"><br>
          <label>Last name: </label>
          <input v-model="newCustomer.lastName" class="form-control" id="formGroupExampleInput" type="text" placeholder="First name"><br>
          <label>Email: </label>
          <input v-model="newCustomer.email" class="form-control" id="formGroupExampleInput" type="text" placeholder="Email"><br>
          <button class="btn btn-success" @click="addCustomer()">Add customer</button>
      </form>
      <table class="table table-condensed">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
                <th></th>
                <th></th>
                
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="index">
                    <td>{{ customer.firstName }}</td>
                    <td>{{ customer.lastName }}</td>
                    <td>{{ customer.email }}</td>
                    <td><button class="btn btn-success" @click="removeCustomer(customer)">Delete</button></td>
                    <td><router-link 
                        :to="{ name: 'latest-purchases', params: {id: customer.id}}">
                        Latest purchases
                        </router-link></td>
                    
                </tr>
            </tbody>
        </table>
      
  </div>
</template>

<script>

import { customerService } from '../services/CustomerService'
//stavljaju se { } jer nije export default nego samo export u service.js
import AppBuyProduct from '../components/AppBuyProduct.vue'

export default {
  name: 'AppCustomers',

  data(){
      return {
          customers: customerService.list(),
          newCustomer: {}
      }
  },
  methods: {
    removeCustomer(customer){
          customerService.deleteCustomer(customer);
      },
    addCustomer(){
        customerService.addCustomer(this.newCustomer);
    },
    latestPurchases(customer){
        customerService.showLatestPurchases(customer);
    }
  }
    
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
