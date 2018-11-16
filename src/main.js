const $list = document.getElementById('list');

const list = point => {
  const $element = document.createElement('element');
  $element.className = 'item';
  $element.innerHTML = `
    <p>ID : ${point.id}</p>
    <p>Title : ${point.title}</p>
    <p>Body : ${point.body}</p>     
    <hr/>
  `;
  $list.appendChild($element);
};

const arr = () => {
  const arrayURL = [];
  for (let i = 1; i <= 10; i++) {
    arrayURL.push('http://jsonplaceholder.typicode.com/posts/' + i);
  }

  return arrayURL;
};

async function chain (arr) {
  for (let i = 0; i < arr.length; i++) {
    const response = await fetch(arr[i]);
    const data = await response.json();
    list(data);
  }
}

chain(arr());
