import { toast } from 'react-toastify'

const notifyError = (message) => {
  toast.error(message, {
    position: 'top-center',
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: 'dark',
  })
}

export default notifyError
