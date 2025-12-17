export default function getSintax(err, req, res, next) {
    if (err instanceof SyntaxError && err.status === 400 && "body" in err) {
        return res.status(400).json({
            error: "JSON inválido",
            message: "Verifique a estrutura do JSON enviado"
        });
    }

    next(err);
};
