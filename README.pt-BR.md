[English](README.md) · [简体中文](README.zh-CN.md) · [Español](README.es.md) · [Português (Brasil)](README.pt-BR.md) · [日本語](README.ja.md)

# Witch’s Candy Blocks — Puzzle de blocos de Halloween e pedidos de poções

🍬 Uma bruxa trouxe doces de formatos curiosos, e o caldeirão espera sua melhor ideia. **Witch’s Candy Blocks** é um puzzle de Halloween sobre abrir espaço em um tabuleiro 8×8. Encaixe formas, complete linhas e colunas e transforme cada limpeza em um pouco de magia da meia-noite.

**[Jogar agora](https://halloween-block-blast.crazy3d.org/)** · [Ver os 12 jogos de Halloween](https://github.com/AshinTop/halloween-games) · [⭐ Dar uma estrela no GitHub](https://github.com/AshinTop/halloween-block-blast)

O README está disponível em cinco idiomas. A **interface do jogo oferece apenas inglês e chinês simplificado**.

![Tabuleiro oito por oito, bandeja de três peças, alvos com teias e caldeirão de Witch’s Candy Blocks](docs/images/gameplay.jpg)

## O que torna este jogo especial

- Tabuleiro **8×8** e bandeja com três peças. Linhas e colunas completas somem juntas; uma casa na interseção conta uma vez.
- **Classic** para buscar pontuações maiores e **cinco Potion Orders fixos**, todos com soluções completas verificadas.
- Arrastar e soltar, selecionar e tocar, controles de teclado e prévias de encaixe e das linhas que serão concluídas.
- Um **Moon Rewind** por partida restaura toda a colocação anterior, incluindo pontos, bandeja, objetivos e sequência aleatória.
- Arte original de doces, teias, frascos e caldeirão; sons opcionais, movimento reduzido e progresso local.

## Como jogar

Escolha uma forma e coloque-a inteira dentro do tabuleiro, sem sobrepor casas ocupadas. Preencha as oito casas de uma linha ou coluna para limpá-la. **As cores não precisam combinar e as peças não giram.** Não existe cronômetro de queda. A próxima bandeja só chega quando as três peças atuais forem usadas.

No **Classic**, continue abrindo espaço e aumentando a pontuação. Cada 12 linhas completas enchem outro frasco. A partida acaba quando nenhuma das peças restantes pode ser colocada, não apenas quando uma forma específica fica difícil.

Nos **Potion Orders**, limpe todos os doces que começaram com teias antes de gastar o limite de colocações. Doces recém-colocados não viram novos alvos. Os cinco puzzles exploram linhas simples, linhas em pares, cruzamentos, planejamento das três peças e finais com duas linhas. Tabuleiros e sequências são fixos.

**Moon Rewind** pode ser usado uma vez por partida. Ele recupera a última colocação mesmo após ficar sem espaço, mas não desfaz um pedido já concluído. Reiniciar abre outra tentativa; o recurso não é um desfazer ilimitado.

## Controles

| Ação | Como fazer |
| --- | --- |
| Selecionar uma peça | Tocar na bandeja ou usar **1 / 2 / 3** |
| Colocar | Arrastar ou tocar na casa do canto superior esquerdo da forma |
| Colocação pelo teclado | Setas movem o cursor; **Enter** coloca |
| Moon Rewind | **Z** ou o botão de retorno |
| Modo, pedido, reinício e ajuda | Botões ou menu compacto; o teclado precisa de foco no iframe |

## Um pouco de estratégia

Observe as três formas antes de ocupar a maior área vazia. Uma limpeza pequena e atraente pode deixar a próxima peça sem lugar. Nos pedidos, priorize as teias originais, não todas as casas coloridas. Confira a prévia antes de soltar e guarde Moon Rewind para uma colocação cujas consequências surpreenderam você.

## Progresso e links de desafios

Quando permitido, o navegador guarda a partida Classic incompleta, o recorde, os pedidos terminados e as preferências. Não existe sincronização entre dispositivos. O [pedido 3](https://halloween-block-blast.crazy3d.org/#order=3) abre aquele desafio fixo; valores de 1 a 5 escolhem os outros. Compartilhar copia o resultado real e um link, não uma gravação ou tabuleiro enviado a um servidor. Se a cópia for bloqueada, o texto fica disponível manualmente.

## Capturas de tela e vídeo de apresentação

![Layout compacto com tabuleiro, bandeja, progresso do pedido e Moon Rewind](docs/images/mobile.jpg)

Captura real em um iframe compacto. Ela mostra o layout em uma janela pequena, não um teste em celular físico.

[Player de vídeo e transcrição](https://halloween-block-blast.crazy3d.org/intro.html) · [Baixar o MP4](docs/media/intro.mp4)

A **apresentação de 24 segundos, sem áudio**, combina capturas reais e legendas. É um passeio visual, não uma partida gravada continuamente nem uma demonstração sonora.

## Perguntas frequentes

### É um jogo de combinar três?

A ideia é encaixar formas para completar linhas e colunas. A cor é decorativa; você não troca doces vizinhos. Para esse estilo, experimente Witch’s Potion Match nos links abaixo.

### Por que a bandeja não foi renovada?

É preciso usar as três peças do lote atual. Planeje para a forma difícil, não apenas para as mais fáceis.

### O que Moon Rewind recupera?

Tabuleiro, bandeja, pontuação, linhas, alvos e estado aleatório anteriores à colocação. Existe apenas um por partida, então não dá para repetir indefinidamente todas as opções.

## Executar localmente e incorporar

Inicie um servidor HTTP na raiz do repositório:

```sh
python3 -m http.server 4173
```

Abra **http://localhost:4173/**. Não é preciso compilar nem instalar dependências. Use HTTP: `file://` pode bloquear módulos JavaScript.

Execute as verificações incluídas com Node:

```sh
npm test
```

Os testes verificam colocações rejeitadas, cruzamentos simultâneos, renovação da bandeja, estados finais, geração determinística, as cinco soluções e os dados Classic salvos. Não exigem compilação nem instalação de dependências.

```html
<iframe src="https://halloween-block-blast.crazy3d.org/?embed=1"
  title="Witch’s Candy Blocks"
  style="display:block;width:100%;height:654px;border:0"
  allow="fullscreen" allowfullscreen></iframe>
```

A área de desktop tem **654 px** de altura. Foram revisadas janelas de 1160×654, 390×650 e 844×340, incluindo concluir um pedido e usar o retorno. A bandeja fica ao lado ou abaixo do tabuleiro; diálogos podem rolar internamente.

Veja [EMBEDDING.md](EMBEDDING.md) para tamanho, armazenamento, foco e permissões. Meça a altura disponível após a barra do site principal.

## Mais pequenas aventuras de Halloween

- **[Witch’s Potion Match](https://halloween-potion-match.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-potion-match) — Troque ingredientes, forme cascatas e acenda as velas da receita.
- **[Pumpkin 2048](https://halloween-2048.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-2048) — Junte abóboras numeradas e resolva desafios com casas-alvo.
- **[Trick-or-Treat TriPeaks](https://halloween-tripeaks.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-tripeaks) — Encadeie cartas de valores consecutivos em oito resgates.
- **[Haunted Hearts](https://halloween-love-game.crazy3d.org/)** · [Código](https://github.com/AshinTop/halloween-love-game) — Ajude dois fantasmas a dividir portas, caminhos e uma lanterna.

## Créditos e apoio

Criado para **AshinTop** e **Midnight Candy Club**, com design, programação e revisão conduzidos por pessoas com auxílio de IA. Arte e sons sintetizados originais do projeto. Dispensa conta remota; a hospedagem pode adicionar scripts ou registros de acesso.

Gostou? **[Deixe uma estrela no GitHub](https://github.com/AshinTop/halloween-block-blast)**. Para relatar problemas, inclua navegador, tamanho do iframe, link e passos para reproduzi-los.
