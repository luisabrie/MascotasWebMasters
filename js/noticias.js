let cargarJSON=()=>{
    fetch('../json/noticias.json')
    .then(response => response.json())
    .then(data => {

    let contenedor = document.getElementById('cards')
    let destacado = document.getElementById('destacado')
    let titulo=data[0].titulo
    let cont=data[0].contenido
    let fecha= data[0].fecha
    let usuario= data[0].usuario
    let card = document.createElement("div")
    
    
    card.setAttribute("id","vista")
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
    destacado.appendChild(card)
      
      for (obj of data){
        
        card = document.createElement("div")
  
        titulo=obj.titulo
        cont=obj.contenido
        fecha= obj.fecha
        usuario= obj.usuario

        card.setAttribute("id","card")
        card.setAttribute("class"," card col-lg-3  col-md-5 col-sm-10  ")
        card.style.width='20rem'
        card.innerHTML=
   
        "<img class=\"card-img-top img-fluid\""+ 
        "src=\"https://img.webnots.com/2017/04/Bootstrap-Card-Image.png\" alt=\"card image\">"+
        "<div  name =\"Card\" class=\"card-body\">"+
        "<h4 class=\"card-title\">"+titulo+"</h4>"+
        "<div id=\"usuario\">"+usuario+"</div>"+
        "<p class=\"card-text\">"+cont+"</p>"+
        "<div id=\"fecha\" class=\" float-right \">"+fecha+"</div>"+
        "<a  id=\"vermas\" href=\"#destacado\" class=\"btn btn-info btn-md\" onclick=\"manejarVista()\">Ver más</a>"+

        //"<button id=\"vermas\" class=\"btn btn-primary\" onclick=\"manejarVista()\" >Ver más</button>"+
        "</div>"
        contenedor.appendChild(card)
      }    
      
    })
    .then((str)=>{filtro();})
    .catch( (error) => {
  
      console.log("Error ",error)
  
    })
  
  }

let manejarVista=()=>{

  let news= document.getElementsByClassName("card")
  let vista = document.getElementById("destacado")
  let contenido= vista.childNodes[1].childNodes[1].childNodes

  //console.log(contenido)
  for (var i = 0; i < news.length; i++){
    news[i].addEventListener('click', ev => {
    
      let cont=ev.currentTarget.childNodes[1].childNodes
      contenido[0].textContent=cont[0].textContent
      contenido[1].textContent=cont[1].textContent
      contenido[2].textContent=cont[2].textContent
      contenido[3].textContent=cont[3].textContent
                    
  });

  }

}  



let filtro =()=>{
  
  let input = document.getElementById("myInput")
  //noticias= document.getElementsByClassName("card");
  //arrCard=Array.from(noticias)
  //console.log(noticias[0].childNodes[1].childNodes)

input.onkeyup=function(){
      var input, filter, noticias, contenidos;
      input = document.getElementById("myInput");
      filter = input.value.toUpperCase();
      noticias= document.getElementsByClassName("card");
      cont=noticias
     console.log(noticias[0].childNodes[1].childNodes)
      let i=0
      for(let valor of noticias){
        let card=noticias[i].childNodes[1].childNodes
        let tit=card[0].textContent.toUpperCase().trim().includes(filter)
        console.log(filter)
        
        if(tit){
          valor.style.display=""

        }else{
          valor.style.display="none"
        }
        //console.log(user)

        i++
      }
    }
}
 

  
  document.addEventListener('DOMContentLoaded', function() {
    cargarJSON();
    
    
  })
  
