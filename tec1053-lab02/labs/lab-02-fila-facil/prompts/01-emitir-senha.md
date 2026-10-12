# 01 — Incremento 1: emitirSenha

- **Data:** 2026-10-12
- **Autoria:** Nicolas
- **Ferramenta:** Claude Code (extensão do VS Code)
- **Modelo:** Claude Opus 5.5
- **Trilha:** nuvem
- **Requisito ou critério alvo:** RF-02

## O que foi pedido

> Okay, funcionou, agora vamos mexer no emitir senha, o objetivo é que seja
> resolvido do teste 7 ao 16 por agora

## Contexto fornecido

A conversa já tinha lido os dois AGENTS.md, a ESPECIFICACAO.md, src/fila.js
e tests/casos.js. A aplicação estava rodando em http://127.0.0.1:8000/.

## O que veio

Antes de editar, o agente corrigiu a minha expectativa: só emitirSenha faz passar
os testes 7 a 10, e não até o 16. Os testes 11 a 16 também chamam chamarProxima.
Eu tinha me confundido porque esses testes mostravam o erro "LAB02_PENDENTE: emitirSenha".

Depois o agente:

1. rodou a suíte pelo Node para registrar a linha de base (6 aprovados · 18 falhas);
2. alterou somente o corpo de emitirSenha em src/fila.js;
3. rodou a suíte de novo (10 aprovados · 14 falhas);
4. mostrou o git diff de fila.js e o git diff de tests/ (vazio).

## O que eu fiz com isso

Aceitei como veio, depois de conferir por conta própria:

- recarreguei a página de testes no navegador e vi 10 aprovados · 14 falhas;
- fiz o roteiro visual (3 senhas emitidas: N001, N002, N003; atual "—"; espera 3; chamadas 0);
- rodei git diff no meu terminal e vi que só a função emitirSenha mudou.
