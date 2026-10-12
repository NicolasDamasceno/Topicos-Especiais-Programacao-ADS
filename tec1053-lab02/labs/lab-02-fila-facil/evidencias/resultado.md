# Resultado — Lab 02 Fila Fácil

- **Data:** 2026-10-12
- **Autoria:** Nicolas
- **Dupla:** individual
- **Ferramenta e modelo:** Claude Code (extensão do VS Code) · Claude Opus 5.5
- **Trilha:** nuvem (rota A, agente com ferramentas)
- **Ambiente:** Windows 11 Home · Python 3.13.16 via uv 0.13.0 · Node (opcional,
  usado para rodar a suíte no terminal) · sem modelo local
- **Tempo total da sessão:** cerca de 1h40min (das 14:36, quando a pasta da
  atividade foi criada, às 16:17, horário do commit do fluxo básico)

## Problemas de ambiente antes de começar

| Sintoma | Tipo de falha | Causa | O que foi feito |
|---|---|---|---|
| `uv : O termo 'uv' não é reconhecido...` | Ambiente | uv não estava instalado | Instalado com o comando oficial de docs/instalacao.md; terminal reaberto |
| 404 Not Found em `/` e `/tests/` | Ambiente | Servidor iniciado na pasta de cima, onde `labs/lab-02-fila-facil` não existe | Ctrl+C, `cd tec1053-lab02` e servidor iniciado de novo |

Nenhum dos dois era problema no código.

## Ponto de partida

Saída de `node labs/lab-02-fila-facil/tests/executar.mjs` no esqueleto:

    6 aprovados · 18 falhas · 24 testes

## Incremento 1 — emitirSenha (RF-02)

Saída depois de implementar emitirSenha:

    10 aprovados · 14 falhas · 24 testes

Os testes 7 a 10 (RF-02) passaram. Os testes 11 a 16 continuam falhando, agora com
"LAB02_PENDENTE: chamarProxima", o que é esperado nesta etapa.

| Métrica | Valor |
|---|---|
| Testes passando antes | 6 / 24 |
| Testes passando depois | 10 / 24 |
| Rodadas até passar | 1 |
| Correções manuais necessárias | 0 no código |

**Roteiro visual:** 3 cliques em "Retirar senha" → fila N001, N002, N003;
painel atual "—"; espera 3; total de chamadas 0. ✅

**Conferência com git (feita por mim, no terminal):**

- `git diff -- labs/lab-02-fila-facil/src/fila.js` → só a função emitirSenha mudou
- `git diff -- labs/lab-02-fila-facil/tests` → vazio
- `git status --short` → só fila.js modificado

**O que precisou de retrabalho:** no código, nada. A IA acertou na primeira tentativa.
A correção foi na minha expectativa: eu achava que emitirSenha resolveria os testes
7 a 16, mas os testes 11 a 16 dependem de chamarProxima. O agente apontou isso antes de editar.

## Incremento 2 — chamarProxima (RF-03 e RF-04)

Ponto de partida (igual ao fim do incremento 1, então nada quebrou entre as etapas):

    10 aprovados · 14 falhas · 24 testes

Saída depois de implementar chamarProxima:

    20 aprovados · 4 falhas · 24 testes

- Testes 1 a 10: continuam passando (sem regressão em emitirSenha).
- Testes 11 a 19 (RF-02, RF-03, RF-04): passaram.
- Teste 24 (mil emissões e chamadas sem duplicação): passou.
- Testes 20 a 23: falham com "LAB02_PENDENTE: reiniciarFila", o que é esperado nesta etapa.

| Métrica | Valor |
|---|---|
| Testes passando antes | 10 / 24 |
| Testes passando depois | 20 / 24 |
| Rodadas até passar | 1 |
| Correções manuais necessárias | 0 no código |

**Roteiro visual:**

| Ação | Resultado observado |
|---|---|
| 3× "Retirar senha" | Fila N001, N002, N003 ✅ |
| 1× "Chamar próxima" | Atual N001; espera N002, N003; quantidade 2; total 1 ✅ |
| Chamar mais 2× | Atual N003; espera vazia; total 3 ✅ |
| Chamar com a fila vazia | Painel continua N003; total continua 3; aviso "Não há senhas aguardando." ✅ |

**Conferência com git (feita por mim, no terminal):**

- `git diff -- labs/lab-02-fila-facil/src/fila.js` → mostra emitirSenha e chamarProxima.
  As duas aparecem porque ainda não houve commit depois do incremento 1; não é mudança extra.
- `git diff -- labs/lab-02-fila-facil/tests` → vazio
- `git status --short` → só fila.js modificado, mais os registros em prompts/ e evidencias/

**O que precisou de retrabalho:** no código, nada. A IA acertou na primeira tentativa.
Desta vez a minha expectativa (testes 11 a 19) estava certa; o agente só
acrescentou que o teste 24 também passaria.

