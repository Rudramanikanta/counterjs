var birth=new Date('12/02/2023');
var second=1000;
var minute=60*second;
var hour=60*minute;
var day=24*hour;
setInterval(()=>{
    var today=new Date();
    var diff=birth-today;
   var days=Math.floor(diff/day);
   var hours=Math.floor((diff%day)/hour)
   var minutes=Math.floor((diff%hour)/minute);
   var seconds=Math.floor((diff%minute)/second);
    document.getElementById('day').innerHTML=days+"days";
    document.getElementById('hour').innerHTML=hours+"hours";
    document.getElementById('minute').innerHTML=minutes+"minutes";
    document.getElementById('second').innerHTML=seconds+"seconds";
},1000)