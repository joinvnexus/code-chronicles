const orderCoffee = new Promise((resolve, reject) => {
    const coffeeAvailable = true; // check if coffee  is available

    setTimeout(() => {
        if (coffeeAvailable) {
            resolve("☕ Coffee is ready!"); // if success
        } else {
            reject("❌ Sorry, coffee is not available"); // if fail
        }
    }, 2000); // call after 2 seconds
});

// Promise handle
orderCoffee
    .then(msg => console.log("Success:", msg))
    .catch(err => console.log("Error:", err));
