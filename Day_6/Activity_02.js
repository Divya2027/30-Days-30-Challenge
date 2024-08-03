// Object Methods

// task 3

const book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year:1960,

    getTitleAndAuthor: function(){
        return`${this.title} by ${this.author}`
    }
}

console.log(book.getTitleAndAuthor());

// task 4


const Book = {
    title: "To Kill a Mockingbird",
    author: "Harper Lee",
    year:1960,

    getTitleAndAuthor: function(){
        return` Book: ${this.title}, Author: ${this.author}`
    },
    updateYear: function(newYear){
        this.year = newYear
    }
};

Book.updateYear(2024)
console.log(Book);
