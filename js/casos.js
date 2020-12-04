let cargarJSON=()=>{
    fetch('../json/casos.json')
    .then(response => response.json())
    .then(data => {

    let contenedor = document.getElementById('cartas')
    /*let destacado = document.getElementById('destacado')
    let titulo=data[0].titulo
    let cont=data[0].contenido
    let fecha= data[0].fecha
    let usuario= data[0].usuario
    let card = document.createElement("div")
    
    
    /*card.setAttribute("id","vista")
    card.setAttribute("class","  col-lg-10   col-sm-10 ")
    card.style.width='20rem'
    card.innerHTML=
    
    
    "<img class=\"card-img img-fluid\""+ 
    "src=\"https://img.webnots.com/2017/04/Bootstrap-Card-Image.png\" alt=\"card image\">"+
    "<div class=\"card-body\">"+
    "<h4 class=\"card-title\">"+titulo+"</h4>"+
    "<div id=\"usuario\">"+usuario+"</div>"+
    "<p class=\"card-text\">"+cont+"</p>"+
    "<div id=\"fecha\" class=\" float-right\">"+fecha+"</div>"+
    
    "</div>"
    destacado.appendChild(card)*/
    //console.log(data)
      
      for (obj of data){
        
        card = document.createElement("div")

        
        nombre=obj.nombre
        raza=obj.raza
        sexo= obj.sexo
        tipo= obj.tipo

        card.setAttribute("id","card")
        card.setAttribute("class","card col-lg-3  col-md-5 col-sm-10")
        card.style.width='20rem'
        card.innerHTML=
        
        
        "<img class=\"card-img-top img-fluid\""+ 
        "src=\"https://img.webnots.com/2017/04/Bootstrap-Card-Image.png\" alt=\"card image\">"+
        "<div  name =\"Card\" class=\"card-body\">"+
        "<h4 class=\"card-title\">"+nombre+"</h4>"+
        "<div id=\"usuario\">"+tipo+"</div>"+
        "<p class=\"card-text\">"+raza+"</p>"+
        "<div id=\"fecha\" class=\" float-right\">"+sexo+"</div>"+

        //"<button id=\"vermas\" class=\"btn btn-primary\" onclick=\"manejarVista()\" >Ver más</button>"+
        "</div>"
        contenedor.appendChild(card)
      }    
      
    })
    //.then(()=>{manejarVista()})
    .catch( (error) => {
  
      console.log("Error ",error)
  
    })
  
  }

  document.addEventListener('DOMContentLoaded', function() {
    cargarJSON();
    //filtro();
    
  })

  let filtrar = () => {
    var ingreso, filtro, datos, data, i;
  
    ingreso = document.getElementById("searchPet");

    filtro = ingreso.value.toUpperCase();
    console.log(filtro);

    datos = document.getElementsByClassName("card col-lg-3  col-md-5 col-sm-10");

    console.log(datos.length);
  
    for (i = 0; i < datos.length; i++) {
      data = datos[i].getElementsByTagName("div")[1].innerHTML.toUpperCase();

      console.log(data);
  
      if (data) {
        if ( (data.indexOf(filtro) > -1) )  {
          datos[i].style.display = "";
  
        } else {
          datos[i].style.display = "none";
  
        }
      }
  
  
    }
  
    
  }
  