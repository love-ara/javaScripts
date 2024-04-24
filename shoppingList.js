const shoppingList = [
    { name: 'Apples', category: 'Fruits', isHealthy: true },
 { name: 'Potato Chips', category: 'Snacks', isHealthy: false },
     { name: 'Carrots', category: 'Vegetables', isHealthy: true },
    { name: 'Chocolate Bars', category: 'Sweets', isHealthy: false },
 { name: 'Greek Yogurt', category: 'Dairy', isHealthy: true },
    { name: 'Soda', category: 'Beverages', isHealthy: false }
    ];
    

function shop(arr){
 let healthyItems = arr.filter((item)=> item.isHealthy);
 healthyItems.forEach(element => console.log(element));
 return healthyItems;
}

console.log(shop(shoppingList))