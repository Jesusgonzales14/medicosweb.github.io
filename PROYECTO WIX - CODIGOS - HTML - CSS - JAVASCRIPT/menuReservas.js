const btns = document.querySelectorAll(".btns");

btns.forEach(btn => {
  btn.addEventListener("click", () => {
    const currentActive = document.querySelector(".active");
    if (currentActive) {
      currentActive.classList.remove("active");
    }
    btn.classList.add("active");
  });

});

//INPUT CHAT BOTS

const blur_input = document.querySelector('.input_chat') ; 
const icono_cambiar = document.getElementById('click')

function cambiar_iconos(){
  let dato=blur_input.value;
  if(dato.trim() != 0){
      icono_cambiar.classList.remove('fa-paperclip')
      icono_cambiar.classList.add('fa-paper-plane')
  } 
  else{
    icono_cambiar.classList.remove('fa-paper-plane')
      icono_cambiar.classList.add('fa-paperclip')
  }
}


// blur_input.onkeyup = ()=>{
//   let dato=blur_input.value;
//   if(dato.trim() != 0){
//       icono_cambiar.classList.remove('fa-solid fa-paperclip')
//       icono_cambiar.classList.add('fa-paper-plane')
//   } 
//   else{
//       icono_cambiar.classList.add('fa-solid fa-paperclip')
//   }
// }

//INICIAR VENTANA EMERGENTE DE INICIAR SESION

const  button_iniciar_sesion = document.querySelector('.button_iniciar');
const  ventana_iniciar_sesion = document.querySelector('.ventana_emergente')
const  button_cerrar_sesion = document.querySelector('.cerrar_sesion')

button_iniciar_sesion.addEventListener('click' , ()=>{
    ventana_iniciar_sesion.classList.add('active_ventana_emergente')
})

button_cerrar_sesion.addEventListener('click' , ()=>{
  ventana_iniciar_sesion.classList.remove('active_ventana_emergente')
  myfuncion_ventanas("Registrarsesion");
  
})

//ABRIR Y CERRAR RESITRAR Y INICIAR SESION CON EL BOTON A 

function myfuncion_ventanas(c){
  const ventanas_sesion_activos = document.querySelectorAll('.ventana_iniciar_sesion') 
  ventanas_sesion_activos.forEach(vtn_ventana => {
    vtn_ventana.style.display= c === "all" || vtn_ventana.classList.contains(c)? "block" : "none" ; 
    vtn_ventana.style.display= c === "all" || vtn_ventana.classList.contains(c)? "flex" : "none" ; 
  })

}
//LLENAR O REGISTRAS LOS DATOS CORRESPONDIENTE


function Iniciar_datos_email(i){

  const Datos_Llenar = document.querySelectorAll('.botones_links') 

  Datos_Llenar.forEach(datoslle=>{
    datoslle.style.visibility = i === "all" || datoslle.classList.contains(i)? "visible" : "hidden" ; 
    datoslle.style.display= i === "all" || datoslle.classList.contains(i)? "flex" : "none" ; 
  })


}
//ABRIR CATC BOTS
function Abrir_chat_bots(){
  const interfaz_chat = document.querySelector('.Interfaz_chat_bots')

  interfaz_chat.style.display="all";
  interfaz_chat.style.display="flex";

}
function Cerrar_chat_bots(){
  const interfaz_chat = document.querySelector('.Interfaz_chat_bots')

  interfaz_chat.style.display="none";
  

}


