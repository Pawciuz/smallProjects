const pass = document.querySelector('#password');
const p = document.querySelector('.passinfo');
const letters = /[a-z]/i;
const numbers = /[0-9]/;
const special = /[!@#$%^&*()]/;
const minValue = 10;

const nopass = () => {
    if(pass.value.length === 0){
        p.textContent = "Nie podałeś hasła..."
        p.style.color = "rgb(172, 169, 169)"
    }
}
const regExp = () => {
    if(pass.value.length<minValue){
        p.textContent = "Masz słabe hasło"
        p.style.color = "tomato"
       
    }else{
        if(pass.value.match(letters) && pass.value.match(numbers)){
            p.textContent = "Masz dobre hasło"
            p.style.color = "yellow"
            if(pass.value.match(special)){
                p.textContent = "Masz bardzo dobre hasło"
                p.style.color = "green"
            }
        }
    }
    
}
pass.addEventListener('keyup',regExp)
pass.addEventListener('keyup',nopass)