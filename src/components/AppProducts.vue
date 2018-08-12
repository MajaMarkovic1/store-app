<template>
  <div>
      <h1>Products</h1>
      <div class="active-cyan-4 mb-4">
          <input v-model="searchedProduct.title" class="form-control" type="text" placeholder="Search" aria-label="Search">
      </div>
      <table class="table table-condensed">
        <thead>
          <th>Title</th>
          <th>Quantity</th>
          <th></th>
          <th></th>
          
        </thead>
        <tbody
          v-for="(product, index) in products" :key="index" 
          v-if="product.title === searchedProduct.title">
          <td> {{ product.title }}</td>
          <td> {{ product.quantity }}</td>
          <td><button @click="addProduct(product)">+</button></td>
          <td><button @click="removeProduct(product)">-</button></td>
          
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
      products: productService.list(),
      searchedProduct: {}
    }
  },
  methods: {
    addProduct(product){
      return productService.addProduct(product);
    },
    removeProduct(product){
      return productService.removeProduct(product);
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
