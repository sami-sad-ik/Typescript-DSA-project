const formatValue = (value: string | number | boolean) => {
  if (typeof value === "string") {
    return value.toUpperCase();
  } else if (typeof value === "number") {
    return value * 10;
  } else if (typeof value === "boolean") {
    return !value;
  }
};

const getLength = (value: any[] | string) => {
  return value.length;
};

class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  getDetails() {
    return `'Name: ${this.name}, Age: ${this.age}'`;
  }
}

type itemsArray = {
  title: string;
  rating: number;
};
const filterByRating = (array: itemsArray[]): itemsArray[] => {
  return array.filter((item) => item.rating > 4);
};

type user = {
  id: number;
  name: string;
  email: string;
  isActive: boolean;
};

const filterActiveUsers = (users: user[]): user[] => {
  return users.filter((user) => user.isActive === true);
};

interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = (book: Book): void => {
  console.log(
    `Title: ${book.title}, Author: ${book.author}, Published: ${
      book.publishedYear
    }, Available: ${book.isAvailable ? "Yes" : "No"}`
  );
};

const getUniqueValues = <T extends string | number>(
  arr1: T[],
  arr2: T[]
): T[] => {
  const newArray: T[] = [];
  for (let i = 0; i < arr1.length; i++) {
    let isExists = false;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === arr1[i]) {
        isExists = true;
      }
    }
    if (!isExists) {
      newArray[newArray.length] = arr1[i];
    }
  }
  for (let i = 0; i < arr2.length; i++) {
    let isExists = false;
    for (let j = 0; j < newArray.length; j++) {
      if (newArray[j] === arr2[i]) {
        isExists = true;
      }
    }
    if (!isExists) {
      newArray[newArray.length] = arr2[i];
    }
  }
  return newArray;
};

interface Product {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}
const calculateTotalPrice = (products: Product[]): number => {
  return products.reduce((total, product) => {
    let totalPrice = product.price * product.quantity;
    if (product.discount) {
      totalPrice = totalPrice - (totalPrice * product.discount) / 100;
    }
    return total + totalPrice;
  }, 0);
};
