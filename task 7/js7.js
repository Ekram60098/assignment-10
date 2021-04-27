let arr = ['e', 'k', 'r', 1, 1, 1, 3];
const unique = [];
arr.forEach(item => {
      if (arr.indexOf(item) === arr.lastIndexOf(item)) {
        uniqueItems.push(item);}
      });
alert(unique)