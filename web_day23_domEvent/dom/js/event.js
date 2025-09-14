document
    .getElementById("btn-log-in")
    .addEventListener("click", function () {
        console.log("clicked", this);
        const userName = document.getElementById("user-name");
        // console.log(userName);
        userName.innerText = "user Login in successfully";
    });
document
    .getElementById("btn-update-title")
    .addEventListener("click", function () {
        //console.log('clicked', this);
        const titleText = document.getElementById("title-text");
        // console.log(titleText);
        titleText.innerText = "new title";
    });

// handle input text

// 1 set the event handler
document
    .getElementById("btn-submit")
    .addEventListener("click", function () {
        // 2 get the input value
        const nameInput = document.getElementById("input-name");
        console.log(nameInput);
        const name = nameInput.value;
        console.log(name);
        // 3 set the text

        const newList = document.createElement("li");
        newList.innerText = name;
        const list = document.querySelector(".name-text");
        list.appendChild(newList);
        nameInput.value = "";
    });





