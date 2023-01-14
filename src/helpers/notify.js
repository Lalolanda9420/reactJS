import Swal from 'sweetalert2'

const Toast = Swal.mixin({
  toast: true,
  position: 'top-end',
  showConfirmButton: false,
  timer: 3000,
  timerProgressBar: true,
  didOpen: (toast) => {
    toast.addEventListener('mouseenter', Swal.stopTimer)
    toast.addEventListener('mouseleave', Swal.resumeTimer)
  }
})


export const notify = (key, message) => {
  console.log(key, message);
  switch (key) {
    case 'success':
      Toast.fire({
        icon: 'success',
        title: message
      })
      break;

    case 'error':
      console.warn('error')
      Toast.fire({
        icon: 'error',
        title: message
      })
      break;

    default:
      break;
  }
}