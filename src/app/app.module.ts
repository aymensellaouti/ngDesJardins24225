import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
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
    HighlightDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
