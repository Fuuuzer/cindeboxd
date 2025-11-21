const regexValidateEmail = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
const regexValidatePassword = /^(?=.*[A-Z])(?=.*[!#@$%&])(?=.*[0-9])(?=.*[a-z]).{6,15}$/;

export function validateForm({user, email, password}) {
  if (!user || !email || !password) {
    return console.error('É necessário preencher todos os campos');
  }

  if(!regexValidateEmail.test(email)) {
    return console.error('É nce');
  }

  if(!regexValidatePassword.test(password)){
    return console.error(password)
  }

  return true
};
