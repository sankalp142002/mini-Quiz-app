const questionData = [{
        question: 'Do you Play laser tag once a week?',
        a: 'Yes',
        b: 'NO',
        c: 'Yeno',
        d: 'I am not awsome!',
        correct: 'a'
    },
    {
        question: "Don't get married before you're ______ ?",
        a: '15',
        b: '25',
        c: '30',
        d: '69',
        correct: 'c'
    },
    {
        question: 'If you are older than 30 and you do get married, accept the fact that "______" will become a big part of your life!',
        a: 'kids',
        b: 'throw pillows',
        c: 'Barney',
        d: 'liberty bell',
        correct: 'b'
    },
    {
        question: 'Do you Have a “guy” for everything?',
        a: 'Yes',
        b: 'NO',
        c: 'Yeno',
        d: 'I am not awsome!',
        correct: 'a'
    },
    {
        question: 'Never use the word “______” on a first date.',
        a: 'Hey!',
        b: 'Handcuff',
        c: 'Wet',
        d: 'moist',
        correct: 'd'
    },
    {
        question: 'Will learning to play the air drums save your life one day?',
        a: 'Yes',
        b: 'NO',
        c: 'Yeno',
        d: 'I am not awsome!',
        correct: 'a'
    },
    {
        question: 'When visiting a strip club, do not sleep on the meatballs. True or False?',
        a: 'False',
        b: 'True',
        c: 'Not True',
        d: 'I am not awsome!',
        correct: 'b'
    },
    {
        question: 'The words said by gods ______.',
        a: 'Never ever get too drunk!!!',
        b: 'Marry a striper',
        c: 'Slender wife, happy life!!!',
        d: 'Dog is the best wingman ever!',
        correct: 'c'
    },
    {
        question: 'Tip generously. We ALL have to make up _____',
        a: 'for the waiteress',
        b: 'for Lily',
        c: 'for the bartender',
        d: 'for Ted',
        correct: 'd'
    },
    {
        question: 'Own at least one suit, but twelve if you can.',
        a: 'Yes',
        b: 'A hell yesss!!!',
        c: 'A legen yessssss dary!!!',
        d: 'I am not awsome at all bro!!',
        correct: 'c'
    },
]


let curQ = 0;


const aEl = document.getElementById('aText');
const bEl = document.getElementById('bText');
const cEl = document.getElementById('cText');
const dEl = document.getElementById('dText');
const submitBtn = document.getElementById('submit');

const container = document.getElementById('cont-1');
const container2=document.getElementsByClassName('cont-2')
const centb = document.getElementsByClassName('cen')

const questionEl = document.getElementById("question");

let score = 0;

loadQuiz();

function loadQuiz() {
    const cur = questionData[curQ];
    questionEl.innerText = cur.question;
    aEl.innerText = cur.a;
    bEl.innerText = cur.b;
    cEl.innerText = cur.c;
    dEl.innerText = cur.d;

}

function selected() {
    const answ = document.querySelectorAll(".ans");

    let answer = undefined;
    answ.forEach((elb) => {
        if (elb.checked) {
            answer = elb.id;
        }
    });
    return answer;
}

function finish() {
    if (score>6){
        container.innerHTML=`<h2 class="dekhteHai">Your Score is ${score}/${questionData.length}!!
        YOOOUUU ARE OFFLICIALLY BARNEY AWSOME!!!😁☠️✌️</h2>`
    }
    else{
        container.innerHTML=`<h2 class="dekhteHai">Your Score is ${score}/${questionData.length}!!
        YOU ARE NOT AWSOME BRO!!😪😪</h2>`
    }
}

function des(){
    const answ = document.querySelectorAll(".ans");

    let answer = undefined;
    answ.forEach((elb) => {
            elb.checked=false;
    });
}

submitBtn.addEventListener('click', () => {

    const answer = selected();

    if(answer){
        if(answer === questionData[curQ].correct){
            score++;
      }curQ++;
      des();


      if (curQ < questionData.length){
        loadQuiz();
      }
      else{
        finish();
      }
    }

    else{
        loadQuiz();
    }

})
