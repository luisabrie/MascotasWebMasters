chartOptions = [{
  "captions": [{ "INDIA": "INDIA", "CANADA": "CANADA", "USA": "USA" }],
  "color": [{ "INDIA": "#FFA500", "CANADA": "#0070C0", "USA": "#ff0000" }],
  "xaxis": "Estado",
  "yaxis": "Total"
}]

let chartData = [];


let cargarDatos=()=>{
  let request = new Request('http://localhost:3000/api/mascotas/tipo', {
    headers: new Headers({
        'Content-Type': 'text/json' 
    }),
    method: 'GET'
    });

    fetch(request).then((response) => {
        response.json().then((data) => {
            for(elem of data){

           
                
        }

        });
    });


}

function Plot() {
  TransformChartData(chartData, chartOptions);
  BuildPie("chart", chartData, chartOptions);
}

function BuildPie(id, chartData, options) {
  var xVarName;
  var divisionRatio = 2.5;
  var legendoffset = 0;

  chart = d3.select("#" + id + " .innerCont");

  var yVarName = options[0].yaxis;
  width = $(chart[0]).outerWidth(),
  height = $(chart[0]).outerHeight(),
  radius = Math.min(width, height) / divisionRatio;

  xVarName = options[0].xaxis;


  var rcolor = d3.scale.ordinal().range(runningColors);

  arc = d3.svg.arc()
          .outerRadius(radius)
          .innerRadius(radius - 200);

  chart = chart
          .append("svg")  //append svg element inside #chart
          .attr("width", width)    //set width
          .attr("height", height)  //set height
          .append("g")
          .attr("transform", "translate(" + (width / divisionRatio) + "," + ((height / divisionRatio) + 30) + ")");

  var pie = d3.layout.pie()
              .sort(null)
              .value(function (d) {
                  return d.Total;
              });

  var g = chart.selectAll(".arc")
              .data(pie(runningData))
              .enter().append("g")
              .attr("class", "arc");

  var count = 0;

  var path = g.append("path")
              .attr("d", arc)
              .attr("id", function (d) { return "arc-" + (count++); })
              .style("opacity", function (d) {
                  return d.data["op"];
              });

  path.append("svg:title")
  .text(function (d) {
      return d.data["title"] + " (" + d.data[yVarName] + ")";
  });

  path.style("fill", function (d) {
      return rcolor(d.data[xVarName]);
  })

  g.append("text")
   .attr("transform", function (d) { return "translate(" + arc.centroid(d) + ")"; })
   .attr("dy", ".35em")
   .style("text-anchor", "middle")
   .style("opacity", 1)
   .text(function (d) {
       return d.data[yVarName];
   });


  count = 0;
  var legend = chart.selectAll(".legend")
      .data(runningData).enter()
      .append("g").attr("class", "legend")
      .attr("legend-id", function (d) {
          return count++;
      })
      .attr("transform", function (d, i) {
          return "translate(15," + (parseInt("-" + (runningData.length * 10)) + i * 28 + legendoffset) + ")";
      })
      .style("cursor", "pointer")

  var leg = legend.append("rect");

  leg.attr("x", width / 2)
      .attr("width", 18).attr("height", 18)
      .style("fill", function (d) {
          return rcolor(d[yVarName]);
      })
  legend.append("text").attr("x", (width / 2) - 5)
      .attr("y", 9).attr("dy", ".35em")
      .style("text-anchor", "end").text(function (d) {
          return d.caption;
      });

  leg.append("svg:title")
  .text(function (d) {
      return d["title"] + " (" + d[yVarName] + ")";
  });

}

function TransformChartData(chartData, opts) {
  var result = [];
  var resultColors = [];
  var counter = 0;
  var hasMatch;
  var xVarName;
  var yVarName = opts[0].yaxis;

  xVarName = opts[0].xaxis;

  for (var i in chartData) {
      hasMatch = false;
      for (var index = 0; index < result.length; ++index) {
          var data = result[index];

          if (data[xVarName] == chartData[i][xVarName]) {
              result[index][yVarName] = result[index][yVarName] + chartData[i][yVarName];
              hasMatch = true;
              break;
          }
      }
      if (hasMatch == false) {
          ditem = {};
          ditem[xVarName] = chartData[i][xVarName];
          ditem[yVarName] = chartData[i][yVarName];
          ditem["caption"] = opts[0].captions != undefined ? opts[0].captions[0][chartData[i][xVarName]] : "";
          ditem["title"] = opts[0].captions != undefined ? opts[0].captions[0][chartData[i][xVarName]] : "";
          result.push(ditem);

          resultColors[counter] = opts[0].color != undefined ? opts[0].color[0][chartData[i][xVarName]] : "";

          counter += 1;
      }
  }

  runningData = result;
  runningColors = resultColors;
  return;
}










//Las funciones se ejecutarán en cuanto el documento esté completamente cargado.
document.addEventListener('DOMContentLoaded', function() {
  //cargarJSON();
  //cargarJSONPlan();
  Plot();
})
/*
let visitas = [];
let planes = [];


let cargarJSON = () =>{
  fetch("json/visitas.json")

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
  fetch("json/planes.json")

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
});*/
