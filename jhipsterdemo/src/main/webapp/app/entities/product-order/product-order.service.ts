import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';
import * as moment from 'moment';
import { DATE_FORMAT } from 'app/shared/constants/input.constants';
import { map } from 'rxjs/operators';

import { SERVER_API_URL } from 'app/app.constants';
import { createRequestOption } from 'app/shared';
import { IProductOrder } from 'app/shared/model/product-order.model';

type EntityResponseType = HttpResponse<IProductOrder>;
type EntityArrayResponseType = HttpResponse<IProductOrder[]>;

@Injectable({ providedIn: 'root' })
export class ProductOrderService {
    private resourceUrl = SERVER_API_URL + 'api/product-orders';

    constructor(private http: HttpClient) {}

    create(productOrder: IProductOrder): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(productOrder);
        return this.http
            .post<IProductOrder>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    update(productOrder: IProductOrder): Observable<EntityResponseType> {
        const copy = this.convertDateFromClient(productOrder);
        return this.http
            .put<IProductOrder>(this.resourceUrl, copy, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    find(id: number): Observable<EntityResponseType> {
        return this.http
            .get<IProductOrder>(`${this.resourceUrl}/${id}`, { observe: 'response' })
            .pipe(map((res: EntityResponseType) => this.convertDateFromServer(res)));
    }

    query(req?: any): Observable<EntityArrayResponseType> {
        const options = createRequestOption(req);
        return this.http
            .get<IProductOrder[]>(this.resourceUrl, { params: options, observe: 'response' })
            .pipe(map((res: EntityArrayResponseType) => this.convertDateArrayFromServer(res)));
    }

    delete(id: number): Observable<HttpResponse<any>> {
        return this.http.delete<any>(`${this.resourceUrl}/${id}`, { observe: 'response' });
    }

    private convertDateFromClient(productOrder: IProductOrder): IProductOrder {
        const copy: IProductOrder = Object.assign({}, productOrder, {
            date: productOrder.date != null && productOrder.date.isValid() ? productOrder.date.toJSON() : null
        });
        return copy;
    }

    private convertDateFromServer(res: EntityResponseType): EntityResponseType {
        res.body.date = res.body.date != null ? moment(res.body.date) : null;
        return res;
    }

    private convertDateArrayFromServer(res: EntityArrayResponseType): EntityArrayResponseType {
        res.body.forEach((productOrder: IProductOrder) => {
            productOrder.date = productOrder.date != null ? moment(productOrder.date) : null;
        });
        return res;
    }
}