//swaggerConfig.ts

const swaggerOptions: object = {
    swaggerDefinition: {
        openapi: '3.0.0',
        info: {
            title: 'Oontop Health API',
            version: '1.0.0',
            description: 'API Documentation for Oontop Health Final PMI and Dashboard',
        },
        servers: [
            {
                url: 'http://localhost:8080',
            },
        ],
        components: {
            schemas: {
                Patient: {
                    type: "object",
                    required: ["id", "name", "dateOfBirth"],
                    properties: {
                        id: {
                            type: "string",
                            description: "The auto-generated id of the patient"
                        },
                        name: {
                            type: "string",
                            description: "The name of the patient"
                        },
                        dateOfBirth: {
                            type: "string",
                            format: "date",
                            description: "The date of birth of the patient"
                        }
                    }
                },
                MergedPatient: {
                    type: "object",
                    required: ["id", "name", "dateOfBirth"],
                    properties: {
                        id: {
                            type: "string",
                            description: "The auto-generated id of the merged patient"
                        },
                        name: {
                            type: "string",
                            description: "The name of the merged patient"
                        },
                        dateOfBirth: {
                            type: "string",
                            format: "date",
                            description: "The date of birth of the merged patient"
                        }
                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts'],
};

export default swaggerOptions;
