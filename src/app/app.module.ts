import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router'; // adicionar
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http'; // adicionar
import { FormsModule } from '@angular/forms'; // adicionar
import { ReactiveFormsModule} from '@angular/forms' // adicionar

import { AuthGaurdService } from './service/auth-gaurd.service'; // adicionar
import { JwtInterceptor } from './service/jwt-interceptor'; // adicionar
import { ErrorInterceptor } from './service/error-interceptor '; // adicionar

//material design
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatRadioModule } from '@angular/material/radio';
import { MatSelectModule } from '@angular/material/select';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatNativeDateModule } from '@angular/material/core';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatListModule } from '@angular/material/list';

//components
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToolbarComponent } from './toolbar/toolbar.component';
import { ListClientComponent } from './client/list-client/list-client.component';
import { NewClientComponent } from './client/new-client/new-client.component';
import { ListEventComponent } from './event/list-event/list-event.component';
import { NewEventComponent } from './event/new-event/new-event.component';
import { ListPlaceComponent } from './place/list-place/list-place.component';
import { NewPlaceComponent } from './place/new-place/new-place.component';
import { LoginComponent } from './user/login/login.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'login', component: LoginComponent },
  { path: 'new-client', component: NewClientComponent ,canActivate:[AuthGaurdService]},
  { path: 'new-client/:id', component: NewClientComponent ,canActivate:[AuthGaurdService]},
  { path: 'list-client', component: ListClientComponent,canActivate:[AuthGaurdService] },
  { path: 'new-event', component: NewEventComponent ,canActivate:[AuthGaurdService]},
  { path: 'list-event', component: ListEventComponent ,canActivate:[AuthGaurdService]},
  { path: 'new-place', component: NewPlaceComponent ,canActivate:[AuthGaurdService]},
  { path: 'list-place', component: ListPlaceComponent ,canActivate:[AuthGaurdService]},
];

@NgModule({
  declarations: [
    AppComponent,
    ToolbarComponent,
    ListClientComponent,
    NewClientComponent,
    ListEventComponent,
    NewEventComponent,
    ListPlaceComponent,
    NewPlaceComponent,
    LoginComponent,
    HomeComponent
  ],
  imports: [
    RouterModule.forRoot(routes), 
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule, // adicionar
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatMenuModule,
    MatCardModule,
    MatButtonModule,
    MatIconModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    MatCheckboxModule,
    MatDatepickerModule,
    MatRadioModule,
    MatSelectModule,
    MatSlideToggleModule,
    MatTableModule,
    MatSortModule,
    MatPaginatorModule,
    MatNativeDateModule,
    MatProgressSpinnerModule,
    MatGridListModule,
    MatListModule,
    FormsModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true }
  ],
  bootstrap: [AppComponent],
  exports: [RouterModule] //adicionar
})
export class AppModule { }
