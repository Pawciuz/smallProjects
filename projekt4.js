const formContent = document.querySelector('#converter')
const result = document.querySelector('.result')
const btnConvert = document.querySelector('.conv')
const btnReset = document.querySelector('.reset')
const btnChange = document.querySelector('.change')
let firstTemp = document.querySelector('.one');
let secondTemp = document.querySelector('.two');
const convert = () => {
    let temp = formContent.value;
    if(temp!==''){
        if(firstTemp.textContent==="°C"){
            let tempF = ((temp * 1.8)+32).toFixed(2);
            result.textContent = `${temp}°C to ${tempF} °F`
        }else if(firstTemp.textContent==="°F"){
            let tempC = ((temp - 32)/1.8).toFixed(2);
            result.textContent = `${temp}°F to ${tempC} °C`
        }
    }
}
const reset = () => {
    formContent.value = ``
    result.textContent = ``
}
const change = () => {
    if(firstTemp.textContent==="°C"){
        firstTemp.textContent="°F"
        secondTemp.textContent= "°C";
    }else if(firstTemp.textContent==="°F"){
        firstTemp.textContent="°C"
        secondTemp.textContent= "°F";
    }
}
btnConvert.addEventListener('click',convert)
btnReset.addEventListener('click',reset)
btnChange.addEventListener('click',change)