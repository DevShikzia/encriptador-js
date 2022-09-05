


/* ==== ANIMACION LOGO ==== */

const logo = document.getElementById("logo");


// Se envia el evento cuando clickeo

logo.addEventListener("click", (e) => {
  e.preventDefault;
  
  // REMUEVO LA CLASE
  logo.classList.remove("logo_animation");
  
  // Sin esto no funciona
  void logo.offsetWidth;

// Agrego nuevamente la clase para que se ejecute la animacion
  logo.classList.add("logo_animation");
}, false);




/* ==== FUNCIONES ENCRIPTACION / DESENCRIPTACION ==== */


let textInput = document.getElementById("input-text");
let textResult = document.getElementById("textResult");

const encriptarBtm = document.getElementById("encriptarBtm");
const desencriptarBtm = document.getElementById("desencriptarBtm");
const deleteText = document.getElementById("delete-text");
const copyText = document.getElementById("copyText");



// validacion textInput

const validacion = /[a-zA-Z]+$/



// encriptar

const encriptar = (string) => {  

  if (validacion.exec(string)) {
    
 
 const texto = string.toLowerCase().replace(/[a]/g,'ai').replace(/[e]/g,'enter').replace(/[i]/g,'imes').replace(/[o]/g,'ober').replace(/[u]/g,'ufat')
  
 return texto
}
textInput.value = ''
  return 'Ingresa un texto valido'

}

// boton encriptar



encriptarBtm.addEventListener("click", (e) => { 
  

    if (!textInput.value) {    
          return textResult.value = '' 
    }
    
    let textEncriptado = encriptar(textInput.value)
    document.getElementById("img").style.display = "none"
    return textResult.value = textEncriptado 

});



// desencriptar

const desencriptar = (string = 'string') => {


  const texto = string.toLowerCase().replace(/ufat/g,'u').replace(/ober/g,'o').replace( /imes/g,'i').replace(/enter/g,'e').replace(/ai/g,'a')
  
  return texto

}

// boton desencriptar

desencriptarBtm.addEventListener('click', (e) => {
   console.log(textInput.value)
 
  if (!textInput.value) {
      return textResult.value = ''      
}

let textodesencriptado = desencriptar(textInput.value)
document.getElementById("img").style.display = "none"
return textResult.value = textodesencriptado 

})


// boton borrar texto

deleteText.addEventListener('click', (e) => textInput.value = '')

// boton copiar texto

copyText.addEventListener("click", (e) => {  

  if(textResult.value) { 
    textResult.select();
    document.execCommand('copy');
  }   
 
});

/* ====  DARK MODE  ==== */


const bDark = document.getElementById("bdark")
const body = document.getElementById("body")

load()


bDark.addEventListener('click', (e) =>{
  
  bDark.classList.toggle('off')
  body.classList.toggle('darkmode');
  store(body.classList.contains('darkmode'))
  
});

function load(){
  
  const darkmode = localStorage.getItem('darkmode');

    if(!darkmode ){
      store('false')
    } else if (darkmode == 'true'){
      body.classList.add('darkmode')
      bDark.classList.add('off')
    } 

  }


  function store(value){
    localStorage.setItem('darkmode',value)
  }