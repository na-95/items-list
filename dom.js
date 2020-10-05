// // let x = document.getElementById('header-title');
// // console.log(x);

// // let y = document.getElementById('header-title');

// // y.innerHTML = '<h2 id="dalla">PAEEEEENCHOD</h2>';

// // let x = document.getElementById('main-header');
// // x.style.borderBottom = '2px solid black';

// let items = document.querySelector('#items');

// let prev = items.previousElementSibling;

// prev.style = `color: magenta`;

// let myNewElement = document.createElement('div');

// let myNewElementText = document.createTextNode('Nouraiz');

// myNewElement.setAttribute('id', 'HEll');

// myNewElement.className = "Hello";

// myNewElement.title = "Fuck";

// myNewElement.appendChild(myNewElementText);

// console.log(myNewElement);
// // 

// let header = document.querySelector('.container');

// let h1 = header.firstElementChild;

// console.log(h1);

// header.insertBefore(myNewElement, h1);

// let button = document.querySelector('#button')

// let i = 5;
// let message = button.addEventListener('click', e => {
//     e.target.textContent = "Added";
//     e.target.style = `background-color: purple;
//                         transition-duration: 0.5s;`;
    
//     let lastItem = document.querySelector('li:nth-child(4)');
//     let newItem = document.createElement("li");
//     newItem.className = "list-group-item" 
    
//     newItem.textContent = `New Item ${i}`
//     document.getElementById('items').insertBefore(newItem, null)
//     i++;
// })

let textInput = document.querySelector('input[type="text"]')
let submit = document.querySelector('input[type="submit"]')
let allItems = document.getElementsByTagName('button');;
console.log(allItems);


for(let i = 0; i < allItems.length; i++){
    allItems[i].addEventListener('click', (e) => {
        e.target.parentNode.remove()
    })
}

submit.addEventListener('click', e => {
    e.preventDefault();
    let newItem = document.createElement('li');
    newItem.innerHTML = `${textInput.value}<button>remove</button>`;
    newItem.className = "list-group-item ";
    newItem.lastElementChild.style.float = "right";

    document.querySelector('#items').insertBefore(newItem, null);
    allItems = document.getElementsByTagName('button');
    
    
    
    for(let i = 0; i < allItems.length; i++){
        allItems[i].addEventListener('click', (e) => {
            e.target.parentNode.remove()
        })
    
    }
    
    console.log(allItems)
})






// let remove = document.querySelectorAll('button');

// console.log(remove)



