const xhr = new XMLHttpRequest();
console.log('xhr0',xhr);

xhr.open('GET','./api/sample.txt');

xhr.onreadystatechange = function() {
  console.log('xhr',xhr);
  if(xhr.readyState === 4 && xhr.status === 200){
    //console.log('done');
    const text = document.createElement('p');
    text.textContent = xhr.responseText;
    document.body.appendChild(text);
  }else{
    console.log({
      status : xhr.status,
      text: xhr.statusText,
    });
  }
};

xhr.send();
console.log('hello');