export const validateEmail = (email) => {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return re.test(String(email).toLowerCase());
};

export const validatePassword = (password) => {
  // Password must be at least 6 characters long
  return password.length >= 6;
};

export const validateName = (name) => {
  // Name must not be empty
  return name.trim().length > 0;
};