## Incremento 3 — reiniciarFila (RF-05)

Ponto de partida (igual ao fim do incremento 2):

    20 aprovados · 4 falhas · 24 testes

Saída depois de implementar reiniciarFila:

    24 aprovados · 0 falhas · 24 testes

- Testes 1 a 19 e 24: continuam passando (sem regressão).
- Testes 20 a 23 (RF-05 e RF-07): passaram.
- Nenhum marcador LAB02_PENDENTE restante em src/fila.js.

| Métrica | Valor |
|---|---|
| Testes passando antes | 20 / 24 |
| Testes passando depois | 24 / 24 |
| Rodadas até passar | 1 |
| Correções manuais necessárias | 0 no código |

**O que precisou de retrabalho:** no código, nada. A IA acertou na primeira tentativa.

## Verificação final — roteiro visual completo

| # | Ação | Resultado observado |
|---|---|---|
| 1 | Recarregar a aplicação | "—", espera 0, chamadas 0 ✅ |
| 2 | Emitir 3 senhas | N001, N002, N003, sem chamada automática ✅ |
| 3 | Chamar uma | N001 atual; N002 e N003 aguardando; total 1 ✅ |
| 4 | Emitir outra | N004 entrou no fim da espera ✅ |
| 5 | Chamar até esvaziar | Ordem N002, N003, N004; total 4 ✅ |
| 6 | Chamar com a fila vazia | Continuou N004 e total 4; apareceu o aviso ✅ |
| 7 | Reiniciar → Cancelar | Os dados se mantiveram ✅ |
| 8 | Reiniciar → Confirmar | Tudo limpo; a próxima emissão foi N001 ✅ |
| 9 | Tab e Enter | Funcionou em todos os botões ✅ |
| 10 | Recarregar / outra aba | Sessão nova e vazia; abas não sincronizam ✅ |

**Conferência com git (feita por mim, no terminal):**

- `git diff -- labs/lab-02-fila-facil/tests` → vazio
- `git status --short` → só src/fila.js modificado, mais os registros em prompts/ e evidencias/

## Capturas

| Captura | O que mostra |
|---|---|
| [01-fila-em-uso.png](capturas/01-fila-em-uso.png) | N003 em atendimento; N004 e N005 na espera; 3 senhas chamadas; última emitida N005 |
| [02-dialogo-reinicio.png](capturas/02-dialogo-reinicio.png) | Diálogo "Reiniciar a fila?" com as opções Cancelar e "Sim, reiniciar" |
| [03-apos-reinicio.png](capturas/03-apos-reinicio.png) | Depois de confirmar: painel "—", espera 0, 0 chamadas e o aviso "Demonstração reiniciada. A próxima senha será N001." |
| [04-testes-24-aprovados.png](capturas/04-testes-24-aprovados.png) | Página de testes no navegador: "24 aprovados · 0 falhas · 24 testes" |

## Arquivos alterados

- `labs/lab-02-fila-facil/src/fila.js`: corpos de emitirSenha, chamarProxima e reiniciarFila
- `labs/lab-02-fila-facil/prompts/`: 01, 02 e 03
- `labs/lab-02-fila-facil/evidencias/`: este arquivo e as capturas

Nenhuma alteração em tests/, na interface, na especificação ou no Lab 01.

## Uma decisão de implementação

Em chamarProxima, a verificação de fila vazia vem antes de qualquer alteração.
Se a função tirasse a senha da fila direto, com a fila vazia ela receberia
"undefined" e apagaria a senha do painel, o que viola o RF-04.

## Intervenção humana

Não houve intervenção que mudasse o código: as três funções passaram na primeira
tentativa. As intervenções foram:

- no ambiente: decidi corrigir o uv ausente e o servidor iniciado na pasta errada
  antes de seguir;
- na conferência: em cada incremento, eu mesmo recarreguei os testes, fiz o roteiro
  visual e rodei git diff no meu terminal antes de aceitar a mudança.

## Dúvidas e limitações

- Fiz a atividade sozinho, então não houve a troca de papéis pedida pelo tutorial:
  quem implementou com a IA e quem revisou fui eu.

## O que eu entendi do código

Eu entendi que é um software para chamada de senha. Apesar de ser simples, possui
muitas pequenas validações para serem feitas, como o formato da senha: a letra N e
pelo menos 3 algarismos, sem cortar depois de 999 (N1000), entre outras. É um teste
muito bom para usar a IA e para o humano responsável validar cada ciclo.

**emitirSenha:** quando uma senha é emitida, o contador (proximaSenha) aumenta 1,
para que a emissão seguinte pule para o próximo número.

**chamarProxima:** primeiro verifica se o tamanho da lista de espera é igual a 0.
Se for, a função não altera o estado e mantém a senha atual no painel.
