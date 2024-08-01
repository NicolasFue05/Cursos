// Plataforma de Cursos Interactiva

const containerCurses = document.getElementById('container-curses')
const searchBar = document.getElementById('seatchBar');
const addCurse = document.getElementById('addCurse');
const curseName = document.getElementById('name');
const curseImage = document.getElementById('Image');
const curseDescription = document.getElementById('description');
const cursePrice = document.getElementById('price');
const sendCurse = document.getElementById('sendCurse');
const buttonEliminate = document.getElementById('eliminatebtn');
const curseContainer = document.getElementsByClassName('curse-container');

// Crear los objetos cursos
let natacion = {
    nombre: "Curso de Natacion",
    descripcion: "Lorem Ipsum dolor sit ament",
    precio: 190
}
let futbol = {
    nombre: "Curso de Natacion",
    descripcion: "Lorem Ipsum dolor sit ament",
    precio: 190
}
let cocina = {
    nombre: "Curso de Natacion",
    descripcion: "Lorem Ipsum dolor sit ament",
    precio: 190
}
// Crear la lista de los cursos
let curses = [natacion, futbol, cocina]

// Crear una funcion que agregue un curso a la lista
function addCurse(name, image, description, price) {
    try {
        let curse = {
            nombre: name.value,
            descripcion: description.value,
            precio: price.value
        }

        // Añadir el curso a la lista
        curses = curses.push(curse)
        // Añadir el contenedor con todo
        // Crear los elementos y añadirlos al DOM
        const curseContainer = document.createElement("div");
        curseContainer.setAttribute("class", "curse-container")
        curseContainer.setAttribute("id", `${name}`)
        const containerImage = document.createElement("div")
        containerImage.setAttribute("id", "container-image")
        // Añadirlo al hijo 
        curseContainer.appendChild(containerImage)
        const image = document.createElement("img")
        /*
        <div class="curse-container" id="${name.value}">
            <div id="container-image">
                <img src="${image.value}"/>
            </div>
            <div id="container-name">${name.value}</div>
            <div id="container-description">
                ${description.value}
            </div>
            <button id="eliminatebtn">
                <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAAAXNSR0IArs4c6QAAAKVJREFUSEvtlcsRgDAIRDedaCdaipVYiqVoKXaiMmNyIIObj7klN0V4C0xch8bHNa4PBpgAbAAGQ8gJYAFwWEIZYH+SBfJ1BDKWAq430RLC4nRErACLRwCfULv70LFuvTnAK6etqxbN74uX9zdAK2TPgZ/aAStYPaIOiO5V7kj6DuivqXpEjJANSDEaDRVXm/VL6yaLi60JbubrmdbJLJONhsabA25OJTgZ1vxrLQAAAABJRU5ErkJggg=="/>
            </button>
        </div>
        */
        containerCurses.append(showCurse)
    }
    catch (err) {
        console.error(err)
        return null
    }
}

sendCurse.addEventListener('click', (e) => {
    e.preventDefault();
    try{
        addCurse(curseName, curseImage, curseDescription, cursePrice)
    }
    catch(err){
        console.error(err)
        return null
    }
})
