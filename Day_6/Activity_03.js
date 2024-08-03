// Nested Object

// task 5

const library = {
    name: "city Library",
    books:[
        {
            title: "To Kill a Mockingbird",
            author: "Harper Lee",
            year:1960,
        },
        {
            title: "1948",
            author: "George Orwell ",
            year:1949,
        },
        {
            title: "The Great Gatsby",
            author: "F. Scott Fitzgerald",
            year: 1925,
        }
    ]
} 

//console.log(library);


// task 6

console.log("Library Name: ", library.name);
library.books.forEach(book => {
    console.log("Book Title:", book.title);
});

