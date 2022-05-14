function toast({
  title = '',
  message = '',
  type = 'info',
  duration = 3000,
  fadeOutTime = 1000,
}) {
  const main = document.getElementById('toast');
  if (main) {
    const toast = document.createElement('div');

    // Auto remove toast
    const autoRemoveId = setTimeout(() => {
      main.removeChild(toast);
    }, duration + fadeOutTime);

    // Remove toast on click
    toast.onclick = (e) => {
      if(e.target.closest('.toast__close')){
        main.removeChild(toast);
        clearTimeout(autoRemoveId);
      }
    }


    const icons = {
      success: 'fa fa-check-circle',
      info: 'fa fa-info-circle',
      warning: 'fa fa-exclamation-triangle',
      error: 'fa fa-exclamation-circle',
    }
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    const timeFadeOut = (fadeOutTime / 1000).toFixed(2);

    toast.classList.add('toast', `toast--${type}`);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear ${timeFadeOut}s ${delay}s forwards`;

    toast.innerHTML = `
      <div class="toast__icon">
        <i class="${icon}"></i>
      </div>

      <div class="toast__body">
        <div class="toast__title">${title}</div>
        <div class="toast__message">${message}</div>
      </div>

      <div class="toast__close">
        <i class="fa fa-times"></i>
      </div>
    `;

    main.appendChild(toast);
  }

}

toast({
  title: 'Success',
  message: 'This is a success message',
  type: 'success',
  duration: 3000,
});

function showSuccessToast(){
  toast({
    title: 'Success',
    message: 'This is a success message',
    type: 'success',
    duration: 3000,
  });
}

function showErrorToast(){
  toast({
    title: 'Error',
    message: 'This is an error message',
    type: 'error',
    duration: 3000,
  });
}

function showInfoToast(){
  toast({
    title: 'Info',
    message: 'This is an info message',
    type: 'info',
    duration: 3000,
  })
}

function showWarningToast(){
  toast({
    title: 'Warning',
    message: 'This is a warning message',
    type: 'warning',
    duration: 3000,
  })
}