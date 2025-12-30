---
title: "Functional Programming Patterns That Changed How I Code"
date: "2025-11-20"
excerpt: "Functional programming isn't just about avoiding side effects. It's a different way of thinking about problems that makes code more reliable and easier to reason about."
author: "David Park"
tags: ["functional programming", "javascript", "patterns"]
---

# Functional Programming Patterns That Changed How I Code

I used to think functional programming was academic nonsense. Then I actually tried it. These patterns have fundamentally changed how I write code—making it more reliable, testable, and maintainable.

## Pure Functions: The Foundation

A pure function always returns the same output for the same input and has no side effects.

```javascript
// Impure: Depends on external state
let tax = 0.1;
function calculateTotal(price) {
  return price + (price * tax);
}

// Pure: Everything is explicit
function calculateTotal(price, taxRate) {
  return price + (price * taxRate);
}
```

### Why It Matters

- **Testable** - No setup required
- **Cacheable** - Same input = same output
- **Parallelizable** - No shared state
- **Predictable** - No surprises

## Immutability: Stop Mutating State

Instead of changing data, create new data.

```javascript
// Bad: Mutation
function addItem(cart, item) {
  cart.items.push(item);
  cart.total += item.price;
  return cart;
}

// Good: Immutability
function addItem(cart, item) {
  return {
    ...cart,
    items: [...cart.items, item],
    total: cart.total + item.price
  };
}
```

### Benefits

- **Time travel debugging** - Keep history of all states
- **Undo/redo** - Free with immutable data
- **No defensive copying** - Data can't change
- **Easier reasoning** - Data flow is clear

## Function Composition: Building Blocks

Combine small functions into larger ones.

```javascript
// Small, focused functions
const add = x => y => x + y;
const multiply = x => y => x * y;
const subtract = x => y => y - x;

// Compose them
const pipe = (...fns) => x => fns.reduce((v, f) => f(v), x);

// Build complex operations
const calculatePrice = pipe(
  multiply(1.1),      // Add 10% markup
  subtract(5),        // Apply $5 discount
  add(2.99)          // Add shipping
);

calculatePrice(100); // 112.99
```

### The Power of Composition

```javascript
// Without composition
function processUser(user) {
  const validated = validateUser(user);
  const normalized = normalizeUser(validated);
  const enriched = enrichUser(normalized);
  const saved = saveUser(enriched);
  return saved;
}

// With composition
const processUser = pipe(
  validateUser,
  normalizeUser,
  enrichUser,
  saveUser
);
```

## Higher-Order Functions: Functions as Values

Functions that take or return other functions.

```javascript
// Filter, map, reduce - the holy trinity
const numbers = [1, 2, 3, 4, 5];

const result = numbers
  .filter(n => n % 2 === 0)    // [2, 4]
  .map(n => n * n)             // [4, 16]
  .reduce((sum, n) => sum + n, 0); // 20

// Custom higher-order function
function withLogging(fn) {
  return function(...args) {
    console.log(`Calling ${fn.name} with`, args);
    const result = fn(...args);
    console.log(`Result:`, result);
    return result;
  };
}

const add = (a, b) => a + b;
const loggedAdd = withLogging(add);
loggedAdd(2, 3); // Logs everything
```

## Currying: Partial Application

Transform a function that takes multiple arguments into a sequence of functions.

```javascript
// Regular function
function greet(greeting, name) {
  return `${greeting}, ${name}!`;
}

// Curried version
const greetCurried = greeting => name => `${greeting}, ${name}!`;

// Partial application
const sayHello = greetCurried('Hello');
const sayHi = greetCurried('Hi');

sayHello('Alice'); // "Hello, Alice!"
sayHi('Bob');      // "Hi, Bob!"

// Practical example: Configurable fetch
const fetchFrom = baseUrl => endpoint => options =>
  fetch(`${baseUrl}${endpoint}`, options);

const apiCall = fetchFrom('https://api.example.com');
const getUser = apiCall('/users');
const getPost = apiCall('/posts');

getUser({ method: 'GET' });
```

## Functors: Mappable Containers

A functor is something you can map over.

```javascript
// Array is a functor
[1, 2, 3].map(x => x * 2); // [2, 4, 6]

// Custom functor: Maybe
class Maybe {
  constructor(value) {
    this.value = value;
  }
  
  static of(value) {
    return new Maybe(value);
  }
  
  isNothing() {
    return this.value === null || this.value === undefined;
  }
  
  map(fn) {
    return this.isNothing() ? Maybe.of(null) : Maybe.of(fn(this.value));
  }
}

// Safe operations
const user = Maybe.of({ name: 'Alice', address: { city: 'NYC' } });

const city = user
  .map(u => u.address)
  .map(a => a.city)
  .map(c => c.toUpperCase());

console.log(city.value); // "NYC"

// Handles null safely
const noUser = Maybe.of(null);
const noCity = noUser
  .map(u => u.address)      // Doesn't crash!
  .map(a => a.city)
  .map(c => c.toUpperCase());

console.log(noCity.value); // null
```

## Monads: Chainable Contexts

Monads are functors with `flatMap` (or `chain`).

