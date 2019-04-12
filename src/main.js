function chain () {
  fetch('http://jsonplaceholder.typicode.com/posts/')
    .then(response => response.json())
    .then(data => {
      for (let i = 0; i <= 9; i++) {
        const $element = document.createElement('element');
        $element.className = 'item';
        $element.innerHTML = `
            <p>ID : ${data[i].id}</p>
            <p>Title : ${data[i].title}</p>
            <p>Body : ${data[i].body}</p>     
            <hr/>
          `;
        const $list = document.getElementById('list');
        $list.appendChild($element);
      }
    });
}

chain();
