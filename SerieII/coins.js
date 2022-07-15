function getMoney(moneda) {
  var monedas = []
  monedas[0] = 0    
  monedas[1] = 0    
  monedas[2] = 0    
  monedas[3] = 0    
  monedas[4] = 0    
  monedas[5] = 0    
  var flag = false
  
  while( flag == false){
      if(moneda >= 50){
          moneda = moneda - 50
          monedas[5] = monedas[5] +1
      }

      else if(moneda >= 20 ) {
          moneda = moneda - 20
          monedas[4] = monedas[4] +1
      }

      else if(moneda >= 10 ) {
          moneda = moneda - 10
          monedas[3] = monedas[3] +1
      }

      else if(moneda >= 5 ) {
          moneda = moneda - 5
          monedas[2] = monedas[2] +1
      }

      else if(moneda >= 2 ) {
          moneda = moneda - 2
          monedas[1] = monedas[1] +1
      }

      else if(moneda >= 1 ) {
          moneda = moneda - 1
          monedas[0] = monedas[0] +1
      }

      else{
          flag = true
      }
  }
  console.log(monedas)
  console.log(" ")
}


getMoney(51)
getMoney(3)
getMoney(5)
getMoney(16)
getMoney(100)