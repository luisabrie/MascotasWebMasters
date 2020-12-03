let visitas = [];


let cargarJSON = () =>{
  fetch("json/visitas.json")

  .then( (resultado) => {
    return resultado.json()
  })
  .then( (data) => {
    
      for (let user of data.visitas){
        visitas.push(user.Enero + user.Febrero + user.Marzo + user.Abril + user.Mayo + user.Junio + user.Julio + user.Agosto+ user.Septiempre + user.Octubre + user.Noviembre+ user.Diciembre);
      
        //console.log(user.Enero);
    }

      




  })

  .catch( (error) => {
    console.log("Error ",error)

  })
  
}


//Las funciones se ejecutarán en cuanto el documento esté completamente cargado.
document.addEventListener('DOMContentLoaded', function() {
  cargarJSON();
})



//let hacergraf = () =>{

    var ctx = document.getElementById('chart').getContext('2d');
    var chart = new Chart(ctx, {
        type: 'bar',
        data: {
            labels: ['2021', '2022', '2023'],
            datasets: [{
                label: 'Visitas',
                backgroundColor: '#42a5f5',
                borderColor: 'white',
                data: visitas,
            }
        ]},
        options: {responsive: true}
    });


//}

