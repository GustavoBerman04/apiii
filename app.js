const info = document.getElementById('info')
const tempInfo = document.getElementById('tempInfo').content
const fragment = document.createDocumentFragment()

let todo = []

const buscarInfo = () => {
    
const buscarAnime = document.getElementById('buscarAnime').value
}
        document.addEventListener('DOMContentLoaded', () =>{
            cargarInfo()
        })
        
    
        const cargarInfo = () => {
            const encodedParams = new URLSearchParams();
        encodedParams.append("q", `${buscarAnime.value}`);
        
        const options = {
            method: 'POST',
            headers: {
                'content-type': 'application/x-www-form-urlencoded',
                'X-RapidAPI-Key': 'ddb65795bemshb511bd669a7e643p1f5c41jsnc0232d3eba18',
                'X-RapidAPI-Host': 'anime52.p.rapidapi.com'
            },
            body: encodedParams
        };
        
        fetch('https://anime52.p.rapidapi.com/api/search', options)
            .then(response => response.json())
            .then(response => {
                todo = response.results.data
                //dibujarInfo()
                console.log(response.results.data)
            })
            .catch(err => console.error(err));
        }
    




const dibujarInfo = () => {
    todo.forEach((item) => {
        tempInfo.querySelector('img').setAttribute('src', item.poster)
        tempInfo.querySelector('h1').textContent = item.title

        const clone = tempInfo.cloneNode(true)
        fragment.appendChild(clone)
    })
    info.appendChild(fragment)
}

