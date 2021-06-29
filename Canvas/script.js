const salvar = document.getElementById('salvar')

const tela = document.getElementById('tela')
tela.width = window.innerWidth-60
tela.height = 400

const tela2 = document.getElementById('tela2')
tela2.width = window.innerWidth-60
tela2.height = 400

let contexto2 = tela2.getContext("2d")
contexto2.fillStyle = "red"
contexto2.fillRect(0,0,tela2.width, tela2.height)


let contexto = tela.getContext("2d")
contexto.fillStyle = "red"
contexto.fillRect(0,0,tela.width, tela.height)

let draw_color = "blue"
let draw_width = "2"
let is_drawing = false

tela.addEventListener('touchstart', start, false)
tela.addEventListener('touchmove', draw, false)
tela.addEventListener('mousedown', start, false)
tela.addEventListener('mousemove', draw, false)

function start(event){

    is_drawing = true
    contexto.beginPath()
    contexto.moveTo(event.clientX - tela.offsetLeft, event.clientY - tela.offsetTop)
    event.preventDefault()
}

function draw(event){
    if (is_drawing){
        contexto.lineTo(event.clientX - tela.offsetLeft, event.clientY - tela.offsetTop)
        contexto.strokestyle = draw_color
        contexto.lineWidth = draw_width
        contexto.lineCap = "round"
        contexto.lineJoin = "round"
        contexto.stroke()
    }
}

salvar.addEventListener('click',_=>{
    tela2.drawImage(tela,10,10)
})