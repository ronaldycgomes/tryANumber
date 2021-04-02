var chuteUser = document.getElementById('numero-digitado')
var validacao = document.getElementById('validacao')
var vencedor = document.getElementById('vencedor')
var tentativaTela = document.getElementById('tentativa')
var botaoTentativa = document.getElementById('tentar')
var botaoReset = document.getElementById('reset')


var numero_surpresa = parseInt(Math.random()*30)
let tentativas = 1
let chutes = []

function chutou(){
	let numeroTentado = parseInt(chuteUser.value)
	if(numeroTentado == numero_surpresa){
		validacao.innerHTML = "Seu chute: <strong>" + numeroTentado + "</strong>"
		vencedor.innerText = "Parabéns, você acertou o número secreto"
		
		chutes.push(numeroTentado)
		document.getElementById("chutes-feitos").innerHTML = "Números chutados: <strong>" + chutes + "</strong>"
	}else if(numeroTentado != numero_surpresa){
		tentativas++
		tentativaTela.innerHTML = "Tentativa número <strong>" + tentativas + "</strong>"
		
		if(numeroTentado < numero_surpresa){
			validacao.innerHTML = "Seu chute: <strong>" + numeroTentado + "</strong>"
			vencedor.innerHTML = "Tente novamente, seu chute foi <strong>menor</strong> que o número secreto"
			
			chutes.push(numeroTentado)
			document.getElementById("chutes-feitos").innerHTML = "Números chutados: <strong>" + chutes + "</strong>"
		}else{
			validacao.innerHTML = "Seu chute: <strong>" + numeroTentado + "</strong>"
			vencedor.innerHTML = "Tente novamente, seu chute foi <strong>maior</strong> que o número secreto"
			
			chutes.push(numeroTentado)
			document.getElementById("chutes-feitos").innerHTML = "Números chutados: <strong>" + chutes + "</strong>"
		}
	}
}
function resetar() {
	validacao.innerHTML =  "Seu chute: "
	vencedor.innerHTML = "Será que você consegue advinhar o número ?"
	tentativaTela.innerHTML = "Tentativa número 1"
    document.getElementById('numero-digitado').value = ''
	tentativas = 1;
	chutes = []
	document.getElementById("chutes-feitos").innerHTML = "Números tentados: <strong>" + chutes + "</strong>"
	numero_surpresa = parseInt(Math.random()*30)
}


botaoTentativa.onclick = chutou;
botaoReset.onclick = resetar;