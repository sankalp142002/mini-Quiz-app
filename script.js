const questionData = [
    {
        question: 'what5 is your name?',
        a: 'faw',
        b: 'uikbgfvc',
        c: 'hjVcu',
        d: '1',
        correct : 'a'
    },
    {
        question: 'what is your age?',
        a: 'faw',
        b: 'uikbgfvc',
        c: 'hjVcu',
        d: '3',
        correct : 'b'
    },
    {
        question: 'what is your mothers name?',
        a: 'faw',
        b: 'uikbgfvc',
        c: 'hjVcu',
        d: '4',
        correct : 'c'
    },
    {
        question: 'hjyfu est 8iynp rt?',
        a: 'faw',
        b: 'uikbgfvc',
        c: 'hjVcu',
        d: '2',
        correct : 'd'
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