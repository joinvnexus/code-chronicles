

// Door Unlock Promise

const unlockDoor = new Promise((resolve, reject) => {

    const doorLocked = false;

    setTimeout(() => {

        if (!doorLocked) {
            resolve("🚪 Door is unlocked! You can enter.")
        } else {
            reject("❌ Door is locked! Cannot enter.")
        }
    }, 2000)


})
unlockDoor
.then(msg => console.log("Success:", msg))
.catch(err => console.log("Error:", err))