/* globals Stepper:false */

(function () {
    'use strict'
  
    window.stepper3 = new Stepper(document.querySelector('#stepper3'), {
      linear: false,
      animation: true
    })
  
    var stepperFormEl = document.querySelector('#stepperForm')

    var btnNextList = [].slice.call(document.querySelectorAll('.btn-next-form'))
    
    var inputMailForm = document.getElementById('inputMailForm')
    var inputPasswordForm = document.getElementById('inputPasswordForm')
  
   
  
    
  })()

  // Get element references
  var confirmBtn = document.getElementById('confirmPosition');
  var onClickPositionView = document.getElementById('onClickPositionView');
  var onIdlePositionView = document.getElementById('onIdlePositionView');

  // Initialize locationPicker plugin
  var lp = new locationPicker('map', {
    setCurrentPosition: true, // You can omit this, defaults to true
  }, {
    zoom: 18 // You can set any google map options here, zoom defaults to 15
  });
  google.maps.event.addListener(lp.map, 'idle', function (event) {
    // Get current location and show it in HTML
    var location = lp.getMarkerPosition();
    formularioLatitud.setAttribute("value",location.lat)
    formularioLongitud.setAttribute("value",location.lng)
  });