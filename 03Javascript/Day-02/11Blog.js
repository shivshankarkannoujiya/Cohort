const orders = [
    { name: "Margherita", price: 10 },
    { name: "Pepperoni", price: 12 },
    { name: "Cheesy", price: 15 }
];


const discountedOrders = orders.map(order => ({
    ...order,
    price: order.price * 0.9
}));

console.log(discountedOrders);




// TODO: 2
const ingredients = [
    { name: "Tomato", inStock: true },
    { name: "Cheese", inStock: true },
    { name: "Pepperoni", inStock: false }
];

// Keep only available ingredients
const availableIngredients = ingredients.filter(ing => ing.inStock);
// console.log(availableIngredients);




// 3
const sales = [20, 35, 50, 10, 40];
const totalSales = sales.reduce((total, sale) => total + sale, 0);
// console.log(`Total Sales: $${totalSales}`);

// 4
const customers = ["aman@example.com", "raman@example.com", "happy@example.com"];

// customers.forEach(email => {
//     console.log(`Sending confirmation email to ${email}...`);
// });

// 5
const orderss = [
    { name: "John", amount: 80 },
    { name: "Saurabh", amount: 120 },
    { name: "Pankaj", amount: 60 }
];

const vipCustomer = orderss.find(order => order.amount > 100);
// console.log(vipCustomer);


// 6
const menu = ["Margherita", "Pepperoni", "Veggie"];

// console.log(menu.includes("Hawaiian"));  
// console.log(menu.includes("Margherita"));  

// 7
const orders1 = [25, 40, 55, 30];

const hasFreeDelivery = orders1.some(order => order > 50);
// console.log(`Free Delivery Available: ${hasFreeDelivery}`);


// 8
const payments = [
    { orderId: 1, paid: true },
    { orderId: 2, paid: true },
    { orderId: 3, paid: false }
];

const allPaid = payments.every(order => order.paid);
// console.log(`Can close shop: ${allPaid}`);


// 9
const orders2 = [
    { name: "Alice", amount: 20 },
    { name: "Bob", amount: 50 },
    { name: "Charlie", amount: 30 }
];

orders2.sort((a, b) => b.amount - a.amount);
// console.log(orders);


// 10
const bestSellers = ["Margherita", "Pepperoni","Veggie", "Hawaiian"];

const topPizzas = bestSellers.slice(0, 3);
console.log(topPizzas);
