const phoneError = document.querySelector(".phone-error");
const emailError = document.querySelector(".email-error");
const nameError = document.querySelector(".name-error");
const messageEerror = document.querySelector(".message-error");

const validateName = () => {
  const fullName = document.getElementById("name").value;
  if (fullName.length == 0) {
    nameError.textContent = "Name is required";
    return false;
  }
  if (!fullName.match(/^[A-Za-z]+\s+[A-Za-z]+\s+[A-Za-z]+$/)) {
    nameError.textContent = "Write full name";
    return false;
  }
  nameError.innerHTML = '<i class="fas fa-check-circle"></i>';

  return true;
};

const validatePhoneNumber = () => {
  const phoneNumber = document.getElementById("phone").value;
  if (phoneNumber.length == 0) {
    phoneError.textContent = "Phone number is required";
    return false;
  }
  if (phoneNumber.length !== 10) {
    phoneError.textContent = "phone must be at least 10 digits";
    return false;
  }
  if (!phoneNumber.match(/^[0-9]*$/)) {
    phoneError.textContent = "Enter valid phone number";
    return false;
  }
  phoneError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
};

const validateEmail = () => {
  const email = document.getElementById("email").value;
  if (email.length == 0) {
    emailError.textContent = "email is required";
    return false;
  }
  if (!email.match(/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/i)) {
    emailError.textContent = "Enter valid email";
    return false;
  }
  emailError.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
};

const messageValidation = () => {
  const message = document.getElementById("message").value;
  let left = 30 - message.length;

  if (left > 0) {
    messageEerror.textContent = `${left} more characters required`;
    return false;
  }
  messageEerror.innerHTML = '<i class="fas fa-check-circle"></i>';
  return true;
};
const formValidation = () => {
  const submitError = document.querySelector(".submit-error");
  if (
    !validateName() ||
    !validatePhoneNumber() ||
    !validateEmail() ||
    !messageValidation()
  ) {
    submitError.textContent = "Please fix form errors to submit";
    setTimeout(() => {
      submitError.style.display = "none";
    }, 3000);
    return false;
  }
};
