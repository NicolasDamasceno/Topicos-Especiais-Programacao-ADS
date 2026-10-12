/* Lab 02: implemente os três corpos marcados. Contrato em ESPECIFICACAO.md. */
(() => {
  "use strict";

  function criarEstado() {
    return { proximaSenha: 1, aguardando: [], atual: null, totalChamadas: 0 };
  }

  function formatarSenha(numero) {
    return numero === null ? "—" : `N${String(numero).padStart(3, "0")}`;
  }

  function emitirSenha(estado) {
    // RF-02: a senha entra no fim da espera; atual e totalChamadas não mudam.
    const senha = estado.proximaSenha;
    estado.aguardando.push(senha);
    estado.proximaSenha += 1;
    return senha;
  }

  function chamarProxima(estado) {
    // RF-04: fila vazia retorna null sem alterar nada, preservando a senha atual.
    if (estado.aguardando.length === 0) return null;
    // RF-03: FIFO — sai a primeira que chegou; só chamadas efetivas contam.
    const senha = estado.aguardando.shift();
    estado.atual = senha;
    estado.totalChamadas += 1;
    return senha;
  }

  function reiniciarFila(estado) {
    // RF-05: restaura os valores iniciais no mesmo objeto; a confirmação é da interface.
    Object.assign(estado, criarEstado());
  }

  globalThis.FilaFacil = Object.freeze({
    criarEstado, formatarSenha, emitirSenha, chamarProxima, reiniciarFila,
  });
})();
