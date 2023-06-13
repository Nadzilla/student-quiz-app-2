import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { Question, Quiz } from '../quiz';
import { QuizService } from '../quiz.service';

interface QuestionFormGroup {
  selectedAnswer: FormControl;
}

@Component({
  selector: 'app-question',
  templateUrl: './question.component.html',
  styleUrls: ['./question.component.scss']
})
export class QuestionComponent {

  @Input() quiz!: Quiz;
  @Input() disabled = true;

  showError = false;

  question: Question;
  questionFormGroup: FormGroup<QuestionFormGroup>;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private quizService: QuizService
    ) {}

  ngOnInit() {
    console.log('quiz', this.quiz)
    this.getQuestionFromQuiz(this.route.snapshot.params['id']);
    this.route.params.subscribe((params: Params) => {
      console.log('params', params);
      // console.log('params', this.route.snapshot.paramMap.get('id'));
      this.getQuestionFromQuiz(params['id']);
    });
  }

  buildFormGroup(): void {
    this.questionFormGroup = new FormGroup({
      selectedAnswer: new FormControl({value: this.question?.selectedAnswerId ? this.question?.selectedAnswerId : null, disabled: this.question._questionSubmitted ? this.question._questionSubmitted  : false}, Validators.required)
    })
  }

  subscribeToAnswerChanges(): void {
    this.questionFormGroup.get('selectedAnswer')?.valueChanges.subscribe(val => {
      this.question.selectedAnswerId = val;
    })
  }

  getQuestionFromQuiz(param: string): void {
    this.question = this.quizService.getQuestionFromQuiz(this.quiz, param);
    this.disabled = this.question?._questionSubmitted ? this.question?._questionSubmitted : false;
    this.buildFormGroup();
    this.subscribeToAnswerChanges();
  }

  submitAnswer(): void {

    console.log('this.questionFormGroup.get("selectedAnswer")', this.questionFormGroup.get('selectedAnswer'))
    if (this.questionFormGroup.get('selectedAnswer')?.value === null) {
      this.showError = true;
    } else {
      this.showError = false;
      this.disabled = this.question._questionSubmitted = true;
      this.questionFormGroup.get('selectedAnswer')?.disable();
      this.quizService.questionSubmitted.next(this.question);
    }

  }

}
