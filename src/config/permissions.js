export const PERMISSIONS = Object.freeze({

    /* ==========================
       AUTENTICAÇÃO
    ========================== */
    LOGIN: 0,
    LOGOUT: 1,
    CADASTRO: 2,
    RECUPERAR_SENHA: 3,
    ALTERAR_SENHA: 4,
    VER_PERFIL: 5,
    EDITAR_PERFIL: 6,
    GERENCIAR_SESSOES: 7,

    /* ==========================
       CLIENTE
    ========================== */
    VER_CARDAPIO: 10,
    CRIAR_PEDIDO: 11,
    CANCELAR_PEDIDO: 12,
    AVALIAR_PEDIDO: 13,
    VER_STATUS_PEDIDO: 14,
    GERENCIAR_ENDERECOS: 15,
    GERENCIAR_PAGAMENTOS: 16,
    VER_HISTORICO_PEDIDOS: 17,
    GERENCIAR_FAVORITOS: 18,
    INSCRICAO_NEWSLETTER: 19,

    /* ==========================
       ATENDIMENTO
    ========================== */
    VER_PEDIDOS: 20,
    ATUALIZAR_STATUS_PEDIDO: 21,
    ATRIBUIR_MESA: 22,
    CRIAR_PEDIDO_MESA: 23,
    FECHAR_CONTA: 24,
    GERENCIAR_RESERVAS: 25,

    /* ==========================
       COZINHA
    ========================== */
    VER_FILA_COZINHA: 30,
    FINALIZAR_PREPARO: 31,

    /* ==========================
       ESTOQUE
    ========================== */
    VER_ESTOQUE: 40,
    ATUALIZAR_ESTOQUE: 41,

    /* ==========================
       CAIXA / FINANCEIRO
    ========================== */
    ABRIR_CAIXA: 50,
    FECHAR_CAIXA: 51,
    REGISTRAR_PAGAMENTO: 52,
    VER_RELATORIOS: 53,

    /* ==========================
       ADMINISTRAÇÃO
    ========================== */
    GERENCIAR_FUNCIONARIOS: 60,
    GERENCIAR_FILIAIS: 61,
    GERENCIAR_CARDAPIO: 62,
    GERENCIAR_PERMISSOES: 63,

    /* ==========================
       SUPER PODER
    ========================== */
    ADMIN: 99
});
