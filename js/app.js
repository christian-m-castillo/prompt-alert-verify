document.addEventListener('DOMContentLoaded', function() {
  const body = document.querySelector('body');
  const h1 = document.querySelector('h1');

  function verify() {
  const user = prompt('Enter Username');
  if (user === 'Admin') {
    const password = prompt('Enter password');
    if (password === 'TheMaster') {
      alert('Welcome!');
      h1.innerText = `Success!`;
      h1.style.color = '#0000FF';
      body.style.display = 'block';
      console.log('block executed');
    } else if (password === '') {
      alert('Canceled');
    } else {
      alert('Wrong Password');
    }
  } else if (user === '') {
    alert('Canceled');
  } else {
    alert('I don\'nt know you');
  }
  }

  verify();
})