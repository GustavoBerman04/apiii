const info = document.getElementById('info')
const tempInfo = document.getElementById('tempInfo').content
const fragment = document.createDocumentFragment()
const boton = document.getElementById('boton')
const refre = document.getElementById('refrescar')

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
		        'X-RapidAPI-Key': 'ba82d75bd7msh5b317582283385bp14c5eajsn6d117bf1b3c8',
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

        const clone = tempInfo.cloneNode(true)
        fragment.appendChild(clone)
    })
    info.appendChild(fragment)
}
        