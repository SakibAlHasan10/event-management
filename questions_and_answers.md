<div align="center">
  <img height="60" src="https://edurev.gumlet.io/AllImages/original/ApplicationImages/CourseImages/944e5d47-8c55-4a89-91e5-22ab5f2798fc_CI.png">
  <h1>MCQ TEST</h1>
</div>

###### 1. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let greeting;
greetign = {};
console.log(greetign);
```

- A: `{}`
- B: `ReferenceError: greetign is not defined`
- C: `undefined`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>We logs an object here, because we have declared an empty object in the globally! When we mistype greeting as greetign, the JavaScript interpreter sees it as: global.greetign = {} (or window.greetign = {} in a browser).
So here Answer will be a blank website</i>

</p>
</details>

###### 2. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sum(a, b) {
  return a + b;
}

sum(1, "2");
```

- A: `NaN`
- B: `TypeError`
- C: `"12"`
- D: `3`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>We know that JavaScript is a dynamically typed language, so JavaScript can automatically detect which type of data. We have taken two parameters of this function as arguments we have given two values here one value is in the form of string and another value is in the form of number so the result is "12".

In this example, since the number '2' is a string, JavaScript converts the number 1 to a string and returns a value. When adding a numeric type (1) and a string type ('2'), the number is treated as a string. We can concatenate strings like "bangla" + "desh", so what is happening here is "1" + "2" which gives "12".</i>

</p>
</details>

###### 3. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
const food = ["🍕", "🍫", "🥑", "🍔"];
const info = { favoriteFood: food[0] };

info.favoriteFood = "🍝";

console.log(food);
```

- A: `['🍕', '🍫', '🥑', '🍔']`
- B: `['🍝', '🍫', '🥑', '🍔']`
- C: `['🍝', '🍕', '🍫', '🥑', '🍔']`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: A

<i>We set the value of the favoriteFood property on the info object equal to the string with the pizza emoji. A string is a primitive data type.   We know that primitive data types in JavaScript do not interact by reference. In JavaScript, primitive data types interact by value. In this case, we set the value of the favoriteFood property on the info object equal to the value of the first element in the food array, In this case the pizza emoji is a string. A string is a primitive data type, and interacts by value. Then, we change the value of the favoriteFood property on the info object. The food array hasn't changed, since the value of favoriteFood was merely a copy of the value of the first element in the array, and doesn't have a reference to the same spot in memory as the element on food[0]. When we log food, it's still the original array.
</i>

</p>
</details>

###### 4. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
function sayHi(name) {
  return `Hi there, ${name}`;
}

console.log(sayHi());
```

- A: `Hi there,`
- B: `Hi there, undefined`
- C: `Hi there, null`
- D: `ReferenceError`

<details><summary><b>Answer</b></summary>
<p>

#### Answer: B

<i>Here is a function that takes a parameter. then returned the parameter inside the function dynamically with ``Hi there, ${name}'', since no value is given when calling this function, the value of the parameter will be undefined. So the correct answer would be Hi there, undefined</i>

</p>
</details>

###### 5. Write the `correct answer` from the following options and give an explanation (2-5 lines).

```javascript
let count = 0;
const nums = [0, 1, 2, 3];

nums.forEach((num) => {
  if (num) count += 1;
});

console.log(count);
```

- A: 1
- B: 2
- C: 3
- D: 4

<details><summary><b>Answer</b></summary>
<p>

#### Answer: C

<i>Here using if in forEach is checking whether the value of number is true or false since the value of the first number of the array is zero so it is false, since the value of zero is false the statement of f will not be executed. One will increase the count for two and three. Since there are three numbers here, the value of count is 3.</i>

</p>
</details>
