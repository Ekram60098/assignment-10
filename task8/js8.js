let items = ['e', 'k', 'r', 1, 1, 'e', 1, 3];
let item = null;
let largest = 1;
for (let i = 0; i < items.length; i++){
  let count = 0;

  for (let j = i;j <items.length; j++){
    if (items[i] === items[j]) {
      count++;
    }
  }
  if (count > largest) {
    largest = count;
    item = items[i];
  }}
counsel.log(item,largest)