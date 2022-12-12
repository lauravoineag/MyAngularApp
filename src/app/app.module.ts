import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { ProductListComponent } from "./products/product-list.component";
import { ConvertToSpacesPipe } from './products/convert-to-spaces.pipe';

@NgModule({
    declarations: [
        AppComponent,
        ProductListComponent,
        ConvertToSpacesPipe
    ],
    providers: [],
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FormsModule
    ]
})
export class AppModule { }
 