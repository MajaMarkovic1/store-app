const products = [
    {
        id: 1,
        title: 'dress',
        quantity: 0
    },
    {
        id: 2,
        title: 'jeans',
        quantity: 0
    },
    {
        id: 3,
        title: 'blouse',
        quantity: 0
    },
    {
        id: 4,
        title: 'shoes',
        quantity: 0
    }
]


class ProductService{
    list(){
        return products;
    };
    addProduct(product){
        products.forEach(function (item){
            if (item.id === product.id){
                product.quantity++;   
            }
        })
    };
    removeProduct(product){
        products.forEach(function (item){
            if (item.id === product.id && product.quantity > 0){
                product.quantity--;   
            }
        })
    };
    buyProduct(product){
        return product;
    };

    find(id){
        return products.find(product => product.id === id);
    }
}

export const productService = new ProductService();
