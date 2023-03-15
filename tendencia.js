const info = document.getElementById('info')
const tempInfo = document.getElementById('tempInfo').content
const fragment = document.createDocumentFragment()
const boton = document.getElementById('boton')
const refre = document.getElementById('refrescar')
const epi = document.getElementById('episodios')

let tende = []

document.addEventListener('DOMContentLoaded', () =>{
    cargarTendencia()
})

const cargarTendencia = () =>{
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ddb65795bemshb511bd669a7e643p1f5c41jsnc0232d3eba18',
            'X-RapidAPI-Host': 'myanimelist.p.rapidapi.com'
        }
    };
    
    fetch('https://myanimelist.p.rapidapi.com/anime/top/all', options)
        .then(response => response.json())
        .then(response => {
            todo = response
            dibujarTendencia()
            console.log(response)
        })
        .catch(err => console.error(err));
}

const dibujarTendencia = () => {
    todo.forEach((item) => {
        tempInfo.querySelector('img').setAttribute('src', item.picture_url)
        tempInfo.querySelector('h1').textContent = item.title
        tempInfo.getElementById('fecha').textContent = ('Fecha de lanzamiento: ') + item.aired_on
        tempInfo.getElementById('calif').textContent = ('Calificación: ') + item.score
        tempInfo.getElementById('tipo').textContent = ('Tipo: ') + item.type
        tempInfo.getElementById('rango').textContent = ('Temporada de estreno: ') + item.rank

        const clone = tempInfo.cloneNode(true)
        fragment.appendChild(clone)
    })
    info.appendChild(fragment)
}
        