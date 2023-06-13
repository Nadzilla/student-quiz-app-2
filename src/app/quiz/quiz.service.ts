import { Injectable } from '@angular/core';
import { Observable, of, Subject } from 'rxjs';
import { BIO_QUESTION_1, Question, Quiz, QUIZ_1, QUIZ_1_SIMPLE, SimpleQuiz } from './quiz';
// import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  questionSubmitted = new Subject<Question>();
  questionSubmitted$ = this.questionSubmitted.asObservable();
  
  constructor() { }

  // currentOpenQuiz: Quiz;

  /*
  Endpoint: /api/v1/class/{classId}/quizzes
  getQuizzes(classId: string): Observable<Array<SimpleQuiz>> {
    const URL = `/api/v1/class/${classId}/quizzes`;
    return this.http.get<Array<SimpleQuiz>>(URL);
    return of([QUIZ_1_SIMPLE, QUIZ_1_SIMPLE, QUIZ_1_SIMPLE]);
  }
  */ 

   // Endpoint: /api/v1/class/{classId}/quizzes/{quizId}
   getQuiz(classId: string, quizId: string): Observable<Quiz> {
    // const URL = `/api/v1/class/${classId}/quizzes/${quizId}`;
    // return this.http.get<Array<Quiz>>(URL);
    return of(QUIZ_1);
  }

  getQuestionFromQuiz(quiz: Quiz, questionId: string): Question {
    return quiz.questions.find(question  =>  question.questionId === questionId) || BIO_QUESTION_1;
  }
}
