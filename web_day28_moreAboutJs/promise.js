/**

const getData = new Promise((resolve, reject) => {
    const num = Math.random() * 10;
    console.log("generate number!", num)

    if (num > 5) {
        resolve({ num: num, msg: "data is found" })
    }
    else {
        reject({ err: "data is not found" })
    }
})
getData
fetch("https://jsonplaceholder.typicode.com/users/1")
    .then(res => res.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))

 */

/**

const promise = new Promise((res, rej) => {
    const loggedIn = false;

    setTimeout(() => {
        if (loggedIn) {
            console.log("data found");
            res("User is logged in");
        } else {
            console.log("data not found");
            rej("User is not logged in");
        }
    }, 4000);
});

promise
    .then(() => {
        return fetch("https://jsonplaceholder.typicode.com/users/1")
    })
    .then(res => res.json())
    .then(data => {
        loadingData(data)
    })
    .catch(err => console.log("Error:", err));

const loadingData = (user) => {
    console.log(user);

}
 */

const myPromise = new Promise((resolve, reject) => {

    const num = Math.random() * 10;
    console.log("generate number!", num)

    if (num > 5) {
        resolve(
            {
                Number: num,
                msg: "tumar jono akta vala numbar paisi",


            }
        )

    } else {
        reject({
            err: "data is not found",
            text: " ami tumake valabashi tai reject korlam"
        })

    }

})
myPromise
    .then(result => console.log("all ok", result))
    .catch(err => console.log("error",err))
