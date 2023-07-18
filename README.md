# Jogo do Mario Jump!

## Este é meu primeiro projeto na qual simula um jogo e fiz ele utilizando HTML, CSS e Javascript.

### Este jogo em questão funciona da seguinte forma, precisa fazer com que o Mario fique pulando os Koopas sem bater neles, pois assim que ele bate em um, ele morre.

#### Commit 2: Projeto com base implementada e operando com sucesso utilizando o Mario, um cano e nuvens.

#### Commit 3: Adicionando melhorias como background do jogo e fora do jogo, trocando cano por Koopa (tartaruga) e também adicionado informações sobre o jogo.

#### Commit 4: Correção dos "px" para interação do Mario e com o Koopa e na animação "jump". Alteração do background do "game-board" e do GIF do Koopa. Inserido GIF question-block, PNG do Koopa e animação do "clouds" no "script.js" para que pare a animação no momento que ocorrer a interação do Mario com o Koopa.

#### Commit 5: Adicionada a função "refreshPage" no "script.js" para que o jogo reinicie após clicar em qualquer tecla, adicionado o ícone do cogumelo na aba do navegador e adicionada também a instrução dessa funcionalidade da função "refreshPage". Correção da resolução do "game-board". Correção dos "px" para interação do Mario com o Koopa e na animação "jump".

#### Commit 6: Adicionado os botãos "Start" e "Reset", e inserida as funções de reiniciar o jogo (atualizar a página) ao clicar no botão "Reset" e iniciar o jogo (iniciar as animações) ao clicar no botão "Start". Correção dos "px" para interação do Mario e com o Koopa e na animação "jump".

#### Commit 7: Corrigida a função do botão "Reset" para que não atualize mais a página e sim volte as animações e interação do Mario com o Koopa, adicionada animação das nuvens e uma nuvem na tela inicial do jogo. Alterado a lógica dos botões "Start" e "Reset" para que apenas apresente 1 na tela dependendo do momento em que o jogo esteja, ou seja, ao entrar no jogo pela primeira vez, irá aparecer o botão "Start" e ao perder no jogo, irá aparecer o botão "Reset", e enquanto o jogo está funcionando não aparece mais nenhum botão. Alterado o PNG do Mario. Corrrigido a animação do pulo do Mario para que apresente somente quando o jogo estiver ocorrendo.

#### Commit 8: Adicionado o logo do Super Mario World, mais uma novem de intro, GIF do Mario morrendo após tocar no Koopa e também um background de GAME OVER. Inserida a interação de o clicar no botão "Start" é removido as nuvens de intro e também o logo do Super Mario World, e, também, ao ocorrer a interação do Mario com o Koopa é feita a troca do background para o GAME OVER e assim que o botão "Reset" é clicado é feita a volta do background para o normal do Mario. Correção dos "px" para interação do Mario e com o Koopa.

#### Commit 9: Adicionada a pontuação do jogo ao lado direito superior zerada ao iniciar o jogo e adicionada também a função do contador desses pontos ao iniciar o jogo, porém até o momento não possuí uma interação que ao parar o jogo para junto a pontuação.

#### Commit 10: Corrigida a pontuação do jogo para que quando o Mario morrer, irá parar a pontuação junto. Adicionada a pontuação do jogo ao reiniciar o mesmo, porém quando o Mario morre a pontuação aparece como 1. Corrigida a função "jump" para que agora ele só pule caso aperte uma das teclas "W", seta para cima (⇧) ou espaço. Corrigida a descrição de como jogar o jogo informando sobre as teclas que precisa pressionar para que o Mario pule. Corrigida a interação entre Mario com o Koopa. Adicionada uma cor de texto na pontuação para que simule quando o Mario coleta a estrela e fica piscando da cor do arco-íris.

#### Commit 11: Corrigida a pontuação do jogo no segundo loop, após apertar o botão "Reset", onde assim que o Mario morrer, irá aparecer a última pontuação do jogo e ao reiniciar novamente ele irá reiniciar a pontuação também. Adicionada uma animação de arco-íris para deixar mais similar a animação do Mario quando ele coleta uma estrela. Adicionada a fonte de texto de vídeo-game. Corrigido o tamanho do jogo e das informações do jogo devido a adição da fonte de texto. Adicionada animação para os botões "Start" e "Reset". Início de responsividade com telas de 1366x768, porém sem alteração do código de javascript até o momento.

#### Commit 12: Adicionado um IF no código de javascript para que assim que identificar que a tela é de até 1366x768 alteração os pixels/rems do Mario, Mario Game-Over, interação do Mario com o Koopa e pulo do Mario.