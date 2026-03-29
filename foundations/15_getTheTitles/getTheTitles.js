const getTheTitles = function(books) {
 return books.map(book => book.title);

 //2) return books.reduce((acc, book) => {
 //    acc.push(book.title);
 //    return acc;
 //   }, []);

 //3)  const titles = [];
 //    for (let i = 0; i < books.length; i++)
 //     {titles.push(books[i].title);}
 //    return titles;
};

// Do not edit below this line
module.exports = getTheTitles;
