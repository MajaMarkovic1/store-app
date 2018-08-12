<template>
  <div>
      <h1>Products</h1>
      <table class="table table-condensed">
          <thead>
              <th>Title</th>
              <th>Quantity</th>
          </thead>
          <tbody>
              <tr v-for="(product, index) in products" :key="index">
                  <td>{{ product.title }}</td>
                  <td>{{ product.quantity }}</td>
              </tr>
          </tbody>
      </table>
  </div>
</template>

<script>
import { productService } from '../services/ProductService'
export default {
  name: 'AppProducts',
  data(){
    return {
      products: productService.list()
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
