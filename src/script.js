function carregar() {
    var msg = window.document.getElementById("msg")
    var img = window.document.getElementById("imagem")
    var saudacao = window.document.getElementById("saudacao")
    var data = new Date()
    var hora = data.getHours()
    msg.innerHTML = `Agora são ${hora} horas.`
    if (hora >= 0 && hora <12) {
        saudacao.innerHTML = "Bom dia!"
        img.src = "src/img/amanhecer.png"
        document.body.style.background = "#ffcc99"
    } else if (hora >= 12 && hora <= 18){
        saudacao.innerHTML = "Boa Tarde!"
        img.src = "src/img/entardecer.png"
        document.body.style.background = "#cc6666"
    } else {
        saudacao.innerHTML = "Boa noite!"
        img.src = "src/img/anoitecer.png"
        document.body.style.background = "#333366"
    }
}