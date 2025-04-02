function jogar() 
{
  NomeJo = prompt("Informe seu nome porfavor")
rodada = 1
  while(rodada <= 5)
    {
      console.log("Rodada:" + rodada)
      
      escolhaJo = prompt("Nivel:" + rodada +", escolha o buraco de minhoca correto (1,2,3,4)")
      
      if (escolhaJo == "1" || escolhaJo == "2" || escolhaJo == "3" || escolhaJo == "4")
       {
         Bur_M_errado = Math.floor(Math.random()* 4) + 1;
         if(escolhaJo == Bur_M_errado)
           {
             alert("Virou espaguete, adeus")
             break;
           }else
             {
               alert("Vitória, o buraco errado era o número:" + Bur_M_errado)
               rodada++;
              }
        }else
          {
            alert("Inválido, oxigênio esgotado")
            break;
          }
      
    }
  if(rodada > 5)
  {
   alert("Parabéns, você chegou com segurança na estação espacial")
   alert("Devo dizer que sinto orgulho de você, mais uma vez provando seu valor e cumprindo a missão sem nenhum problema, tenho orgulho de ti, " + NomeJo)
  }
}