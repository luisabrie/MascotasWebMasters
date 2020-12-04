function modalPut(id) {
    fetch('../json/peticiones.json')
        .then(response => response.json())
        .then(data => {
            let i = 0;
            var datita = undefined;
            while (i < data.length && datita == undefined) {
                console.log(id, data[i]['id'])
                if (data[i]['id'] == id) {
                    datita = data[i];
                }
                i = i + 1;
            }

            let dog = document.getElementById("test-nlf-1");

            let dividi = document.createElement("div");
            let img = document.createElement("img");
            img.setAttribute("src", datita.image);
            dividi.appendChild(img);

            let h3 = document.createElement("h3");
            h3.textContent = datita.pet_name.split(",")[0];
            dividi.appendChild(h3);

            let h4 = document.createElement("span");
            h4.textContent = datita.pet_name.split(",")[1];
            dividi.appendChild(h4);
            
            let adr = document.getElementById("test-nlf-2");

            let dividi2 = document.createElement("div");
            let address = document.createElement("p");
            address.textContent= "Direccion:"+datita.direccion
            dividi2.appendChild(address)

            let personalData = document.getElementById("test-nlf-3").textContent = "Nombres y Apellidos: "+datita.first_name+" "+datita.last_name;
            
            if (dog.hasChildNodes()) {
                dog.removeChild(dog.childNodes[0]);
                adr.removeChild(adr.childNodes[2]);
                 }
            dog.appendChild(dividi);
            adr.appendChild(dividi2);            
            // Initialize locationPicker plugin
            var lp = new locationPicker('map', {
                lat: datita.lat, lng: datita.long,
                setCurrentPosition: false, // You can omit this, defaults to true
            }, {
                zoom: 15 // You can set any google map options here, zoom defaults to 15
            });
        })

}



let cargarJSON = () => {
    fetch('../json/peticiones.json')
        .then(response => response.json())
        .then(data => {

            let contenedor = document.getElementById('datahere')
            for (obj of data) {

                tr = document.createElement("tr")

                let id = obj.id;
                let nombre = obj.first_name + " " + obj.last_name
                let mascota = obj.pet_name
                let estado = ["Aprobado", "Pendiente", "Cancelado"][obj.status]
                let fecha = obj.date;

                let thinfo = document.createElement("th");
                thinfo.setAttribute("scope", "row");
                thinfo.textContent = id;

                let tddate = document.createElement("td");
                tddate.textContent = fecha;

                let tdnombre = document.createElement("td");
                tdnombre.textContent = nombre;

                let tdmascota = document.createElement("td");
                tdmascota.textContent = mascota;

                let tdestado = document.createElement("td");
                tdestado.textContent = estado;

                let tdinfo = document.createElement("td");

                let adata = document.createElement("a");
                adata.className = "fa fa-info info"

                adata.setAttribute("data-toggle", "modal");
                adata.setAttribute("data-target", "#exampleModalCenter");
                adata.setAttribute("data-id", id);

                adata.onclick = function () {
                    modalPut(adata.getAttribute("data-id"))
                };



                if (obj.status === 1) {
                    tdinfo.appendChild(adata);
                }

                tr.appendChild(thinfo);
                tr.appendChild(tddate);
                tr.appendChild(tdnombre);
                tr.appendChild(tdmascota);
                tr.appendChild(tdestado);
                tr.appendChild(tdinfo);

                contenedor.appendChild(tr);
            }

        })

        .catch((error) => {
            console.log("Error ", error)

        })

}

document.addEventListener('DOMContentLoaded', function () {
    cargarJSON();
    //filtro();

})

