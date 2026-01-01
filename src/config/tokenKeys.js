const TOKEN_KEYS = {
    JWT_SECRET: process.env.JWT_SECRET || "default_secret_key",
    NODE_ENV: process.env.NODE_ENV || "production",//development
    PORT: process.env.PORT || 3000,
    POSTGRES_HOST: process.env.POSTGRES_HOST || "localhost",
    POSTGRES_PORT: process.env.POSTGRES_PORT || "5432",
    POSTGRES_USER: process.env.POSTGRES_USER || "postgres",
    POSTGRES_PASSWORD: process.env.POSTGRES_PASSWORD || "5824",
    POSTGRES_DB: process.env.POSTGRES_DB || "ProntoDelivery_DB"
}
export { TOKEN_KEYS };