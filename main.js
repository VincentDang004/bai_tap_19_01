//Cau 1
function Product(id, name, price, quantity, category, isAvailable){
    this.id = id;
    this.name = name;
    this.price = price;
    this.quantity = quantity;
    this.category = category;
    this.isAvailable = isAvailable;
}


//Cau 2
const products = [
    new Product(1, "Wave Alpha", 20000000, 50, "Xe máy", true),
    new Product(2, "Vision", 35000000, 0, "Xe máy", false),
    new Product(3, "Mũ bảo hiểm", 500000, 100, "Accessories", true),
    new Product(4, "Găng tay", 200000, 20, "Accessories", true),
    new Product(5, "SH Mode", 60000000, 5, "Xe máy", true) 
];

//Cau 3

function Product1(name, price){
    this.name = name;
    this.price = price;
}

const products1 = [
    new Product1("Wave Alpha", 20000000),
    new Product1("Vision", 35000000),  
];

console.log("Câu 3", products1);

//Cau 4
const availableProducts = products.filter(product => product.quantity > 0);
console.log("Câu 4", availableProducts); 

//Cau 5
const hasExpensiveProduct = products.some(product => product.price > 30000000 );
console.log("Câu 5", hasExpensiveProduct);

//Cau 6