```javascript
class Result {
  constructor(value, error = null) {
    this.value = value;
    this.error = error;
  }
  
  static ok(value) {
    return new Result(value, null);
  }
  
  static err(error) {
    return new Result(null, error);
  }
  
  isError() {
    return this.error !== null;
  }
  
  map(fn) {
    return this.isError() ? this : Result.ok(fn(this.value));
  }
  
  flatMap(fn) {
    return this.isError() ? this : fn(this.value);
  }
}

// Chain operations that might fail
function divide(a, b) {
  return b === 0 
    ? Result.err('Division by zero')
    : Result.ok(a / b);
}

function sqrt(n) {
  return n < 0
    ? Result.err('Square root of negative number')
    : Result.ok(Math.sqrt(n));
}

// Compose fallible operations
const result = Result.ok(16)
  .flatMap(n => divide(n, 4))  // 4
  .flatMap(n => sqrt(n));       // 2

if (result.isError()) {
  console.error(result.error);
} else {
  console.log(result.value); // 2
}
```

## Lazy Evaluation: Compute Only When Needed

```javascript
// Eager: Computes everything immediately
function range(start, end) {
  const result = [];
  for (let i = start; i < end; i++) {
    result.push(i);
  }
  return result;
}

const numbers = range(0, 1000000); // Creates huge array
const first10 = numbers.slice(0, 10); // Wasteful!

// Lazy: Computes on demand
function* lazyRange(start, end) {
  for (let i = start; i < end; i++) {
    yield i;
  }
}

const lazyNumbers = lazyRange(0, 1000000);
const lazyFirst10 = Array.from(
  { length: 10 },
  () => lazyNumbers.next().value
); // Only computes 10 values!
```

## Recursion: Loop-Free Iteration

```javascript
// Imperative loop
function sum(numbers) {
  let total = 0;
  for (let i = 0; i < numbers.length; i++) {
    total += numbers[i];
  }
  return total;
}

// Recursive
function sumRecursive(numbers) {
  if (numbers.length === 0) return 0;
  const [first, ...rest] = numbers;
  return first + sumRecursive(rest);
}

// Tail-recursive (optimizable)
function sumTail(numbers, acc = 0) {
  if (numbers.length === 0) return acc;
  const [first, ...rest] = numbers;
  return sumTail(rest, acc + first);
}
```

## Pattern Matching: Elegant Conditionals

```javascript
// Without pattern matching
function handleResponse(response) {
  if (response.status === 200) {
    return { success: true, data: response.data };
  } else if (response.status === 404) {
    return { success: false, error: 'Not found' };
  } else if (response.status === 500) {
    return { success: false, error: 'Server error' };
  } else {
    return { success: false, error: 'Unknown error' };
  }
}

// With pattern matching (using a library like ts-pattern)
import { match } from 'ts-pattern';

function handleResponse(response) {
  return match(response.status)
    .with(200, () => ({ success: true, data: response.data }))
    .with(404, () => ({ success: false, error: 'Not found' }))
    .with(500, () => ({ success: false, error: 'Server error' }))
    .otherwise(() => ({ success: false, error: 'Unknown error' }));
}
```

## Transducers: Efficient Transformations

```javascript
// Without transducers: Multiple passes
const result = array
  .map(x => x + 1)      // Pass 1
  .filter(x => x % 2)   // Pass 2
  .map(x => x * 2);     // Pass 3

// With transducers: Single pass
const map = fn => reducer => (acc, val) => reducer(acc, fn(val));
const filter = pred => reducer => (acc, val) => 
  pred(val) ? reducer(acc, val) : acc;

const transducer = compose(
  map(x => x + 1),
  filter(x => x % 2),
  map(x => x * 2)
);

const result = array.reduce(transducer((acc, x) => [...acc, x]), []);
```

## Real-World Application: Form Validation

```javascript
// Functional approach to validation
const required = field => value =>
  value ? Result.ok(value) : Result.err(`${field} is required`);

const minLength = (field, min) => value =>
  value.length >= min 
    ? Result.ok(value) 
    : Result.err(`${field} must be at least ${min} characters`);

const email = value =>
  /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(value)
    ? Result.ok(value)
    : Result.err('Invalid email format');

// Compose validators
const validateEmail = value =>
  Result.ok(value)
    .flatMap(required('Email'))
    .flatMap(email);

const validatePassword = value =>
  Result.ok(value)
    .flatMap(required('Password'))
    .flatMap(minLength('Password', 8));

// Validate form
function validateForm(data) {
  const emailResult = validateEmail(data.email);
  const passwordResult = validatePassword(data.password);
  
  if (emailResult.isError()) return emailResult;
  if (passwordResult.isError()) return passwordResult;
  
  return Result.ok(data);
}
```

## The Mindset Shift

Functional programming changes how you think:

### Before FP
- "How do I do this?"
- Thinking in steps and mutations
- Imperative: "Do this, then that"

### After FP
- "What is this?"
- Thinking in transformations
- Declarative: "This is that"

## Practical Tips

### Start Small
Don't rewrite everything. Start with:
1. Make functions pure
2. Use `map`, `filter`, `reduce`
3. Avoid mutations
4. Compose small functions

### Use Libraries
- **Ramda** - Functional utilities
- **Lodash/FP** - Functional Lodash
- **Immutable.js** - Immutable data structures
- **fp-ts** - Functional TypeScript

### Know When Not To

FP isn't always the answer:
- Performance-critical code
- Simple CRUD operations
- When the team isn't on board

## Conclusion

Functional programming isn't about purity for purity's sake. It's about:

- **Reliability** - Pure functions don't surprise you
- **Testability** - No mocking, no setup
- **Composability** - Build complex from simple
- **Maintainability** - Clear data flow

You don't need to go full Haskell. Even adopting a few patterns will make your code better.

Start with pure functions and immutability. The rest will follow naturally.

Your future self will thank you.

