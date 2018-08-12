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
    showProduct(){
        products.forEach(function (product){
            return product;
        })
    }
}

export const productService = new ProductService();
