const regexValidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;

export function validateForm(user, email, password) {
  if (!user || !email || !password) {
    return console.log('É necessário preencher todos os campos');
  }

  if(!regexValidateEmail.text(email.value)) {
    return console.log('Preencha um email válido')
  }

};
