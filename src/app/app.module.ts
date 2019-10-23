import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { routing } from './app.routing';
import { AppComponent } from './app.component';

import { MaterializeModule } from 'ng2-materialize';
import { ColorPickerModule } from 'ngx-color-picker';
import { ChartsModule } from 'ng2-charts';

import { HomeComponent } from './home/home.component';
import { HeaderComponent } from './header/header.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FormsModule } from './forms/forms.module';
import { AnswersModule } from './answers/answers.module';

import { HttpModule } from '@angular/http';
import { Angular2TokenService } from 'angular2-token';
import { UsersModule } from './users/users.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormService } from 'src/services/form.service';
import { AnswerService } from 'src/services/answer.service';
import { QuestionService } from 'src/services/question.service';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    NotFoundComponent,
  ],
  imports: [
    HttpModule,
    BrowserModule,
    RouterModule,
    routing,
    BrowserAnimationsModule,
    MaterializeModule.forRoot(),
    ColorPickerModule,
    ChartsModule,
    FormsModule,
    AnswersModule,
    UsersModule,
  ],
  providers: [
    Angular2TokenService,
    AnswerService,
    FormService,
    QuestionService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
