import json from "./janos.json" assert { type: "json" };
let kosLista = [];
let osszeg=0;
termekMegjelen();
document.getElementById('fizet').addEventListener("click",fizetes);

function szamol(ix) {
    kosLista.push(
        {
            
            "title":document.getElementsByTagName("h2")[ix].innerHTML,
            "asd": document.getElementsByTagName("p")[ix].innerHTML,
            "price": document.getElementsByTagName("span")[ix].innerHTML.substring(1,document.getElementsByTagName("span")[ix].innerHTML.length-3)
    }
    );
    //console.log(kosLista)
    document.getElementById("szoveg").innerHTML += `<div id="div${ix}">
    <p>
    <span>${kosLista[kosLista.length-1].title}</span><br>
    <span>${kosLista[kosLista.length-1].asd}</span><br>
    <span>${kosLista[kosLista.length-1].price} Ft</span></p>
    <input type="button" value="self distruction">
    </div>`;
    osszeg+= parseInt(kosLista[kosLista.length-1].price);
    console.log(kosLista[kosLista.length-1].price)
    document.getElementById("osszeg").innerHTML=osszeg;
}

function termekMegjelen() {
  let termekLista = json.termek;

  for (var ix = 0; ix < termekLista.length; ix++) {
    document.getElementsByTagName("article")[0].innerHTML += `<div>
            <h2>${termekLista[ix].title}</h2>
            <img src="${termekLista[ix].picture}">
            <p>${termekLista[ix].asd}</p>
            <input type="button" id="${ix}" value="vásárlás" >
            <span>${termekLista[ix].price} Ft</span>
            </div>`;

   
  }

  for (let index = 0; index < termekLista.length; index++) {
    document.getElementById(index).addEventListener("click", function () {
      
      szamol(index);
    });
    
  }
}
function fizetes(){
  localStorage.setItem("termekLista", JSON.stringify(kosLista))
  console.log(kosLista)
  console.log( localStorage.getItem("termekLista"))
  window.open("fizetes.html","_self");
}