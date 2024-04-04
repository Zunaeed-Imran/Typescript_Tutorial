const from = document.querySelector('.user-form') as HTMLFormElement;

const username = document.querySelector('#name') as HTMLInputElement;


from.addEventListener("submit", (event: Event) => {
  event.preventDefault();
  const data = {
    username: username.value,
  };
  console.log(data);
});