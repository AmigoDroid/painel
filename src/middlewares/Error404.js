export default function error404(req, res) {
    res.status(404).json({
        error: "Recurso não encontrado",
        message: `A rota ${req.originalUrl} não existe no servidor`
    });
}