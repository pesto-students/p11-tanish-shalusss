const isStrongPassword = (password) => {
  return password.length >= 8 &&
    !password.includes("password") &&
    (/[A-Z]/.test(password)) 
    ? true
    : false;
};

console.log(isStrongPassword("Qwerty"));
console.log(isStrongPassword("passwordQwerty"));
console.log(isStrongPassword("qwerty123"));
console.log(isStrongPassword("Qwerty123"));
