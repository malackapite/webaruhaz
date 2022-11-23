let kosLista = JSON.parse(localStorage.getItem("termekLista"));
document.getElementsByTagName("body")[0].innerHTML+=`<table><thead><tr><th>Macska</th><th>Leírás (azt hiszem)</th><th>Ár</th></tr></thead><tbody></tbody></table>`
for(let ix=0;ix<kosLista.length;ix++)
    document.getElementsByTagName("tbody")[0].innerHTML+=`<tr><th>${kosLista[ix].title}</th><td>${kosLista[ix].asd}</td><td>${kosLista[ix].price} Ft</td></tr>`;