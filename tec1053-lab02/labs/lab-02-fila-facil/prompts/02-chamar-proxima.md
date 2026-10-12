# 02 — Incremento 2: chamarProxima

- **Data:** 2026-10-12
- **Autoria:** Nicolas
- **Ferramenta:** Claude Code (extensão do VS Code)
- **Modelo:** Claude Opus 5.5
- **Trilha:** nuvem
- **Requisito ou critério alvo:** RF-03 e RF-04

## O que foi pedido

> Certo, vamos começar a parte de chamar proxima, o objetivo é que os testes de 11
> ao 19 e depois aplicaremos o procedimento para analisar e ver as mudanças obtidas

## Contexto fornecido

A mesma conversa do incremento 1: os dois AGENTS.md, a ESPECIFICACAO.md,
src/fila.js (já com emitirSenha implementada) e tests/casos.js.

## O que veio

Antes de editar, o agente confirmou a minha expectativa e acrescentou que o
teste 24 ("mil emissões e chamadas") também passaria, porque ele só usa emitir
e chamar. Os testes 20 a 23 dependem de reiniciarFila.

Depois o agente:

1. rodou a suíte para registrar o ponto de partida (10 aprovados · 14 falhas);
2. alterou somente o corpo de chamarProxima em src/fila.js;
3. rodou a suíte de novo (20 aprovados · 4 falhas);
4. mostrou o git diff de fila.js e o git diff de tests/ (vazio).

## O que eu fiz com isso

Aceitei como veio, depois de conferir por conta própria:

- recarreguei a página de testes no navegador e vi 20 aprovados · 4 falhas;
- fiz o roteiro visual, incluindo chamar com a fila vazia;
- rodei git diff e git status no meu terminal.
