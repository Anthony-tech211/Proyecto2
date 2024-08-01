 const nombre= document.getElementById("nombre")
 const apellido= document.getElementById("apellido")
 const correo =document.getElementById("correo")
 const contraseña=document.getElementById("contraseña")
 const registarse=document.getElementById("boton")

let listaUsuarios = JSON.parse(localStorage.getItem("listaUsuarios"))||[]

registarse.addEventListener("click",function () {

   let usuario={
     nombre:nombre.value,
     apellido:apellido.value,
     correo:correo.value,
     contraseña:contraseña.value,
    
    }


 listaUsuarios.push(usuario)
 localStorage.setItem("listaUsuarios",JSON.stringify(listaUsuarios))

 console.log(listaUsuarios)




 window.location.href="ingresar.html"
    
})


