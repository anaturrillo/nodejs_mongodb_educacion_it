const isUserForm = document.location.pathname.includes('crear-usuario');
const domain = 'http://localhost:3000';

if(isUserForm) {
  document.getElementById('createUser').onsubmit = function (e) {
    e.preventDefault();

    const user = {
      name: document.getElementById('name').value,
      email: document.getElementById('email').value,
      age: document.getElementById('age').value
    };

    const req = new Request(`${domain}/api/user`, {
      method: 'POST',
      body: JSON.stringify(user),
      headers: {'Content-Type': 'application/json'}
    });

    fetch(req)
      .then(response => {
        if (response.status === 200) {
          console.log('ok');
          window.location.href = '/'
        } else {
          return response.clone().json()
        }
      })
      .then(response => {
        document.getElementById('errorMsg').innerHTML = response.errorMsg
      })
  }


}
