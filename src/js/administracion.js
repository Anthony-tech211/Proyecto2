const actividades =document.getElementById("actividad")
const fecha =document.getElementById("fecha")
const guardar =document.getElementById("guardar")
const select =document.getElementById("select")
const tareas=document.getElementById("tarea" )
const evento= document.getElementById("evento")

 
let listaTarea =[]; 
let listaEvento= [];


guardar.addEventListener("click",function() {
    

    if (select.value==="tareas") {
     
      
     //tareas

        const etiquet1 =document.createElement("p")
        const divHijo = document.createElement("div")
        const botonelim=document.createElement("button")
    
        const input1=document.createElement("input")
        const botonedit=document.createElement("button")
        const botonguardar=document.createElement("button")
        botonelim.innerHTML="eliminar"
        botonedit.innerHTML="editar"
        botonguardar.innerHTML="guardar"
    
        etiquet1.innerHTML=actividades.value + " " + fecha.value

        /// AQUI DEBO DE CREAR EL LOCAL STORAGE ES UN SETITEM

        listaTarea.push(etiquet1.textContent)
        localStorage.setItem("listaTarea",JSON.stringify(listaTarea))
    
        
        divHijo.appendChild(etiquet1) 
        divHijo.appendChild(botonelim)
        divHijo.appendChild(input1)
        divHijo.appendChild(botonedit)
        divHijo.appendChild(botonguardar)
    
        tareas.appendChild(divHijo) 

        
      botonelim.addEventListener("click",function() {

       /// AQUI DEBE DE CREAR EL LOCAL STORAGE ES UN SETITEM PARA MANDAR ELIMINAR EL DATO



     
        listaTarea = JSON.parse(localStorage.getItem("listaTarea",(listaTarea)))||[]

   

       let listaSinElDato = listaTarea.filter(tarea=> tarea != etiquet1.textContent)
      


       localStorage.setItem("listaTarea",JSON.stringify(listaSinElDato))

       console.log(listaSinElDato);
       divHijo.remove()
      
    
      

       })
 
     botonedit.addEventListener("click",function() {

      divHijo.appendChild(botonguardar)
      divHijo.appendChild(input1)
      
     })
     botonguardar.addEventListener("click",function() {  

     



  /// AQUI DEBE DE CREAR EL LOCAL STORAGE ES UN GETITEM Y UN SETITEM PARA ACTUALIZAR LA EDICION

    



      etiquet1.innerText=input1.value
        
     })
      

    }else{

      //eventos

        const etiquet2 =document.createElement("p")
        const divHijo2 = document.createElement("div")
        const botonelim1=document.createElement("button")

        const input2=document.createElement("input")
        const botonedit1=document.createElement("button")
        const botonguardar1=document.createElement("button")

        botonelim1.innerHTML="eliminar"
        botonedit1.innerHTML="editar"
        botonguardar1.innerHTML="guardar"

       etiquet2.innerHTML=actividades.value + " " + fecha.value
    

       divHijo2.appendChild(etiquet2) 
       divHijo2.appendChild(botonelim1)
       divHijo2.appendChild(input2)
       divHijo2.appendChild(botonedit1)
       divHijo2.appendChild(botonguardar1)

       evento.appendChild(divHijo2) 
 
       botonelim1.addEventListener("click",function() {

       divHijo2.remove()
      })
     
      botonedit1.addEventListener("click",function() {
      
      divHijo2.appendChild(botonguardar1)
      divHijo2.appendChild(input2)

      })

      botonguardar1.addEventListener("click",function() {

      etiquet2.innerText=input2.value

        
      })

    }

})

cargarTareas()

function cargarTareas() {
  

  let tarea = document.getElementById("tarea")
 let listaTareaCargada = JSON.parse(localStorage.getItem("listaTarea",(listaTarea)))||[]

    for (let index = 0; index < listaTareaCargada.length; index++) {


      let p = document.createElement("p")

      let div = document.createElement("div")

      p.innerHTML=listaTareaCargada[index]

      div.appendChild(p)
      tarea.appendChild(div)
      
    }


}






