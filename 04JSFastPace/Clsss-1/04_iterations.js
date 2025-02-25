const salesData = [
    {product: "Laptop", price: 1200},
    {product: "Smartphone", price: 800},
    {product: "Headphones", price: 150},
    {product: "Keyboard", price: 80}
]
const totalSales = salesData.reduce((acc, sale) => acc + sale.price, 0)


const inventory = [
    {name: "Widget A", stock: 30},
    {name: "Widget B", stock: 120},
    {name: "Widget C", stock: 45},
    {name: "Widget D", stock: 70},
]
const lowStockItems = inventory.filter((item) => item.stock < 50)


const userActivity = [
    {user: "Alice", activityCount: 45},
    {user: "Bob", activityCount: 72},
    {user: "Charlie", activityCount: 33},
]

// TODO: find most active user using: reduce
const mostActiveUser = userActivity.reduce((maxUser, user) => (
    user.activityCount > maxUser.activityCount ? user : maxUser
))
console.log(mostActiveUser)
