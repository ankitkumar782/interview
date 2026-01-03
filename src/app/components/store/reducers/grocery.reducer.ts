import { createReducer } from "@ngrx/store";

export interface Grocery {
    id: number;
    name: string;   
    quantity: number;
}

const initialState: Grocery[] = [
    { id: 1, name: 'Apples', quantity: 10 },    
    { id: 2, name: 'Bananas', quantity: 5 },
    { id: 3, name: 'Oranges', quantity: 8 },
    { id: 4, name: 'Grapes', quantity: 12 },
    { id: 5, name: 'Mangoes', quantity: 6 }]

    
export const grocreducer=createReducer(initialState)