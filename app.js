let listaDestinacija=document.getElementById("lista-destinacija");
console.log(listaDestinacija);
let naslov=document.getElementsByClassName("title");
console.log(naslov);

let element=document.getElementsByTagName("li");
console.log(element);

let wrap=document.querySelector("#wrapper");
console.log(wrap);
let destinacija=document.querySelectorAll(".naziv");
console.log(destinacija);
console.log("Parent node liste destnacije je:",listaDestinacija.parentNode);
console.log("Child node liste destinacije je ",listaDestinacija.childNodes);
console.log("listaDestinacija next sibling je:" ,listaDestinacija.nextSibling);
let banner=document.querySelector("#page-banner");
console.log("Node name je:",banner.nodeName);
console.log("Node name je:",banner.nodeType);
console.log("Node name je:",banner.nodeValue);
let destinacija1=document.querySelector(".naziv");
destinacija1.textContent="Grad svetlosti";
destinacija1.innerHTML="<b>Grad</b> svetlosti";
let dugmici=document.querySelectorAll(".obrisi");
Array.from(dugmici).forEach(function (dugme))
{
    dugme.addEventListener("click",function (e){
        const li = e.target.parentNode;
        let ul=li.parentNode;
        ul.removeChild(li);
    })
}

