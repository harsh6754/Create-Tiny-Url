let SaveBtn = document.querySelector("#save");
let api = document.querySelector("#myAPI");
let toastError = document.querySelector('.toast-warning')
let toastSuccess = document.querySelector('.toast-success')


SaveBtn.addEventListener('click', () => {

    if (api.value) {
        toastSuccess.classList.remove('d-hide');

        chrome.storage.local.set({'API':api.value},function(){
            console.log('Value is set to' + api.value);
        });
         
    } else {
        toastError.classList.remove('d-hide');
        setTimeout(() => {
            toastError.classList.add('d-hide');
        }, 1000)
    }

})
