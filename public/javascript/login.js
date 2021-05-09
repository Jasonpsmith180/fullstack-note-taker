async function signupFormHandler(event) {
    event.preventDefault();

    // get signup info
    const username = document.querySelector('#username-signup').value.trim();
    // const email = document.querySelector('#email-signup').value.trim();
    const password = document.querySelector('#password-signup').value.trim();

    console.log(username, password)

    if (username && password) {
        const response = await fetch('/api/users', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
  }


async function loginFormHandler(event) {
  event.preventDefault();

  // get login info
  const email = document.querySelector("#email-login").value.trim();
  const password = document.querySelector("#password-login").value.trim();

async function loginFormHandler(event) {
    event.preventDefault();

    // get login info
    const username = document.querySelector('#username-login').value.trim();
    const password = document.querySelector('#password-login').value.trim();

    console.log(username, password);

    if (username && password) {
        const response = await fetch('/api/users/login', {
            method: 'post',
            body: JSON.stringify({
                username,
                password
            }),
            headers: { 'Content-Type': 'application/json' }
        });

        // check response status
        if (response.ok) {
            document.location.replace('/');
        } else {
            alert(response.statusText);
        }
    }
  }
}

document
  .querySelector(".signup-form")
  .addEventListener("submit", signupFormHandler);

document
  .querySelector(".login-form")
  .addEventListener("submit", loginFormHandler);
