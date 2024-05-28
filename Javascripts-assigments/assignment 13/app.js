var ta = document.getElementById('ta')
var ma = document.getElementById('ma')
var ra = document.getElementById('ra')
var la = document.getElementById('la')
var sa = document.getElementById('sa')

ma.addEventListener('mouseover' , function(){
    ta.src=ma.src
})

ra.addEventListener('mouseover' , function(){
    ta.src=ra.src
})

la.addEventListener('mouseover' , function(){
    ta.src=la.src
})

sa.addEventListener('mouseover' , function(){
    ta.src=sa.src
})



ma.addEventListener('mouseout' , function(){
    ta.src='https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.867xw:0.651xh;0.0417xw,0.190xh&resize=1200:*" '
  
})

ra.addEventListener('mouseout' , function(){
    ta.src='https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.867xw:0.651xh;0.0417xw,0.190xh&resize=1200:*" '
})

la.addEventListener('mouseout' , function(){
    ta.src='https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.867xw:0.651xh;0.0417xw,0.190xh&resize=1200:*" '
})

sa.addEventListener('mouseout' , function(){
    ta.src='https://hips.hearstapps.com/hmg-prod/images/dw-burnett-pcoty22-8260-1671143390.jpg?crop=0.867xw:0.651xh;0.0417xw,0.190xh&resize=1200:*" '
})

