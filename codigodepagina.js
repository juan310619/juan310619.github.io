
function Mostrarencrip(){
    let entrada = document.getElementById("entrada").value;
    let textoEncriptado = encriptar(entrada);
    console.log("este es otro" + textoEncriptado)
    let salida = document.getElementById("salida");
    if (textoEncriptado.value = undefined) {
        return salida.style.backgroundImage
    }
    salida.style.backgroundImage = "none"
    salida.value = textoEncriptado;
    document.getElementById("entrada").value="";
    
}

function encriptar(texto){
    let expre=/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/ /*expresion regular que devuelve false por caracteres especiales y tildes*/
    if(texto!==texto.toLowerCase()) return alert("Solo se aceptan frases en minusculas")
    if(expre.test(texto)==0) return alert("No se aceptan caracteres especiales,tildes y valores nulos")
    let  Remplazos={
        e :"enter",
        a:"ai",
        i:"imes",
        o:"ober",
        u : "ufat"}
    
    let busqueda =new RegExp(Object.keys(Remplazos).join("|"),"gi");
    texto = texto.replace(busqueda,function(match){
        return Remplazos[match];
    })
    console.log("esta es" + texto)
    return texto
}

function desencriptar(texto){
    let expre=/^[a-zA-Z]+(\s*[a-zA-Z]*)*[a-zA-Z]+$/ /*expresion regular que devuelve false por caracteres especiales y tildes*/
    if(texto!==texto.toLowerCase()) return alert("Solo se aceptan frases en minusculas")
    if(expre.test(texto)==0) return alert("No se aceptan caracteres especiales,tildes y valores nulos")
    let  Remplazos={
        enter :"e",
        ai:"a",
        imes:"i",
        ober:"o",
        ufat : "u"
    }
    let busqueda =new RegExp(Object.keys(Remplazos).join("|"),"gi");
    texto = texto.replace(busqueda,function(match){
        return Remplazos[match];
    })
    return texto
}

function mostrardescrip(){
    let entrada = document.getElementById("entrada").value;
    let textoEncriptado = desencriptar(entrada);
    console.log("este es otro" + textoEncriptado)
    let salida = document.getElementById("salida");
    if (textoEncriptado.value = undefined) {
        return salida.style.backgroundImage
    }
    salida.style.backgroundImage = "none"
    salida.value = textoEncriptado;
    document.getElementById("entrada").value="";
}

function copiar(){
    let salida = document.getElementById("salida");
    salida.select();
    navigator.clipboard.writeText(salida.value)
    salida.value = "";
    
}


