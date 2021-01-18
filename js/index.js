const basico = document.querySelector("#basico");
const padrao = document.querySelector("#padrao");
const premium = document.querySelector("#premium");
const botao = document.querySelector("#planosButton");
let botaoTxt = "Premium";

basico.setAttribute("type", "radio")
padrao.setAttribute("type", "radio")
premium.setAttribute("type", "radio")

basico.addEventListener("change", () => {
    setInterval(() => {
        if (basico.checked == true) {
            botaoTxt = "Básico"
            basico.parentNode.classList.add("borda");
            return botaoTxt
        } else {
            basico.parentNode.classList.remove("borda");
        }
    }, 1)
})

padrao.addEventListener("change", () => {
    setInterval(() => {
        if (padrao.checked == true) {
            botaoTxt = "Padrão";
            padrao.parentNode.classList.add("borda");
            return botaoTxt
        } else {
            padrao.parentNode.classList.remove("borda");
        }
    }, 1)
})

premium.addEventListener("change", () => {
    setInterval(() => {
        if (premium.checked == true) {
            botaoTxt = "Premium"
            premium.parentNode.classList.add("borda");
            return botaoTxt
        } else {
            premium.parentNode.classList.remove("borda");
        }
    }, 1)
})

setInterval(() => {
    botao.innerHTML = `Assinar Plano ${botaoTxt}`
}, 10)
