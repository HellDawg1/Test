import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { ContactListComponent } from './contact-list/contact-list.component';
import { ContactDetailsComponent } from './contact-details/contact-details.component';
import { ContactHomeComponent } from './contact-home/contact-home.component';
import { ContactComponent } from './contact/contact.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';

const appRoutes: Routes = [
  {
    path: '',
    redirectTo: '/contact',
    pathMatch: 'full',
  },
  {
    path: 'contact',
    component: ContactListComponent,
    children: [
      { path: '', component: ContactHomeComponent },
      { path: ':id', component: ContactDetailsComponent },
    ],
  },
];
@NgModule({
  declarations: [
    AppComponent,
    ContactListComponent,
    ContactDetailsComponent,
    ContactComponent,
  ],
  imports: [BrowserModule, FontAwesomeModule, RouterModule.forRoot(appRoutes)],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
