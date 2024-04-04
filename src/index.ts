const from = document.querySelector('.user-form') as HTMLFormElement;

const username = document.querySelector('#name') as HTMLInputElement;

const email = document.querySelector('#email') as HTMLInputElement;



from.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const data = {
    username: username.value,
    email: email.value
  };
  console.log(data);
});