//Lista com 3 jogadores
function jogar() 
{
  astronauta = ["","",""]
  aliens = ["","",""]
  
  forcaAs = 0;
  forcaAli = 0;
  
  for(let i = 0; i <3; i++)
  {
    EscolhaAst = prompt("Digite o nome do astronauta " + (i + 1))
    while (!EscolhaAst) {
        EscolhaAst = prompt("Nome inválido. Digite o nome do astronauta " + (i + 1));
    }
    astronauta[i] = EscolhaAst;
    //forcaAs = forcaAs + Math.floor(Math.random() *10) + 1 Maneira básica de se fazer
    forcaAs += Math.floor(Math.random() *10) + 1
  }
  
  alert("Equipe escolhida é: " + astronauta.join(", "))
  
  for(let i = 0; i < 3; i++)
    {
      indiceAlea = Math.floor(Math.random() * 15)
      
      Aliens_pos = ["Xenomorph", "E.T Bilu", "Dalek", "O Predador", "Sontaran", "Anjo Lamentador", "E.T de Varginha", "Ood", "Cybermen", "Zygon", "Peullin", "O Invasor", "A coisa", "Wernok", "Solup"]
      
     aliens[i] = Aliens_pos[indiceAlea]
     forcaAli += Math.floor(Math.random() *10) + 1 
    }
    
    alert("Equipe inimiga: " + aliens.join(", ")) 

  if(forcaAs > forcaAli)
    {
      alert("Vitória, os inimigos foram exterminados.\nSua força é: " + forcaAs + "\nForça inimiga era: " + forcaAli)
    } 
  else if(forcaAs < forcaAli)
      {
        alert("Derrota, sua equipe foi exterminada.\nSua força era: " + forcaAs + "\nForça inimiga é: " + forcaAli)
      } 
  else
      {
       alert("Empate, ambas as equipes bateram em retirada devida a baixa chance de vitória por suas forças serem iguais\nSua força é: " + forcaAs + "\nForça inimiga é: " + forcaAli) 
      }


}


//Calcular a força de cada jogador e ai somar para saber a força do time todo



//Calcular a força de cada jogador do time do computador



//Comparar a força dos dois times para saber quem venceu