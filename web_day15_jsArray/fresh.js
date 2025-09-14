

// ### 🔹 What is an Array?

// An array is a **list of values** stored in a single variable. You can store numbers, strings, or even other arrays.

// ```javascript
// let fruits = ["Apple", "Banana", "Mango"];
// ```

---

### 🔹 Basic Array Example

```javascript
// 1. Create an array
let colors = ["Red", "Green", "Blue"];

// 2. Access items using index
console.log(colors[0]); // Output: Red
console.log(colors[1]); // Output: Green

// 3. Change an item
colors[2] = "Yellow";
console.log(colors); // Output: ["Red", "Green", "Yellow"]

// 4. Add an item to the end
colors.push("Purple");
console.log(colors); // Output: ["Red", "Green", "Yellow", "Purple"]

// 5. Remove the last item
colors.pop();
console.log(colors); // Output: ["Red", "Green", "Yellow"]

// 6. Find the length of the array
console.log(colors.length); // Output: 3

// 7. Loop through the array
for (let i = 0; i < colors.length; i++) {
  console.log(colors[i]);
}
```

---

### 🔹 Output of Loop:

```
Red
Green
Yellow
```

---

Would you like to try an interactive task or quiz with arrays?
