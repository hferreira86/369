const main = document.querySelector('main');
const nameHere = document.querySelector('nameHere');

const btnSubmit = document.querySelector('.submit')

const btnName = document.querySelector('.name')





btnSubmit.addEventListener('click', () => {  
    
    let nameSubject = btnName.value;  
    localStorage.setItem('name', nameSubject) ;  
    
    
   
    
})


