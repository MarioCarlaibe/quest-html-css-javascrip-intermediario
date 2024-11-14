const campoText = document.querySelectorAll(".campo")
const botao = document.querySelector(".enviar")
const campoObrigatorio = document.querySelectorAll(".mensagem-erro")

botao.addEventListener('click', submit)

function submit() {
   campoText.forEach((inputs, index) => {
      if (inputs.value !== '') {
         inputs.classList.remove('nao-preenchido')
         campoObrigatorio[index].classList.remove('mostrar')
         inputs.classList.add('preenchido')
      } else if(inputs.value == ''){
         inputs.classList.remove('preenchido')
         inputs.classList.add('nao-preenchido')
         campoObrigatorio[index].classList.add('mostrar')
      }
   });
}