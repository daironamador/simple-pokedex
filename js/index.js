'use strict'

var img = document.getElementById('pkmnImg');
var nombre = document.getElementById('namePkmn');
var tipoPkmn = document.getElementById('abs');
var iconPkmn = document.getElementById('iconPkmn');
var numero = document.getElementById('numberPkmn');
var atk = document.getElementById('atk');
var esp = document.getElementById('spe');
var def = document.getElementById('def');
var hp = document.getElementById('hp');
var toSearch;


document.addEventListener('submit', function (e) {
    e.preventDefault();

    var nPkmn = document.querySelector('form #search-bar').value;
    toSearch = nPkmn;
    infoPkmn();
});

function getPokemon() {
    return fetch("https://pokeapi.co/api/v2/pokemon/" + toSearch);
};

function infoPkmn() {
    getPokemon()
        .then(response => response.json())
        .then(datos => {
            //imagen
            img.style.display="block";
            img.src = datos.sprites.versions["generation-v"] ["black-white"] .animated.front_default;

            img.addEventListener("mouseover",()=>{
                img.src = datos.sprites.versions["generation-v"] ["black-white"] .animated.back_default;
            });

            img.addEventListener("mouseout", ()=>{
                img.src = datos.sprites.versions["generation-v"] ["black-white"] .animated.front_default;
            });

            //numero
            iconPkmn.src = datos.sprites.versions["generation-vii"] .icons.front_default;
            numero.innerHTML = '#' + datos.id;

            //nombre
            
            nombre.innerHTML = datos.name;
            
            

            hp.innerHTML =  datos.stats[0].base_stat+'k'
            atk.innerHTML = datos.stats[1].base_stat+'k';
            esp.innerHTML = datos.stats[3].base_stat+'k';
            def.innerHTML = datos.stats[2].base_stat+'k';

            //Solución
            tipoPkmn.textContent ="";
            //insertar tipo de Pokemon
            for (var i = 0; i <= datos.types.length; i++) {
                let habilidades = document.createElement('span');
                habilidades.textContent = datos.types[i].type.name;
                tipoPkmn.append(habilidades);
                habilidades.setAttribute('id', 'abis');
            }
        });
}




