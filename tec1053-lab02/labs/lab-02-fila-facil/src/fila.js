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
    // TODO: RF-02. Atualize o estado recebido e retorne o número emitido.
    throw new Error("LAB02_PENDENTE: emitirSenha");
  }

  function chamarProxima(estado) {
    // TODO: RF-03 e RF-04. A fila vazia não deve apagar a senha atual.
    throw new Error("LAB02_PENDENTE: chamarProxima");
  }

  function reiniciarFila(estado) {
    // TODO: RF-05. Restaure os campos do mesmo objeto.
    throw new Error("LAB02_PENDENTE: reiniciarFila");
  }

  globalThis.FilaFacil = Object.freeze({
    criarEstado, formatarSenha, emitirSenha, chamarProxima, reiniciarFila,
  });
})();
