let actual_pokemon_id=1;
let server_base_url="https://pokeapi.co/api/v2/pokemon/";
let nombre_pokemon = document.getElementById("nombre");
let imagen_pokemon = document.getElementById("img_pokemon");
let numero_pokemon = document.getElementById("numero");
let peso_pokemon = document.getElementById("peso");
let boton_anterior = document.getElementById("btn_anterior");

function siguiente_pokemon(){
    console.log("Llamado siguiente");
    if(actual_pokemon_id==1) boton_anterior.disabled=false;
    actual_pokemon_id+=1
    cargar_datos();
}

function anterior_pokemon(){
    console.log("Llamado anterior");
    if(actual_pokemon_id==2) boton_anterior.disabled=true;
    actual_pokemon_id-=1
    cargar_datos();
}

function cargar_datos(nombre,url_imagen, numero, peso){
    var url = server_base_url+actual_pokemon_id;
    fetch(url)
        .then((response)=>{
            return response.json();
        })
        .then((data)=>{
            cargar_datos(
                nombre_pokemon.textContent=data.name,
                imagen_pokemon.src=data.sprites.front_default,
                numero_pokemon.textContent="Numero: " +data.order,
                peso_pokemon.textContent="Peso: "+data.weight
            )
        })
}

function obtener_primer_pokemon(){
    console.log("obtener");
    cargar_datos();
}

window.onload = function(){
    obtener_primer_pokemon();
    // solo es para probar-> cargar_datos("picachu","test",11,12);
}

