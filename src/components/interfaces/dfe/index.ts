import { Address } from "cluster";

export interface NFCe {
    documentIdentification: DocumentIdentification;
    recipient: Recipient;
    receivingProtocol: ReceivingProtocol;
    payments: Payment[]
}

export interface DocumentIdentification {
    number: string;
    series: string;
    emissionDate: string;
}

export interface Emitting {
    taxIdentificationNumber: string;
    companyName: string;
    address: Address;
}

export interface Address {
    street: string;
    number: string;
    complement: string;
    district: string;
    city: string;
    state: string;
    stateCode: string;
    zipCode: string;
    countryCode: string;
    country: string;
    telephone: string;
}

export interface Recipient {
    taxIdentificationNumber: string;
    name: string;
    isForeign: boolean;
}

export interface ReceivingProtocol {
    key: string;
    number: string;
    date: string;
}

export interface Payment {
    method: string;
    value: string   
}