const info = document.getElementById('info')
const tempInfo = document.getElementById('tempInfo').content
const fragment = document.createDocumentFragment()
const boton = document.getElementById('boton')
const refre = document.getElementById('refrescar')
const epi = document.getElementById('episodios')

let todo = []

boton.addEventListener('click', () => {
    buscarInfo()
})

refre.addEventListener('click', () => {
    refrescaInfo()
})

const refrescaInfo = () => {
    window.location.href = window.location.href;
}

const buscarInfo = () => {
    
    console.log(buscarAnime)
    const encodedParams = new URLSearchParams();
            if(buscarAnime.value){
                encodedParams.append("q", buscarAnime.value);
        
            const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': '4ac7eef972mshd280279a7778566p1c828cjsnb6b84c68dbf6',
                'X-RapidAPI-Host': 'anime52.p.rapidapi.com'
            },
            body: encodedParams
            };
        
            fetch('https://anime52.p.rapidapi.com/api/search', options)
            .then(response => response.json())
            .then(response => {
                todo = response.results.data
                dibujarInfo()
                console.log(response.results.data)
                })
            .catch(err => console.error(err));
            }
}
    
const buscarAnime = document.getElementById('buscarAnime')
    




const dibujarInfo = () => {
    todo.forEach((item) => {
        tempInfo.querySelector('img').setAttribute('src', item.poster)
        tempInfo.querySelector('h1').textContent = item.title
        tempInfo.getElementById('episodios').textContent = ('Episodios: ') + item.episodes
        tempInfo.getElementById('estatus').textContent = ('Estado: ') + item.status
        tempInfo.getElementById('fecha').textContent = ('Fecha de lanzamiento: ') + item.year
        tempInfo.getElementById('calif').textContent = ('Calificación: ') + item.score
        tempInfo.getElementById('tipo').textContent = ('Tipo: ') + item.type
        tempInfo.getElementById('temporada').textContent = ('Temporada de estreno: ') + item.season

        const clone = tempInfo.cloneNode(true)
        fragment.appendChild(clone)
    })
    info.appendChild(fragment)
}
        