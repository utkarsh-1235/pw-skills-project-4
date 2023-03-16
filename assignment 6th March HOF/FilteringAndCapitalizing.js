// define the list of books as an array of objects
const books = [
    { title: "The Hunger Games", author: "suzanne collins", year: 2008 },
    { title: "The Girl with the Dragon Tattoo", author: "stieg larsson", year: 2005 },
    { title: "The Help", author: "kathryn stockett", year: 2009 },
    { title: "The Immortal Life of Henrietta Lacks", author: "rebecca skloot", year: 2010 },
    { title: "Gone Girl", author: "gillian flynn", year: 2012 }
  ];

  // filter out books published before 2010 and create a new array with the remaining books
  const filterBooks = books.filter(book => book.year>=2010)
  //console.log(filterBooks)

  // capitalize the author names in the filterBooks array
  const capitalize = filterBooks.map(book=>{
    const capitalizeAuthor = book.author.split(" ").map(name=>name.charAt(0).toUpperCase()+name.slice(1)).join("")
    return { title: book.title, author: capitalizeAuthor, year: book.year };
  })
  console.log(capitalize)