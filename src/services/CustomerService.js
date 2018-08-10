
const customers = [
    {   id: 1, 
        firstName: 'Maja', 
        lastName: 'Markovic', 
        email: 'example1@gmail.com',
        products: [],
       
    },
    {   id: 2, 
        firstName: 'Natasa', 
        lastName: 'Radovnovic', 
        email: 'example2@gmail.com',
        products: [],
        
        
    },
    {   id: 3, 
        firstName: 'Jelena', 
        lastName: 'Stojsin', 
        email: 'example3@gmail.com',
        products: [],
        
        
    },
]

let nextId = 4

class CustomerService {
    list(){
        return customers;
    };
    deleteCustomer(customer){
        let indexOfCustomer = customers.indexOf(customer);
        customers.splice(indexOfCustomer, 1);
    };
    
    
    addCustomer(newCustomer){
        newCustomer.id = nextId;
        customers.push(newCustomer);
        nextId++;
    };

    showLatestPurchases(customer){
        return customer;
    };

    find(id){
        return customers.find(customer => customer.id == id);
    }
}
export const customerService = new CustomerService();
