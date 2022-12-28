//Scroll UP
const btnUp = {
    el: document.querySelector('.btn-up'),
    show() {
      // удалим у кнопки класс btn-up_hide
      this.el.classList.remove('btn-up_hide');
    },
    hide() {
      // добавим к кнопке класс btn-up_hide
      this.el.classList.add('btn-up_hide');
    },
    addEventListener() {
      // при прокрутке содержимого страницы
      window.addEventListener('scroll', () => {
        // определяем величину прокрутки
        const scrollY = window.scrollY || document.documentElement.scrollTop;
        // если страница прокручена больше чем на 400px, то делаем кнопку видимой, иначе скрываем
        scrollY > 400 ? this.show() : this.hide();
      });
      // при нажатии на кнопку .btn-up
      document.querySelector('.btn-up').onclick = () => {
        // переместим в начало страницы
        window.scrollTo({
          top: 0,
          left: 0,
          behavior: 'smooth'
        });
      }
    }
  }
  
  btnUp.addEventListener();

//Phone mask 
  const $input = document.querySelector('[data-js="input"]')
$input.addEventListener('input', handleInput, false)

function handleInput (e) {
  e.target.value = phoneMask(e.target.value)
}

function phoneMask (phone) {
  return phone.replace(/\D/g, '')
    .replace(/^(\d)/, '($1')
    .replace(/^(\(\d{2})(\d)/, '$1) $2')
    .replace(/(\d{4})(\d{1,5})/, '$1-$2')
    .replace(/(-\d{5})\d+?$/, '$1');
}




//Data v console
var form = document.getElementById('form');

form.addEventListener('submit', function(event){
    event.preventDefault()

    var name = document.getElementById('name').value
    console.log(name)
    var surname = document.getElementById('surname').value
    console.log(surname)
    var email = document.getElementById('email').value
    console.log(email)
    var phone = document.getElementById('phone').value
    console.log(phone)
    var message = document.getElementById('message').value
    console.log(message)
   
});

// Validation
(() => {
    'use strict'
  
    // Fetch all the forms we want to apply custom Bootstrap validation styles to
    const forms = document.querySelectorAll('.needs-validation')
  
    // Loop over them and prevent submission
    Array.from(forms).forEach(form => {
      form.addEventListener('submit', event => {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }
  
        form.classList.add('was-validated')
      }, false)
    })
  })();
/*
  $('#add').on('click', function () {
    $(this).button('complete');
});
$('#reset').on('click', function () {
    $('#download').button('reset');
});
*/



//Кнопка add/remove

var addedItems =[];

function addRemoveCartItem(btn) 
{
    const counterElem = document.getElementById('cart-count');
    
    if(btn.innerHTML=="Add"){
      btn.innerHTML = "Remove"
      addedItems.push(btn.id);
      counterElem.innerHTML = addedItems.length;     
    }
    else{
      btn.innerHTML = "Add"
      const index = addedItems.indexOf(btn.id);
      addedItems.splice(index, 1);
      counterElem.innerHTML = addedItems.length;
    }
}

var exampleModal = document.getElementById('exampleModal')
exampleModal.addEventListener('show.bs.modal', function (event) 
{
  const counterElem = document.getElementById('modal-cart-count');
  counterElem.innerHTML = addedItems.length <= 0 ? "" : addedItems.length;
})
