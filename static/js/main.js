window.onload=()=>{


animacion = document.getElementById("animacion");

for (let i = 50; i < 150; i++) {
    animacion.innerHTML+= "<p id=\"letra"+(i-49)+"\">" + String.fromCharCode(i) + "</p>";
}


for (let i = 1; i <= 100; i++) {
    
    valor1=(window.innerHeight/(Math.random()*5));
    valor2=(window.innerWidth/(Math.random()*5));
    letra = document.getElementById("letra"+i);

    letra.style.transform="translate("+valor2+"px, "+valor1+"px)";
    console.log(valor1);
    console.log(valor2);
    
}

}