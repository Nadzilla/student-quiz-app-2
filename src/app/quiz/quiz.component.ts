import { Call } from '@angular/compiler';
import { Component } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { QuestionComponent } from './question/question.component';
import { Question, Quiz } from './quiz';
import { QuizService } from './quiz.service';
import { ResultsComponent } from './results/results.component';

const CLASS_ID: string = '1';
const QUIZ_ID: string = '1';


@Component({
  selector: 'app-quiz',
  templateUrl: './quiz.component.html',
  styleUrls: ['./quiz.component.scss']
})
export class QuizComponent {

  quiz: Quiz;

  currentQuestion: number = 0;

  nextButtonText: string = 'Next';

  status: 'loading' | 'loaded' | 'error' = 'loading';

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService) {
      
    }

  ngOnInit(): void {
    this.quizService.getQuiz(CLASS_ID, QUIZ_ID).subscribe({
      next: (res) => {
        this.quiz = res;
      },
      error: (err) => {
        this.status = 'error';
      },
      complete: () => {
        this.status = 'loaded';
        this.questionSubmittedSubscription();
        // this.setQuestion();
      }
    })
  }

  setQuestion(): void {
    this.route.queryParams.subscribe((params) => {
      console.log('params', params);
      console.log('params', this.route.snapshot.paramMap.get('id'));

      const id = params['id'];
      if (id < this.quiz.questions.length - 1) {
        this.currentQuestion = id;
        // this.router.navigate([`/${this.currentQuestion}`]);
      } else {
        // this.router.navigate([`quiz/results`]);
      }
    });

  }

  nextQuestion(): void {
    if (this.currentQuestion < this.quiz.questions.length) {
      this.router.navigate([`quiz/${this.currentQuestion + 1}`]);
      this.currentQuestion += 1;
      // 
    } else {
      this.currentQuestion = this.quiz.questions.length + 1;
      this.router.navigate([`quiz/results`]);
    }

    if (this.currentQuestion === this.quiz.questions.length) {
      this.nextButtonText = 'Results';
    }
  }

  previousQuestion(): void {
    console.log('this.currentQuestion', this.currentQuestion)
    if (this.currentQuestion > 1) {
      this.router.navigate([`quiz/${this.currentQuestion - 1}`]);
      this.currentQuestion -= 1;
      // 
    } else {
      this.currentQuestion = 0;
      this.router.navigate([`quiz`]);
    }

    if (this.currentQuestion < this.quiz.questions.length) {
      this.nextButtonText = 'Next';
    }
  }

  questionSubmittedSubscription(): void {
    this.quizService.questionSubmitted$.subscribe(val => {


      // let index = null;
      // this.quiz.questions.forEach((question, i) => {
      //   if (question.questionId === val.questionId) {
      //     index = i;
      //   }
      // });
      // if (index !== null) {
      //   this.quiz.questions[index] = val;
      // }
      console.log('val', val)
      console.log('quiz', this.quiz)
    });
    
  }

  onOutletLoaded(component: QuestionComponent | ResultsComponent) {
    if (component instanceof QuestionComponent) {
      component.quiz = this.quiz;
    } else if (component instanceof ResultsComponent) {
      component.quiz = this.quiz;
    }
  }

}
