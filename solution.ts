const formatValue = (value: string | number | boolean): string | number | boolean => {

  if (typeof value === 'string') {
    return value.toUpperCase();
  }
  else if (typeof value === 'number') {
    return value * 10;
  }
  else if (typeof value === 'boolean') {
    return !value;
  }
  else {
    return value;
  }
}




const getLength = (val: string | any[]): number => {
  if (typeof (val) === 'string') {
    return val.length;
  }
  else if (Array.isArray(val)) {
    return val.length;
  }
  else {
    return 0;
  }
}





class Person {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }

  getDetails(): string {
    return `'Name: ${this.name}, Age: ${this.age}'`
  }
}





type itemType = {
  title: string,
  rating: number
}

const filterByRating = <T extends itemType>(books: T[]): T[] => {
  return books.reduce((filterredBooks: T[], currentBook) => {
    if (currentBook.rating >= 4) {
      filterredBooks.push(currentBook);
    }
    return filterredBooks;
  }, []);
}





type userType = {
  id: number,
  name: string,
  email: string,
  isActive: boolean
}

const filterActiveUsers = <T extends userType>(users: T[]): T[] => {
  return users.reduce((activeUser: T[], currentUser: T) => {
    if (currentUser.isActive) {
      activeUser.push(currentUser);
    }
    return activeUser;
  }, []);
}






interface Book {
  title: string;
  author: string;
  publishedYear: number;
  isAvailable: boolean;
}

const printBookDetails = <T extends Book>(book: T): void => {
  console.log(`Title: ${book.title}, Author: ${book.author}, Published: ${book.publishedYear}, Available: ${book.isAvailable ? 'Yes' : 'No'}`)
}





const getUniqueValues = (array1: (number | string)[], array2: (number | string)[]): (number | string)[] => {

  let arrayWithUniqueValues: (number | string)[] = array1;

  for (let i = 0; i < array2.length; i++) {
    const firstArrayItem = array2[i];
    let isFound: boolean | null = null;
    for (let j = 0; j < array1.length; j++) {
      const secondArrayItem = array1[j];
      if (secondArrayItem === firstArrayItem) {
        isFound = true;
        break;
      }
    }
    if (!isFound) {
      arrayWithUniqueValues[arrayWithUniqueValues.length] = (firstArrayItem);
    }
  }
  return arrayWithUniqueValues;
}



type productType = {
  name: string;
  price: number;
  quantity: number;
  discount?: number;
}

const calculateTotalPrice = <T extends productType>(products: T[]): number => {
  return products.reduce((totalPrice, currentItem) => {
    const itemTotal = (currentItem.price * currentItem.quantity)
    if (currentItem.discount) {
      const discountAmount = itemTotal * (currentItem.discount / 100)
      return totalPrice + (itemTotal - discountAmount)
    }
    return totalPrice += itemTotal;
  }, 0)
}

