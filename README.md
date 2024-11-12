# Pedra-Papel-e-Tesoura

Perguntas:

PROJ01
1. **Compreensão do Fluxo do Jogo:**
   - Como o fluxo do jogo se desenrola desde que o jogador faz uma escolha até que o resultado é exibido?
   - R: O jogo começa quando o jogador clica em um dos botões (Pedra, Papel ou Tesoura), o que aciona a função playGame com a escolha do jogador.
   - O que acontece quando o jogador clica em um dos botões?
   - R: Quando o jogador clica em um botão, a função playGame é chamada, a qual gera a escolha da máquina de forma aleatória e compara as escolhas para determinar o vencedor. O resultado é então exibido na área específica da página.

2. **Lógica de Determinação do Vencedor:**
   - Como a função `determineWinner` decide se o jogador ganhou, perdeu ou empatou?
   - R: A função determineWinner compara as escolhas do jogador e da máquina, determinando o vencedor com base em regras condicionais. Por exemplo, se o jogador escolhe Pedra e a máquina escolhe Tesoura, o jogador vence.
   - Que condições precisam ser atendidas para que cada resultado ocorra?
   - R: Para cada combinação de escolhas, o código decide se é empate, vitória ou derrota, retornando a mensagem apropriada.
   
3. **Uso de Funções:**
   - Como as funções estão organizadas no código? Elas estão desempenhando suas responsabilidades de forma clara?
   - R: As funções determineWinner e playGame estão bem organizadas, cada uma com uma responsabilidade clara: a primeira para definir o resultado e a segunda para gerenciar a jogada.
     
   - O que você poderia fazer para melhorar a clareza ou a eficiência do código?
   - R:  A clareza pode ser aumentada documentando cada função com comentários descritivos. Além disso, centralizar a exibição de mensagens em uma função específica poderia simplificar o código.

4. **Manipulação do DOM:**
   - Como o código utiliza a manipulação do DOM para atualizar o conteúdo da página?
   - R: O código usa getElementById para obter referências aos elementos HTML e textContent para atualizar o conteúdo da área de resultado.
   - Que métodos foram utilizados para selecionar elementos e alterar seu conteúdo?
   - R: São usados getElementById para selecionar elementos e textContent para definir o texto exibido.

5. **Eventos de Clique:**
   - Como os eventos de clique são configurados para os botões? O que acontece quando um botão é clicado?
   - R:  Os eventos de clique são configurados usando addEventListener em cada botão, associando a função playGame a cada clique.
   - O que você poderia adicionar para melhorar a interatividade do jogo?
   - R: Para aumentar a interatividade, uma animação visual ou transição poderia ser aplicada aos botões após o clique, proporcionando um feedback visual.

6. **Aleatoriedade:**
   - Como a escolha da máquina é feita de forma aleatória? Você entende a lógica por trás de `Math.random()` e `Math.floor()`?
   - R: A escolha da máquina é feita selecionando um item aleatório do array choices, usando Math.random() para gerar um número decimal aleatório e Math.floor() para arredondá-lo.
   - Que outras maneiras você poderia implementar para gerar uma escolha aleatória?
   - R: Outra forma seria utilizar uma função de embaralhamento e escolher o primeiro item do array embaralhado.

7. **Reflexão Pessoal:**
    - O que você aprendeu ao criar este projeto?
    - R: Criar este projeto ajuda a entender como diferentes linguagens e tecnologias da web trabalham juntas, além de reforçar conceitos de manipulação do DOM, lógica de condições e eventos.
    - Como você se sente em relação ao uso de HTML, CSS e TypeScript juntos? Existe alguma parte do processo que você achou desafiadora?
    - R: Pra ser bem sinceso não achei muito complexo, obviamente foi um pouco desafiador mas achei bacana o desafio
  



