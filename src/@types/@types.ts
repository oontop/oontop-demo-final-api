
/////Patient type/////
export type IPatientInput = {

    firstName: string;
    lastName: string;
    patientDOB: string;
    patientGender: string;
    patientZipCode: string;
    providers: string;
    providerURL: string;
    treatmentDate: string;
    startTime: string;
    endTime: string;
    features: string;
    meetingType: string;
    dayStart: string;
    dayEnd: string;
    url: string;
    userActivity: string;
    comments: string;
    treatmentDuration?: number;


};

export type IPatient = IPatientInput & {

    _id: string,
    bizNumber: Number,
    createdAt: Date,

};

export type IMergedPatient = {
    _id: string,
    firstName: string;
    lastName: string;
    patientDOB: string;
    patientGender: string;
    patientZipCode: string;
    providers: string;
    providerURL: string;
    treatmentDate: string;
    treatmentDuration: number;
    startTime: string;
    endTime: string;
    features: string;
    dayStart: string;
    dayEnd: string;
    meetingType: string;
    url: string;
    userActivity: string;
    comments: string;
};


