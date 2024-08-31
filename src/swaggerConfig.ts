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
                    required: ["_id", "firstName", "lastName", "patientDOB"],
                    properties: {
                        _id: {
                            type: "string",
                            description: "The auto-generated id of the patient"
                        },
                        firstName: {
                            type: "string",
                            description: "The first name of the patient"
                        },
                        lastName: {
                            type: "string",
                            description: "The last name of the patient"
                        },
                        patientDOB: {
                            type: "string",
                            format: "date",
                            description: "The date of birth of the patient"
                        },
                        patientGender: {
                            type: "string",
                            description: "The gender of the patient"
                        },
                        patientZipCode: {
                            type: "string",
                            description: "The zip code of the patient"
                        },
                        providers: {
                            type: "string",
                            description: "The healthcare providers associated with the patient"
                        },
                        providerURL: {
                            type: "string",
                            description: "The URL of the provider"
                        },
                        treatmentDate: {
                            type: "string",
                            format: "date",
                            description: "The date of the treatment"
                        },
                        treatmentDuration: {
                            type: "number",
                            description: "The duration of the treatment in minutes"
                        },
                        startTime: {
                            type: "string",
                            description: "The start time of the treatment"
                        },
                        endTime: {
                            type: "string",
                            description: "The end time of the treatment"
                        },
                        features: {
                            type: "string",
                            description: "Features or special notes about the patient"
                        },
                        dayStart: {
                            type: "string",
                            description: "The start of the day for the patient"
                        },
                        dayEnd: {
                            type: "string",
                            description: "The end of the day for the patient"
                        },
                        meetingType: {
                            type: "string",
                            description: "The type of meeting or session"
                        },
                        url: {
                            type: "string",
                            description: "URL for the patient's meeting or session"
                        },
                        userActivity: {
                            type: "string",
                            description: "The activity or actions performed by the user"
                        }

                    }
                },
                MergedPatient: {
                    type: "object",
                    required: ["_id", "firstName", "lastName", "patientDOB"],
                    properties: {
                        _id: {
                            type: "string",
                            description: "The auto-generated id of the merged patient"
                        },
                        firstName: {
                            type: "string",
                            description: "The first name of the merged patient"
                        },
                        lastName: {
                            type: "string",
                            description: "The last name of the merged patient"
                        },
                        patientDOB: {
                            type: "string",
                            format: "date",
                            description: "The date of birth of the merged patient"
                        },
                        patientGender: {
                            type: "string",
                            description: "The gender of the merged patient"
                        },
                        patientZipCode: {
                            type: "string",
                            description: "The zip code of the merged patient"
                        },
                        providers: {
                            type: "string",
                            description: "The healthcare providers associated with the merged patient"
                        },
                        providerURL: {
                            type: "string",
                            description: "The URL of the provider"
                        },
                        treatmentDate: {
                            type: "string",
                            format: "date",
                            description: "The date of the treatment"
                        },
                        treatmentDuration: {
                            type: "number",
                            description: "The duration of the treatment in minutes"
                        },
                        startTime: {
                            type: "string",
                            description: "The start time of the treatment"
                        },
                        endTime: {
                            type: "string",
                            description: "The end time of the treatment"
                        },
                        features: {
                            type: "string",
                            description: "Features or special notes about the merged patient"
                        },
                        dayStart: {
                            type: "string",
                            description: "The start of the day for the merged patient"
                        },
                        dayEnd: {
                            type: "string",
                            description: "The end of the day for the merged patient"
                        },
                        meetingType: {
                            type: "string",
                            description: "The type of meeting or session"
                        },
                        url: {
                            type: "string",
                            description: "URL for the merged patient's meeting or session"
                        },
                        userActivity: {
                            type: "string",
                            description: "The activity or actions performed by the user"
                        }

                    }
                }
            }
        }
    },
    apis: ['./src/routes/*.ts'],
};

export default swaggerOptions;

