export type ClientEntity = {
    id: number | string;
    name?: string;
    age?: number;
}

export type Client = Omit<ClientEntity, 'id'>;

export interface ClientSchema { 
    name: string;
    age: number;
}