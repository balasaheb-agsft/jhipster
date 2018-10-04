import { NgModule } from '@angular/core';

import { JhipsterdemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent } from './';

@NgModule({
    imports: [JhipsterdemoSharedLibsModule],
    declarations: [JhiAlertComponent, JhiAlertErrorComponent],
    exports: [JhipsterdemoSharedLibsModule, JhiAlertComponent, JhiAlertErrorComponent]
})
export class JhipsterdemoSharedCommonModule {}
