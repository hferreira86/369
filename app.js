const main = document.querySelector('main');

const btnSubmit = document.querySelector('.submit')

const btnName = document.querySelector('.name')





btnSubmit.addEventListener('click', (event) => {  
    event.preventDefault() 
    let nameSubject = btnName.value;  
    localStorage.setItem('name', nameSubject) ;  
    
    main.innerHTML = localStorage.getItem("name");

}, true)


