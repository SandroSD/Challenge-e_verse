const options = {
    swaggerDefinition: {
        openapi: "3.0.1",
        info: {
            title: "Fullstack Technical Excersice e-verse",
            version: "1.0.0",
            description:
                "E-Verse Challenge API",
            contact: {
                name: "Sandro Dezerio",
                email: "sdezerio@gmail.com",
            }
        },
        host: 'localhost:8080',
        basePath: '/',
        components: {
            securitySchemes: {
                bearerAuth: {
                    type: 'http',
                    scheme: 'bearer',
                    bearerFormat: 'JWT'
                }
            }
        },
        servers: [
            {
                url: `http://localhost:8080`,
                description: 'Development Server'
            }
        ]
    },
    apis: ["./routes/*.js"]
};

module.exports = options;