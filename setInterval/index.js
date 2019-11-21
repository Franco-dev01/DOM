var sec=document.querySelector('#second')
var mint=document.querySelector('#min')
var H=document.querySelector('#heure')

var s=0;
var m=0;
var h=0;
var compteur=0;
H.style.color='red'
mint.style.color='green'
sec.style.color='orange'

var ct= setInterval(() => {
    sec.textContent=s.toString()
    if (s===10) {
       mint.textContent=m.toString()
       
       s=0
       m++
      

    }else if (m===10) {
        H.textContent=h.toString()
        m=0

        h++
    }else{

    }
    console.log(s)
   sec.value= s++
   if(H===1){
       var d=document.querySelector('div');
       d.style.floodColor='red';
   }
}, 1000);

