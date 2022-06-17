const cardRating = document.getElementById('card-rating');
const cardSuccess = document.getElementById('card-success');
const valueSelected = document.getElementById('value-selected');
const buttonsRating = document.querySelectorAll('.btn-rating');
const buttonSend = document.getElementById('send');
let ratingValue = null;

const toastOptions = {
  text: 'Select a value',
  duration: 2000,
  close: true,
  style: {
    background: '#f27474',
  },
};

function handleSubmit() {
  if (!ratingValue) {
    Toastify(toastOptions).showToast();
    return;
  }

  const hiddenClassName = 'd-none';
  cardRating.classList.add(hiddenClassName);
  cardSuccess.classList.remove(hiddenClassName);
  valueSelected.textContent = ratingValue;
}

function handleSelect(event) {
  const element = event.target;
  const activeClassName = 'active';

  if (element.classList.contains(activeClassName)) {
    element.classList.remove(activeClassName);
    ratingValue = null;
  } else {
    buttonsRating.forEach(button => button.classList.remove(activeClassName));
    element.classList.add(activeClassName);
    ratingValue = Number(element.textContent);
  }
}

window.addEventListener('load', () => {
  buttonsRating.forEach(button => {
    button.addEventListener('click', handleSelect);
  });

  buttonSend.addEventListener('click', handleSubmit);
});
