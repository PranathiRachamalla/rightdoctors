import { BrowserModule } from '@angular/platform-browser';
import { NgModule, Component } from '@angular/core';
import {RouterModule , Routes} from '@angular/router';
//import { FormsModule } from '@angular/forms';

//import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MyNavComponent } from './my-nav/my-nav.component';
import { LayoutModule } from '@angular/cdk/layout';
import { MatToolbarModule, MatButtonModule, MatTableModule, MatSidenavModule,MatInputModule,MatIconModule, MatListModule , MatFormFieldModule, MatSelectModule } from '@angular/material';
import { DisplayPeopleComponent } from './display-people/display-people.component';
import { CreatePersonComponent } from './create-person/create-person.component';
import { UpdatePersonComponent } from './update-person/update-person.component';
import { DeletePersonComponent } from './delete-person/delete-person.component';
//import { UpdatePersonComponent } from './update-person/update-person.component';

const appRoutes : Routes = [
  {path : 'app-create-person', component : CreatePersonComponent },
  {path : 'app-display-people', component :DisplayPeopleComponent },
  {path : 'app-update-person', component : UpdatePersonComponent},
  {path : 'app-delete-person', component : DeletePersonComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    MyNavComponent,
    DisplayPeopleComponent,
    CreatePersonComponent,
    UpdatePersonComponent,
    DeletePersonComponent,
    UpdatePersonComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    LayoutModule,
    RouterModule.forRoot(appRoutes),
    MatToolbarModule,
   
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatSelectModule,
    MatFormFieldModule,
    MatInputModule,
    MatTableModule,
    //FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
