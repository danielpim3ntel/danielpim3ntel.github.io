// Funcion para inicializar EmailJS
(() => {
  emailjs.init('Zp0r_cjKVH48_Lb2I')
})()

// Form
const form = document.getElementById('contact-form')
// Token del captcha a enviar
let reCaptchaToken = ''
// Variable para mostrar los mensajes
const toastBox = document.getElementById('toast-box')

const successMsg = "<i class='bx bx-check'></i>Correo enviado correctamente!"
const errorMsg = "<i class='bx bx-x'></i>Error al enviar correo!"
// let missingCaptcha = `<i class='bx bx-x'></i>Por favor complete el captcha!`;

// Se obtiene el token del captcha
// eslint-disable-next-line no-unused-vars
function getCaptcha (token) {
  reCaptchaToken = token
}

// Funcion para enviar correo
const sendMail = () => {
  //console.log('Enviando msg!')
  /*
  if (reCaptchaToken == "") {
    console.log("MISSING CAPTCHA...");
    showToast(missingCaptcha);
    return;
  } */

  // Se cargan los parametros a enviar por correo electronico
  const templateParams = {
    subject: document.getElementById('subject').value,
    sender: document.getElementById('sender').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
    'g-recaptcha-response': reCaptchaToken
  }
  // console.log(templateParams);

  emailjs.send('service_41ro1p5', 'template_m7ge1e5', templateParams).then(
    (response) => {
      //console.log('SUCCESS!', response.status)
      showToast(successMsg)
      form.reset()
      grecaptcha.reset()
    },
    (error) => {
      //console.log('FAILED...', error)
      showToast(errorMsg)
      grecaptcha.reset()
    }
  )
}

const showToast = (msg) => {
  const toast = document.createElement('div')
  toast.classList.add('toast')
  toast.innerHTML = msg
  toastBox.appendChild(toast)

  if (msg === successMsg) {
    toast.classList.add('check')
  } else {
    toast.classList.add('error')
  }

  setTimeout(() => {
    toast.remove()
  }, 3000)
}

window.onload = () => {
  form.addEventListener('submit', function (event) {
    //console.log('Submitted@!')
    event.preventDefault()
    sendMail()
  })

  const $recaptcha = document.querySelector('#g-recaptcha-response')
  if ($recaptcha) {
    $recaptcha.setAttribute('required', 'required')
  }
}
