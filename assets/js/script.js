const tweetar = document.querySelector("button")
const textarea= document.querySelector('#text')
const feed = document.querySelector('.listaTweets')

function addTweet(e){
  e.preventDefault()
  const tweet = textarea.value
  criarTweet(tweet)
}

tweetar.addEventListener('click',addTweet); 

function criarTweet(tweetTexto){

let data = new Date()
let hora = data.getHours()
let minutos = data.getMinutes()

  const tweet = {
    nome: "Visitante",
    foto: "./assets/img/ProfilePic.png",
    usuario: "@Visitante_do_site",
    texto:  tweetTexto,
    tempo: `${hora}:${minutos}`

  }
  listarTweet(tweet)
  
}

function listarTweet(tweet){
  const {nome,foto,usuario,texto,tempo} = tweet
let li = document.createElement('li')
let img = document.createElement('img')
let div = document.createElement('div')
let h2 = document.createElement('h2')
let span = document.createElement('span')
let p = document.createElement('p')

li.classList.add('tweet')
img.classList.add('picfeed')
img.classList.add('fotoPerfil')
div.classList.add('conteudo')


h2.innerText= nome
img.src = foto
span.innerText = usuario + " - " + tempo
p.innerText = texto


div.appendChild(h2)
div.appendChild(span)
div.appendChild(p)

li.appendChild(img)
li.appendChild(div)
feed.appendChild(li)
textarea.value = ""
console.log(li)


}


