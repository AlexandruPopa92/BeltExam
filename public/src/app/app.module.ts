import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpService } from './http.service';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AllpetsComponent } from './allpets/allpets.component';
import { NewpetComponent } from './newpet/newpet.component';
import { PetdetailComponent } from './petdetail/petdetail.component';
import { PeteditComponent } from './petedit/petedit.component';

@NgModule({
  declarations: [
    AppComponent,
    AllpetsComponent,
    NewpetComponent,
    PetdetailComponent,
    PeteditComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [HttpService],
  bootstrap: [AppComponent]
})
export class AppModule { }
