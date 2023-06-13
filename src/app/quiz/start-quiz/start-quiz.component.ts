import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Quiz } from '../quiz';

@Component({
  selector: 'app-start-quiz',
  templateUrl: './start-quiz.component.html',
  styleUrls: ['./start-quiz.component.scss']
})
export class StartQuizComponent {

  @Input() quiz!: Quiz;

  @Output() clickStart: EventEmitter<boolean> = new EventEmitter<boolean>();

  buttonText: string = 'Start Quiz';

  ngOnInit() {
    if (this.quiz && this.quiz.questions[0].selectedAnswerId !== null) {
      this.buttonText = 'Resume Quiz';
    }

    if (this.quiz && this.quiz.questions[this.quiz.questions.length - 1].selectedAnswerId !== null) {
      this.buttonText = 'See your Solutions';
    }
  }

}
