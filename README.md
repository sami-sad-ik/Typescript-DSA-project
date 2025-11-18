## 1. TypeScript-এ interface এবং type এর পার্থক্য

TypeScript-এ আমরা interface এবং type দুইটা ব্যবহার করি objects বা data structure-এর type define করার জন্য। কিন্তু দুটোর মধ্যে কিছু গুরুত্বপূর্ণ পার্থক্য আছে:

### Interface
- মূলত object shape define করতে ব্যবহার করা হয়।
- Extend করা যায় অন্য interface-এর মাধ্যমে।
- নতুন properties পরে extend বা declaration merging-এর মাধ্যমে যোগ করা যায়।

```ts
interface Person {
  name: string;
  age: number;
}

interface Employee extends Person {
  employeeId: number;
}
```
### Type Alias
- যেকোনো type define করতে পারে: primitives, union, intersection, tuple ইত্যাদি।

- extend করা যায় না interface-এর মতো।

- declaration merging সম্ভব নয়।

  ```ts
  type ID = string | number; 
  type Employee = { name: string; age: number } & { employeeId: number }; 
  ```

## 2. TypeScript-এ keyof এর ব্যবহার

 keyof keyword ব্যবহার করা হয় কোনো object type-এর properties-এর নামগুলোর union type বের করার জন্য।
```ts
interface Person {
  name: string;
  age: number;
}

type PersonKeys = keyof Person; 

function getProperty(obj: Person, key: PersonKeys) {
  return obj[key];
}

const p: Person = { name: "John Doe", age: 22 };
console.log(getProperty(p, "name")); // "John Doe"
```

- keyof Person → 'name' | 'age'

- এটা type-safe ভাবে object-এর properties access করতে সাহায্য করে।
