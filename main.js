const lucks = [
  "A vida é uma jornada, não um destino.",
  "Grandes coisas estão por vir para aqueles que estão dispostos a tentar.",
  "Acredite em si mesmo e tudo será possível.",
  "O sucesso está logo além do horizonte.",
  "Você é mais forte do que pensa.",
  "Seja corajoso o suficiente para seguir seu coração.",
  "As oportunidades estão ao seu redor, mantenha os olhos abertos.",
  "A persistência é a chave para o sucesso.",
  "Siga seus sonhos com paixão e propósito.",
  "A sorte favorece os audazes.",
  "Você tem o poder de criar sua própria sorte.",
  "A vida é cheia de surpresas maravilhosas.",
  "Seja gentil e boas coisas acontecerão.",
  "As dificuldades são apenas oportunidades disfarçadas.",
  "A gratidão transforma o que temos em suficiente.",
  "A sabedoria vem da experiência.",
  "Sua criatividade é ilimitada, deixe-a fluir.",
  "O otimismo é a chave para abrir todas as portas.",
  "A compaixão é a verdadeira chave para a felicidade.",
  "A felicidade é uma jornada, não um destino."
];

const main = document.querySelector("main")
const screen1 = document.querySelector('.screen1')
const screen2 = document.querySelector('.screen2')
const btnOpen = document.querySelector("#btn-open")
const btnAgain = document.querySelector("#btn-again")
const luck = document.querySelector("#luck")
let randomIndex = Math.round(Math.random() * lucks.length)
let selectedLuck = lucks[randomIndex]

btnOpen.addEventListener("click", function(event){
  event.preventDefault()
  toggleScreen()
  mensageRandom()
  luck.innerHTML = selectedLuck
})

btnAgain.addEventListener("click", function(event){
  toggleScreen()
})

function mensageRandom() {
  randomIndex = Math.round(Math.random() * lucks.length)
  selectedLuck = lucks[randomIndex]
}

function toggleScreen() {
  screen1.classList.toggle("hide")
  screen2.classList.toggle("hide")
  main.classList.toggle("main-animation")
}