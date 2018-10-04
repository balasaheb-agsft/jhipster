import { IProductOrder } from 'app/shared/model//product-order.model';

export const enum ProductState {
    SOLIDS = 'SOLIDS',
    LIQUIDS = 'LIQUIDS',
    GASES = 'GASES',
    PLASMA = 'PLASMA'
}

export interface IProduct {
    id?: number;
    name?: string;
    productState?: ProductState;
    productOrder?: IProductOrder;
}

export class Product implements IProduct {
    constructor(public id?: number, public name?: string, public productState?: ProductState, public productOrder?: IProductOrder) {}
}
