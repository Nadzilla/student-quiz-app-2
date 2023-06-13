import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { QuizComponent } from './quiz.component';
import { QuestionComponent } from './question/question.component';
import { ResultsComponent } from './results/results.component';
import { StartQuizComponent } from './start-quiz/start-quiz.component';
import { RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms';
import { ConvertToLetter } from './question/convertToLetter.pipe';


const routes = [
  { path: 'quiz', component: QuizComponent, children: [
    {path: 'results', component: ResultsComponent},
    {path: ':id', component: QuestionComponent},
  ]}
]



@NgModule({
  declarations: [
    QuizComponent,
    QuestionComponent,
    ResultsComponent,
    StartQuizComponent,
    ConvertToLetter
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    ReactiveFormsModule

  ],
  exports: [
    QuizComponent,
    QuestionComponent,
    ResultsComponent,
    StartQuizComponent
  ]
})
export class QuizModule { }
