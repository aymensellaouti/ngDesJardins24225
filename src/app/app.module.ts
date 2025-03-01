import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppRoutingModule } from './app-routing.module';

import { ToastrModule } from 'ngx-toastr';

import { AppComponent } from './app.component';
import { FirstComponent } from './components/first/first.component';
import { SecondComponent } from './components/second/second.component';
import { ColorComponent } from './components/color/color.component';
import { TwoComponent } from './components/two/two.component';
import { FormsModule } from '@angular/forms';
import { RotatingCardComponent } from './components/rotating-card/rotating-card.component';
import { PereComponent } from './communicationInterComponents/pere/pere.component';
import { FilsComponent } from './communicationInterComponents/fils/fils.component';
import { CvCardComponent } from './cv/cv-card/cv-card.component';
import { CvListComponent } from './cv/cv-list/cv-list.component';
import { CvItemComponent } from './cv/cv-item/cv-item.component';
import { CvComponent } from './cv/cv/cv.component';
import { TodoComponent } from './todo/todo/todo.component';
import { NgstyleExempleComponent } from './directives/ngstyle-exemple/ngstyle-exemple.component';
import { MiniWordComponent } from './directives/mini-word/mini-word.component';
import { NgclassExempleComponent } from './directives/ngclass-exemple/ngclass-exemple.component';
import { HighlightDirective } from './directives/highlight.directive';
import { RainbowDirective } from './directives/rainbow.directive';
import { DefaultImagePipe } from './cv/pipes/default-image.pipe';
import { EmbaucheComponent } from './cv/embauche/embauche.component';
import { LoggerService } from './services/logger.service';
import { NavbarComponent } from './components/navbar/navbar.component';
import { DetailsCvComponent } from './cv/details-cv/details-cv.component';
import { LoginComponent } from './auth/login/login.component';
import { NF404Component } from './components/nf404/nf404.component';
import { TestFormComponent } from './components/test-form/test-form.component';
import { TestObservableComponent } from './rxjs/test-observable/test-observable.component';
import { AddCvComponent } from './cv/add-cv/add-cv.component';
import { AUTH_INTERCEPTOR_PROVIDER } from './auth/interceptors/auth.interceptor';

@NgModule({
  declarations: [
    AppComponent,
    FirstComponent,
    SecondComponent,
    ColorComponent,
    TwoComponent,
    RotatingCardComponent,
    PereComponent,
    FilsComponent,
    CvCardComponent,
    CvListComponent,
    CvItemComponent,
    CvComponent,
    TodoComponent,
    NgstyleExempleComponent,
    MiniWordComponent,
    NgclassExempleComponent,
    HighlightDirective,
    RainbowDirective,
    DefaultImagePipe,
    EmbaucheComponent,
    NavbarComponent,
    DetailsCvComponent,
    LoginComponent,
    NF404Component,
    TestFormComponent,
    TestObservableComponent,
    AddCvComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule, // required animations module
    ToastrModule.forRoot(), // ToastrModule added
    HttpClientModule,
  ],
  providers: [AUTH_INTERCEPTOR_PROVIDER],
  bootstrap: [AppComponent],
})
export class AppModule {}
