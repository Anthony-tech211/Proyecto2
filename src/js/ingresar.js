const nombre=document.getElementById("nombre")
const contraseña=document.getElementById("contraseña")
const cargar =document.getElementById("boton2")

 

const listaUsuarios=JSON.parse(localStorage.getItem("listaUsuarios"))||[]

cargar.addEventListener("click",function () {
  for (let index = 0; index < listaUsuarios.length; index++) {
    if (listaUsuarios[index].nombre===nombre.value && listaUsuarios[index].contraseña===contraseña.value) {

    console.log("Puede entrar al sistema")


   }else{


    //cuando no es usuario

   }
  
 

    }

    
 window.location.href= "administracion.html"
})





    
 