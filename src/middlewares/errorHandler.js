export default function errorHandler(err, req, res, next) {
    console.error("🔥 ERRO CAPTURADO:", err);

    // Erros lançados manualmente (service / controller)
    if (err instanceof Error) {
        return res.status(400).json({
            success: false,
            error: err.message
        });
    }

    // Fallback absoluto (não deveria chegar aqui)
    return res.status(500).json({
        success: false,
        error: "Erro interno do servidor"
    });
}
