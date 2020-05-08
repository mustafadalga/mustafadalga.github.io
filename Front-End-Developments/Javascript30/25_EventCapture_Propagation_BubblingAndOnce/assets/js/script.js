const divs = document.querySelectorAll('div');
const button = document.querySelector('button')

function logText(e) {
    console.log(this.classList.value)
        //e.stopPropagation(); //Tek tetikleme - sadece ilk'ini çalıştırır.(stop bubbling!)    
}

divs.forEach(div => div.addEventListener('click', logText, {
    capture: false,
    once: true
}))




//capture default değer :false
//capture:true ->tetiklemeyi en yukarıdan en aşağıya doğru çalıştırır.
//capture:false ->tetiklemeyi en aşağıdan yukarıya doğru çalıştırır.
//once:true  ->event'i sadece bir kere çalıştırır.


button.addEventListener('click', () => {
    console.log('click')
}, { once: true })