function lineThrough(){
    const lineThrough1 = document.querySelector('#arguements li');
    lineThrough1.style.textDecoration = 'line-through';
}

lineThrough();

function setImage(str1, str2){
    let image1 = document.querySelector(str1);
    image1.src = str2;
    image1.height = '300';
}

setImage('#image-1','https://media.istockphoto.com/photos/random-multicolored-spheres-computer-generated-abstract-form-of-large-picture-id1295274245?b=1&k=20&m=1295274245&s=170667a&w=0&h=4t-XT7aI_o42rGO207GPGAt9fayT6D-2kw9INeMYOgo=');
setImage('#image-2','https://www.thedesignwork.com/wp-content/uploads/2011/10/Random-Pictures-of-Conceptual-and-Creative-Ideas-02.jpg');
setImage('#image-3','https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS3cgXSlOuZfEg2N9oN0oaDrbaJsDhaYDPJ0g&usqp=CAU');

function remover(){
    let deleteMe = document.querySelector('li');

    deleteMe.remove();
    deleteMe = document.querySelector('li');

}

remover();
remover();

function changeSize(id, size){
    let element = document.querySelector(id);
    element.style.fontsize = size;
}

changeSize('#heading', '50px');

function appendDOM(domElement){
    let listItem = document.querySelector('ul');
    listItem.appendChild(domElement);
}

let newElement = domElement.createElement('img');
newElement.src = 'https://f4.bcbits.com/img/a1660087285_16.jpg'
newElement.style.height = '300px';


appendDOM(newElement);

function makeInvisible(element){
    element.className = 'invisible';
}

let heading = document.querySelector('h1');

makeInvisible(heading);

function createListItem(text){
    let listItem = document.createElement('li');
    listItem.innerText = text;
    return listItem;
}

let newListItem = createListItem('Hello world!');
appendDOM(newListItem);


function newHeaderSizeAndText(size, text){
    let newHeader = document.createElement(`h${size}`);
    newHeader.innerText = text;
    return newHeader;
}

let newHeader = newHeaderSizeAndText('1','Hello Universe!');
appendDOM(newHeader);