function bookTitle(books , callback){
      
    //Create a new list only conataining the book titles
    const titles = books.map(book=>book.title)

    // Sort the title in a,lphabetical order
    const SortedTitles = titles.sort();

    // call the callback function with sorted titles
  callback(SortedTitles);

    }

    // Example list of books
const books = [
    { title: 'To Kill a Mockingbird', author: 'Harper Lee', year: 1960 },
    { title: '1984', author: 'George Orwell', year: 1949 },
    { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', year: 1925 }
  ];
  
  // Define the callback function to log the titles
  function logTitles(titles) {
    console.log('Book titles in alphabetical order:');
    console.log(titles.join('\n'));
  }
  
  // Call the getBookTitles function with the list of books and the logTitles callback function
  bookTitle(books, logTitles);

