
var fruits;


fruits = ['lemon', 'pineapple', 'kiwi'];


document.getElementById('button').addEventListener('click', (event) => {
  let element_list = document.getElementById('list');
  let new_li = document.createElement('li');
  new_li.innerText = fruits.shift();

  element_list.appendChild(new_li);

});