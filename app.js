const main = document.querySelector('main');

const btnSubmit = document.querySelector('.submit')

const btnName = document.querySelector('.name')





btnSubmit.addEventListener('click', (event) => {
    event.preventDefault();
  window.history.back();
    let nameSubject = btnName.value;   
    main.innerHTML = `<div>
    <h1>
     ${nameSubject}
    </h1>   
</div>`

}, true)