
export interface SimpleQuiz {
    quizId: string;
    name: string;
}


export interface Quiz {
    quizId: string;
    name: string;
    questions: Array<Question>;
}

export interface Question {
    questionId: string;
    questionText: string;
    choices: Array<Choice>;
    selectedAnswerId: string | null;
    correctAnswerId: string;
    _questionSubmitted?: boolean;
}

export interface Choice {
    choiceId: string;
    choiceText: string;
}

/* Sample JSON */ 

export const BIO_QUESTION_1: Question =  {
    questionId: '1',
    questionText: 'During photosynthesis',
    correctAnswerId: '2',
    selectedAnswerId: null,
    choices: [
        {
            choiceId: '1',
            choiceText: 'light reactions produce sugar, while the Calvin cycle produces O2.',
        },
        {
            choiceId: '2',
            choiceText: 'light reactions produce NADPH and ATP, while the Calvin cycle produces sugar.',
        },
        {
            choiceId: '3',
            choiceText: 'light reactions photophosphorylate ADP, while the Calvin cycle produces ATP.',
        },
        {
            choiceId: '4',
            choiceText: 'the Calvin cycle produces both sugar and O2.',
        }
    ]
}

export const BIO_QUESTION_2: Question =  {
    questionId: '2',
    questionText: 'Which of the following describes the major difference between bryophytes and tracheophytes ?',
    correctAnswerId: '4',
    selectedAnswerId: null,
    choices: [
        {
            choiceId: '1',
            choiceText: 'tracheophytes can survive on land',
        },
        {
            choiceId: '2',
            choiceText: 'tracheophytes have seeds inside fruits',
        },
        {
            choiceId: '3',
            choiceText: 'tracheophytes can make their own food',
        },
        {
            choiceId: '4',
            choiceText: 'tracheophytes have vessels to transport materials',
        }
    ]
}

export const BIO_QUESTION_3: Question =  {
    questionId: '3',
    questionText: 'The myofilaments of muscles consist primarily of two proteins. These two proteins are called:',
    correctAnswerId: '1',
    selectedAnswerId: null,
    choices: [
        {
            choiceId: '1',
            choiceText: 'actin and myosin',
        },
        {
            choiceId: '2',
            choiceText: 'progesterone and testosterone',
        },
        {
            choiceId: '3',
            choiceText: 'progesterone and estrogen',
        },
        {
            choiceId: '4',
            choiceText: 'the Calvin cycle produces both sugar and O2.',
        }
    ]
}

export const BIO_QUESTION_4: Question =  {
    questionId: '4',
    questionText: 'All the following receptors are coupled to Gi proteins except:',
    correctAnswerId: '4',
    selectedAnswerId: null,
    choices: [
        {
            choiceId: '1',
            choiceText: 'α2',
        },
        {
            choiceId: '2',
            choiceText: 'M2',
        },
        {
            choiceId: '3',
            choiceText: 'M4',
        },
        {
            choiceId: '4',
            choiceText: 'β2',
        },
        {
            choiceId: '5',
            choiceText: 'None of the above',
        }
    ]
}

export const QUIZ_1: Quiz = {
    quizId: '1',
    name: 'Biology 102 Quiz',
    questions: [BIO_QUESTION_1, BIO_QUESTION_2, BIO_QUESTION_3, BIO_QUESTION_4]
}

export const QUIZ_1_SIMPLE: SimpleQuiz = {
    quizId: '1',
    name: 'Biology 102 Quiz'
}