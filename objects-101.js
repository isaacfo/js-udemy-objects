// title, aithor, and pageCount are all properties of myBook

let myBook = {
    title: '1984',
    author: 'George Orwell',
    pageCount: 326
}

// . notation allows you to pull specific properties from the object
console.log(`${myBook.title} by ${myBook.author}`)




myBook.title = 'Animal Farm'

console.log(`${myBook.title} by ${myBook.author}`)