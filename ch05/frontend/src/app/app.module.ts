import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import {HttpClientModule} from '@angular/common/http';
import {HttpLink, HttpLinkModule} from 'apollo-angular-link-http';
import {
  MatButtonModule,
  MatCardModule, MatDatepickerModule,
  MatIconModule,
  MatInputModule,
  MatListModule, MatNativeDateModule,
  MatSidenavModule,
  MatToolbarModule
} from '@angular/material';

import { FlexLayoutModule } from '@angular/flex-layout';
import {Apollo, ApolloModule} from 'apollo-angular';
import {InMemoryCache} from 'apollo-cache-inmemory';
import { AddTaskComponent } from './components/add-task/add-task.component';
import { AllTasksComponent } from './components/all-tasks/all-tasks.component';
import { OverdueTasksComponent } from './components/overdue-tasks/overdue-tasks.component';
import {FormsModule} from '@angular/forms';
import { TodoCardComponent } from './components/todo-card/todo-card.component';

@NgModule({
  declarations: [
    AppComponent,
    AddTaskComponent,
    AllTasksComponent,
    OverdueTasksComponent,
    TodoCardComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,
    HttpLinkModule,
    MatToolbarModule,
    MatButtonModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    FlexLayoutModule,
    MatInputModule,
    MatCardModule,
    MatNativeDateModule,
    MatDatepickerModule,
    ApolloModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor(httpLink: HttpLink, apollo: Apollo) {
    apollo.create({
      link: httpLink.create({uri: 'http://localhost:3000'}),
      cache: new InMemoryCache(),
      defaultOptions: {
        watchQuery: {
          fetchPolicy: 'network-only'
        }
      }
    });
  }
}
