const questionData = [
    {
        question: 'Do you Play laser tag once a week?',
        a: 'Yes',
        b: 'NO',
        c: 'Yeno',
        d: 'I am not awsome!',
        correct : 'a'
    },
    {
        question: "Don't get married before you're ______ ?",
        a: '15',
        b: '25',
        c: '30',
        d: '69',
        correct : 'c'
    },
    {
        question: 'Keep your apartment chilly. Nipples reveal themselves at temperatures below ______°C.',
        a: '10',
        b: '15',
        c: '-1',
        d: '33',
        correct : 'b'
    },
    {
        question: 'Do you Have a “guy” for everything?',
        a: 'Yes',
        b: 'NO',
        c: 'Yeno',
        d: 'I am not awsome!',
        correct : 'a'
    },
    {
        question: 'Never use the word “______” on a first date.',
        a: 'Hey!',
        b: 'Handcuff',
        c: 'Wet',
        d: 'moist',
        correct : 'd'
    },
    {
        question: 'Will learning to play the air drums save your life one day?',
        a: 'Yes',
        b: 'NO',
        c: 'Yeno',
        d: 'I am not awsome!',
        correct : 'a'
    },
    {
        question: 'When visiting a strip club, do not sleep on the meatballs. True or False?',
        a: 'False',
        b: 'True',
        c: 'Not True',
        d: 'I am not awsome!',
        correct : 'b'
    },
    {
        question: 'The words said by gods ______.',
        a: 'Never ever get too drunk!!!',
        b: 'Marry a striper',
        c: 'Slender wife, happy life!!!',
        d: 'Dog is the best wingman ever!',
        correct : 'c'
    },
    {
        question: 'Own at least one suit, but twelve if you can.',
        a: 'Yes',
        b: 'A hell yesss!!!',
        c: 'A legen yessssss dary!!!',
        d: 'I am not awsome at all bro!!',
        correct : 'c'
    },
]


let curQ = 0;


const aEl = document.getElementById('aText');
const bEl = document.getElementById('bText');
const cEl = document.getElementById('cText');
const dEl = document.getElementById('dText');
const submitBtn = document.getElementById('submit')

const questionEl = document.getElementById("question");

loadQuiz () ;
function loadQuiz (){
    const cur = questionData[curQ];
    questionEl.innerText=cur.question;
    aEl.innerText=cur.a;
    bEl.innerText=cur.b;
    cEl.innerText=cur.c;
    dEl.innerText=cur.d;

}

submitBtn.addEventListener('click',() =>{
    curQ++;
    loadQuiz();
})