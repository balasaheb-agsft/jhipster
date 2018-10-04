import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';

import { JhipsterdemoProductModule } from './product/product.module';
import { JhipsterdemoProductOrderModule } from './product-order/product-order.module';
import { JhipsterdemoCustomerModule } from './customer/customer.module';
/* jhipster-needle-add-entity-module-import - JHipster will add entity modules imports here */

@NgModule({
    // prettier-ignore
    imports: [
        JhipsterdemoProductModule,
        JhipsterdemoProductOrderModule,
        JhipsterdemoCustomerModule,
        /* jhipster-needle-add-entity-module - JHipster will add entity modules here */
    ],
    declarations: [],
    entryComponents: [],
    providers: [],
    schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class JhipsterdemoEntityModule {}
