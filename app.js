const naruto = document.getElementById('naruto')
const narugod = document.getElementById('narugod').content
const fragment = document.createDocumentFragment()

let naru = []

document.addEventListener('DOMContentLoaded', () =>{
    cargarNaruto()
})

const cargarNaruto = () => {
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': 'ddb65795bemshb511bd669a7e643p1f5c41jsnc0232d3eba18',
            'X-RapidAPI-Host': 'anime-db.p.rapidapi.com'
        }
    };
    
    fetch('https://anime-db.p.rapidapi.com/anime?page=1&size=10&search=Naruto&genres=Fantasy%2CDrama&sortBy=ranking&sortOrder=asc', options)
        .then(response => response.json())
        .then(response => {
            naru = response.data
            dibujarNaruto()
            console.log(response.data)
        })
        .catch(err => console.error(err));
}

const dibujarNaruto = () => {
    naru.forEach((item) => {
        narugod.querySelector('img').setAttribute('src', item.image)
        narugod.querySelector('h1').textContent = item.title
        narugod.querySelector('p').textContent = item.synopsis
        narugod.getElementById('estatus').textContent = ('Estatus: ')+item.status

        const clone = narugod.cloneNode(true)
        fragment.appendChild(clone)
    })
    naruto.appendChild(fragment)
}

