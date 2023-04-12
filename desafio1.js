class ProductManager {
    constructor() {
        this.products = [];
    }

    
    addProduct = ( title, description, price, thumbnail, code, stock) => {

        if (!title || !description || !price || !thumbnail || !code || !stock) {
            console.log('Error at creating product: all fields are required');
            return;
        }

        const productIndex = this.products.findIndex((product) => product.code === code);

        if (productIndex !== -1) {
            console.log(`Error: Product with code ${code} already exists`);
            return;
        } else {
            const product = {
                id: this.products.length + 1,
                title,
                description,
                price,
                thumbnail,
                code,
                stock
            };
            this.products.push(product);
        }
        
    };

    getProducts = () => {
        console.log(this.products);
        return; 
    }

    getProductById = (id) => {
        const productId = this.products.findIndex((product) => product.id === id);
       
        if (productId === -1) {
            console.log('Not found');
            return;
        } else {
            console.log(`Product found: ${this.products[productId].title}`);
            return;
        }
    }
}

/* ======== TESTS ======== */
const productManager = new ProductManager();
productManager.getProducts(); // []
productManager.addProduct('Producto 1', 'Descripción 1', 100, 'https://www.cocacola.es/content/dam/one/es/es2/coca-cola/products/productos/dic-2021/CC_Origal.jpg', 10, 5); // OK
productManager.addProduct('Producto 12', 'Descripción 2', 100); // Required field
productManager.addProduct('Producto 1', 'Descripción 1', 100, 'https://www.cocacola.es/content/dam/one/es/es2/coca-cola/products/productos/dic-2021/CC_Origal.jpg', 10, 5); // Duplicate code
productManager.addProduct('Producto 1', 'Descripción 1', 100, 'https://www.cocacola.es/content/dam/one/es/es2/coca-cola/products/productos/dic-2021/CC_Origal.jpg', 20, 5); // OK
productManager.addProduct('Producto 1', 'Descripción 1', 100, 'https://www.cocacola.es/content/dam/one/es/es2/coca-cola/products/productos/dic-2021/CC_Origal.jpg', 30, 5); // OK
productManager.getProducts(); // Get all products
productManager.getProductById(15); // Not found
productManager.getProductById(1); // Get product by id

// FOR VIEW IN CONSOLE TYPE IN TERMINAL: node desafio1.js
// Zaccarias Sebastián CoderHouse Backend Comisión 39770