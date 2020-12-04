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

 