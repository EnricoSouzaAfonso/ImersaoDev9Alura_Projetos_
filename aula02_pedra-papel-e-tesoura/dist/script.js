function jogar () {
idade = prompt("Digite sua idade")
  
  if (idade >= 18) {
    alert("Criando o Universo:")
    
    escolhaJo = prompt("Digite 1-asteroide, 2-atmosfera ou 3-vento solar?" + " Aceito apenas números de 1 a 3")
   
  if(escolhaJo == 1 || escolhaJo == 2 || escolhaJo == 3) {
        escolhaComp = Math.floor(Math.random() * 3) + 1;
    
    if(escolhaJo == escolhaComp){
      alert("Um empate foi feito")
    }
    
//escolha Jogador for 1:    
    
    if(escolhaJo == 1) {
      if(escolhaComp == 2) {
        alert("Computador ganhou, escolheu atmosfera") }
      
        if(escolhaComp == 3) {
          alert("Você ganhou, computador escolheu vento solar")
        }
      }
    
//escolha Jogador for 2:
    
    if(escolhaJo == 2) {
      if(escolhaComp == 1){
        alert("Você ganhou, computador escolheu asteroide") }
      
      if(escolhaComp == 3){
        alert("Computador ganhou, escolheu vento solar") }
      
      }
    
 //escolha Jogador for 3:   
    
    if(escolhaJo == 3) {
      if(escolhaComp == 2){
        alert("Você ganhou, computador escolheu atmosfera")
      }
      
      if(escolhaComp == 1) {
        alert("Computador ganhou, escolheu asteroide")
      }
    }
    
  alert("A escolha do computador é " +  escolhaComp)  
  }
  
    
  } else if(idade <18) {
    alert("Caia fora meu amigo")
}
  
  
}