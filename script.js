let counts=setInterval(updated);
let upto=0;
    function updated(){
    var count= document.getElementById("counter");
    count.innerHTML=++upto;
    if(upto===256)
    {
     clearInterval(counts);
    }
}

let counts1=setInterval(updated1);
let upto1=0;
    function updated1(){
    var count= document.getElementById("counter1");
    count.innerHTML=++upto1;
    if(upto1===355)
    {
     clearInterval(counts1);
    }
}


let counts2=setInterval(updated2);
let upto2=0;
    function updated2(){
    var count= document.getElementById("counter2");
    count.innerHTML=++upto2;
    if(upto2===825)
    {
     clearInterval(counts2);
    }
}


let counts3=setInterval(updated3);
let upto3=0;
    function updated3(){
    var count= document.getElementById("counter3");
    count.innerHTML=++upto3;
    if(upto3===75)
    {
     clearInterval(counts3);
    }
}

