let cargarJSON = ()=>{
    fetch("/json/pagos.json")

    .then( (resultado) => {
        return resultado.json()
      })

    .then( (data) => {
        let table = document.getElementsByTagName('table')[0]
        console.log(table)
        let headerRow = document.createElement('tr')
        let id = document.createElement('th')
        id.textContent='Identificador'

        let name = document.createElement('th')
        name.textContent='Nombre'

        let date = document.createElement('th')
        date.textContent='Fecha'

        let monto = document.createElement('th')
        monto.textContent='Monto'

        let estado = document.createElement('th')
        estado.textContent='Estado'

        headerRow.appendChild(id)
        headerRow.appendChild(name)
        headerRow.appendChild(date)
        headerRow.appendChild(monto)
        headerRow.appendChild(estado)

        table.appendChild(headerRow)



        for(pago of data){
            let tr = document.createElement('tr')
            tr.innerHTML = "<td>"+pago.id+"</td>"+"<td>"+pago.persona+"</td>"+"<td>"+pago.fecha+"</td>"+"<td> $"+pago.monto+"</td>"+"<td>"+pago.estado+"</td>"
            table.appendChild(tr)
        }




    })

    


    .catch( (error) => {
        console.log("Error ",error)
    
      })

}



document.addEventListener('DOMContentLoaded', function() {
    cargarJSON();
  })
  