const btnStartQuiz = document.getElementById('start_quiz');
const containerH1StartQuiz = document.getElementById('container-h1-start_quiz');
const liContainer = document.getElementById('li-container');
const divSubmit = document.getElementById('submit');
const btnSubmit = document.getElementById('submit_button');

//Show questions
btnStartQuiz.addEventListener('click', showQn);

function showQn(){
    liContainer.style.display='block';
    divSubmit.style.display='block';

}

//Add Li content and iterate Li
const ul = document.getElementById('answers');
const listAnswers = ul.getElementsByTagName('li');

listAnswers[0].textContent = '1 inch';
listAnswers[1].textContent = '2 inch';
listAnswers[2].textContent = '3 inch';
listAnswers[3].textContent = '4 inch';
listAnswers[4].textContent = 'Panda';
listAnswers[5].textContent = 'Koalas';
listAnswers[6].textContent = 'Tiger';
listAnswers[7].textContent = 'Cat';

const selectLi = document.getElementById('answers');

function selectListAnswers(){
    for (let i = 0; i < listAnswers.length; i++){
        selectLi.addEventListener('click', (event) => {
            let target = event.target;

            switch(target) {
                case   listAnswers[0]:
                    target.style.backgroundColor = "green";
                    console.log('Are You Sure the answer is 1 inch');
                    break;
                case   listAnswers[1]:
                    target.style.backgroundColor = "red";
                    console.log('Are You Sure the answer is 2 inch');
                    break;
                case   listAnswers[2]:
                    target.style.backgroundColor = "red";
                    console.log('Are You Sure the answer is 3 inch');
                    break;
                case   listAnswers[3]:
                    target.style.backgroundColor = "red";
                    console.log('Are You Sure the answer is 4 inch');
                    break;
                case   listAnswers[4]:
                    target.style.backgroundColor = "red";
                    console.log('Are You Sure the answer is Panda');
                    break;
                case   listAnswers[5]:
                    target.style.backgroundColor = "green";
                    console.log('Are You Sure the answer is Koalas');
                    break;
                case   listAnswers[6]:
                    target.style.backgroundColor = "red";
                    console.log('Are You Sure the answer is Tiger');
                    break;
                case   listAnswers[7]:
                    target.style.backgroundColor = "red";
                    console.log('Are You Sure the answer is Cat');
                    break;
            }
        });
    }
}
selectListAnswers();

function chooseListAnswers(){
    selectListAnswers()
    for (let i = 0; i < listAnswers.length; i++) {
        if (i == [0] || i == [5]){
            btnSubmit.addEventListener('click', function(e){
                console.log(e.currentTarget.textContent);
            });
            console.log(`Correct answer is ${listAnswers[i].innerHTML} \n`);
        }
        else{(i == [1] || i == [2] || i == [3] || i == [4]|| i == [6] || i == [7])
            btnSubmit.addEventListener('click', function(e){
                console.log(e.currentTarget.textContent);
            });
            console.log(`Wrong answer is ${listAnswers[i].innerHTML} \n`);
        }
    }
}
chooseListAnswers();

//I don`t now how to submit correct and wrong answers

























