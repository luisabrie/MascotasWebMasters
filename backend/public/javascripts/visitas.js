
//Las funciones se ejecutarán en cuanto el documento esté completamente cargado.
document.addEventListener('DOMContentLoaded', function() {
  cargarJSON();
  cargarJSONPlan();
})

let visitas = [];
let planes = [];


let cargarJSON = () =>{
  fetch("/json/visitas.json")

  .then( (resultado) => {
    return resultado.json()
  })
  .then( (data) => {
      for (let user of data.visitas){
        visitas.push(user.Enero + user.Febrero + user.Marzo + user.Abril + user.Mayo + user.Junio + user.Julio + user.Agosto+ user.Septiempre + user.Octubre + user.Noviembre+ user.Diciembre);
    }
  })
  .catch( (error) => {
    console.log("Error ",error)
  })
}


let cargarJSONPlan = () =>{
  fetch("/json/planes.json")

  .then( (resultado) => {
    return resultado.json()
  })
  .then( (data) => {
    planes.push(data[0].estandar, data[0].premium, data[0].golden);
  })

  .catch( (error) => {
    console.log("Error ",error)
  })
  
}

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

var ctx2 = document.getElementById('chart2');

var oilData2 = {
    labels: [
        "Estándar",
        "Premium",
        "Golden"
    ],
    datasets: [
        {
            data: planes,
            backgroundColor: [
                "#55A2DE",
                "#26AD73",
                "#E7E012"
            ]
        }]
};

var pieChart = new Chart(ctx2, {
  type: 'pie',
  data: oilData2
});
