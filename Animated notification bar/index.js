let toastbox= document.getElementById('torch-box');
let succesMessage = '<i class="fa-solid fa-circle-check"></i> successfully submitted';
let errorMessage = '<i class="fa-solid fa-circle-xmark"></i> error occured';
let invalidMessage = '<i class="fa-solid fa-circle-exclamation"></i> Invalid input';
function showtoast(msg){
    let toast = document.createElement('div');
    toast.classList.add('toast');
    toast.innerHTML=msg;
    toastbox.appendChild(toast);
    if(msg.includes('error')){
        toast.classList.add('error');
    }if(msg.includes('Invalid')){
        toast.classList.add('invalid');
    }
    setTimeout(()=>{
        toast.remove();
    },6000);
}