import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './MyComponents/home/home.component';
import { ServicesComponent } from './MyComponents/services/services.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ContactComponent } from './MyComponents/contact/contact.component';
import { TermsconditionsComponent } from './MyComponents/termsconditions/termsconditions.component';
import { FaqComponent } from './MyComponents/faq/faq.component';
import { ExternalComponent } from './MyComponents/external/external.component';
import { PrivacyComponent } from './MyComponents/privacy/privacy.component';
import { HeaderComponent } from './MyComponents/header/header.component';
import { FooterComponent } from './MyComponents/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    ServicesComponent,
    AboutComponent,
    ContactComponent,
    TermsconditionsComponent,
    FaqComponent,
    ExternalComponent,
    PrivacyComponent,
    HeaderComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
