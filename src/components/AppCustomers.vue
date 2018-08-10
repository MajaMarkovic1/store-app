<template>
  <div>
      <h1>Customers</h1>
      <table class="table table-condensed">
            <thead>
                <th>First Name</th>
                <th>Last Name</th>
                <th>Email</th>
            </thead>
            <tbody>
                <tr v-for="(customer, index) in customers" :key="index">
                    <td>{{ customer.firstName }}</td>
                    <td>{{ customer.lastName }}</td>
                    <td>{{ customer.email }}</td>
                    <button class="btn btn-success" @click="removeCustomer(customer)">Delete</button>
                </tr>
            </tbody>
        </table>
      
  </div>
</template>

<script>

import { customerService } from '../services/CustomerService'
//stavljaju se { } jer nije export default nego samo export u service.js

export default {
  name: 'AppCustomers',
  data(){
      return {
          customers: customerService.list()
      }
  },
  methods: {
      removeCustomer(customer){
          customerService.deleteCustomer(customer);
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
