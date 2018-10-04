import { IProductOrder } from 'app/shared/model//product-order.model';

export interface ICustomer {
    id?: number;
    name?: string;
    address?: string;
    productOrders?: IProductOrder[];
}

export class Customer implements ICustomer {
    constructor(public id?: number, public name?: string, public address?: string, public productOrders?: IProductOrder[]) {}
}
