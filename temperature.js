function fToC(fahrenheit)   
{  
  var fTemp = fahrenheit;  
  var fToCel = (fTemp - 32) * 5 / 9;  
  var Temp = fTemp+'\xB0F is ' + fToCel + '\xB0C.';  
    console.log(Temp);  
}   
  
function cToF(celsius)   
{  
  var cTemp = celsius;  
  var cToFahr = cTemp * 9 / 5 + 32;  
  var Temp = cTemp+'\xB0C is ' + cToFahr + ' \xB0F.';  
    console.log(Temp);  
}    
fToC(55);
cToF(70);  
  