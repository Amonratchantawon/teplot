import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomePageRoutingModule } from './home-page-routing.module';
import { HomePageComponent } from './home-page.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MatDatepickerModule, MatDatepicker, MatToolbarModule, MatIconModule, MatCardModule, MatNativeDateModule, MatRadioModule, MatSelectModule, MatOptionModule, MatSlideToggleModule, ErrorStateMatcher, ShowOnDirtyErrorStateMatcher, MatSidenavModule, MatInputModule, MatStepperModule, MatButtonModule, MatGridListModule } from '@angular/material';
import { MatFormFieldModule, MatFormField } from '@angular/material/form-field';
import { CdkStepperModule } from '@angular/cdk/stepper';

@NgModule({
    declarations: [HomePageComponent],
    imports: [
        CommonModule,
        HomePageRoutingModule,
        ReactiveFormsModule,
        FormsModule,
        MatFormFieldModule,
        MatInputModule,
        MatStepperModule,
        CdkStepperModule,
        MatButtonModule,
        MatCardModule,
        MatDatepickerModule,        // <----- import(must)
        MatNativeDateModule,        // <----- import for date formating(optional)
        MatGridListModule
    ],
})
export class HomePageModule {

}
