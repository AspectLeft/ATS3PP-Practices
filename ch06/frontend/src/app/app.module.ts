import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import {SocketIoConfig, SocketIoModule} from 'ngx-socket-io';
import { NavigationComponent } from './components/navigation/navigation.component';
import { GeneralChatComponent } from './components/general-chat/general-chat.component';
import { SecretChatComponent } from './components/secret-chat/secret-chat.component';
import {FormsModule} from '@angular/forms';

const config: SocketIoConfig = { url: 'http://localhost:3000', options: {}};

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    GeneralChatComponent,
    SecretChatComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SocketIoModule.forRoot(config),
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
