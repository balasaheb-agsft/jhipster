import { Moment } from 'moment';
import { IProduct } from 'app/shared/model//product.model';
import { ICustomer } from 'app/shared/model//customer.model';

export interface IProductOrder {
    id?: number;
    date?: Moment;
    totalCost?: number;
    products?: IProduct[];
    customer?: ICustomer;
}

export class ProductOrder implements IProductOrder {
    constructor(
        public id?: number,
        public date?: Moment,
        public totalCost?: number,
        public products?: IProduct[],
        public customer?: ICustomer
    ) {}
}
