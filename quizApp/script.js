const generalKnowledgeQ = [
    {
        question: "What is the capital of Canada?",
        options: ["Toronto", "Ottawa", "Vancouver", "Montreal"],
        answer: 1
    },
    {
        question: "What is the largest planet in our solar system?",
        options: ["Earth", "Mars", "Jupiter", "Saturn"],
        answer: 2
    },
    {
        question: "Who wrote 'Romeo and Juliet'?",
        options: ["William Shakespeare", "Charles Dickens", "Mark Twain", "Jane Austen"],
        answer: 0
    },
    {
        question: "What is the chemical symbol for gold?",
        options: ["Au", "Ag", "Pb", "Fe"],
        answer: 0
    },
    {
        question: "In which year did the Titanic sink?",
        options: ["1912", "1905", "1898", "1920"],
        answer: 0
    },
    {
        question: "What is the smallest prime number?",
        options: ["1", "2", "3", "0"],
        answer: 1
    },
    {
        question: "Who painted the Mona Lisa?",
        options: ["Vincent van Gogh", "Pablo Picasso", "Leonardo da Vinci", "Claude Monet"],
        answer: 2
    },
    {
        question: "What is the hardest natural substance on Earth?",
        options: ["Gold", "Iron", "Diamond", "Quartz"],
        answer: 2
    },
    {
        question: "In what year did World War II end?",
        options: ["1918", "1945", "1948", "1943"],
        answer: 1
    },
    {
        question: "Which country hosted the 2016 Summer Olympics?",
        options: ["Germany", "Brasil", "UK", "Japan"],
        answer: 1
    },
];
// SPORTS QUESTIONS
const sportQ = [
    {
        question: "Who holds the record for the most Olympic gold medals?",
        options: ["Hunter Armstrong", "Kyle Chalmers", "Ryan Murphy", "Michael Phelps"],
        answer: 3
    },
    {
        question: "What sport is known as the king of sports?",
        options: ["Basketball", "Tenis", "Football", "Golf"],
        answer: 2
    },
    {
        question: "What was Usain Bolts top speed during his world record 100m sprint?",
        options: ["William 44.72 km/h", "Charles 44.00 km/h", "41.69 km/h", "Jane 45.01 km/h"],
        answer: 0
    },
    {
        question: "Who is widely regarded as one of the best defensive boxers of all time?",
        options: ["Mike Tyson", "Floyd Mayweather Jr.", "Muhammad Ali", "Manny Pacquiao"],
        answer: 1
    },
    {
        question: "Which team has the most rings in NBA?",
        options: ["Bulls", "Lakers", "Celtics", "Warriors"],
        answer: 2
    },
    {
        question: " Who won the 2020 Formula 1 World Championship?",
        options: ["max verstappen", "Lewis Hamilton", "Michael Schumacher", "Fernando Alonso"],
        answer: 1
    },
    {
        question: "who scored the most free kicks in football history",
        options: ["Messi", "Ronaldo", "Pele", "Juninho"],
        answer: 3
    },
    {
        question: " most hole-in-ones in golf history",
        options: ["Norman Manley", "Jack Nicklaus", "Phil Mickelson", "Tiger Woods"],
        answer: 0
        
    },
    {
        question: "Which player holds the record for the most Grand Slam singles titles in the Open Era in Tennis?",
        options: ["Nadal", "Serena Williams", "Roger Federer", "Novak Djokovic"],
        answer: 1
    },
    {
        question: "Who is the best football player of all time?",
        options: ["Messi", "Ronaldo", "Pele", "Maradona"],
        answer: 0
        
    },
];
// IT QUESTIONS
const itQ = [
    {
        question: "What does Wi-Fi stand for?",
        options: ["Wireless Fidelity", "Wireless Functionality", "Wireless Frequency", "Wireless Fiber"],
        answer: 0
    },
    {
        question: "What is the main function of the CPU?",
        options: ["Store data", "Process data", "Display data", "Input data"],
        answer: 1
    },
    {
        question: "What does HTTP stand for in web browsing?",
        options: ["HyperText Transfer Protocol", "HyperText Transmission Protocol", "HyperText Transport Protocol", "HyperText Transfer Process"],
        answer: 0
    },
    {
        question: "What was the most popular programming language in 2023?",
        options: ["Python", "Java", "C++", "JavaScript"],
        answer: 0
    },
    {
        question: "Which device is used to connect multiple computers within a local area network (LAN)?",
        options: ["Router", "Switch", "Modem", "Hub"],
        answer: 1
    },
    {
        question: "What does the acronym 'RAM' stand for?",
        options: ["Read Access Memory", "Random Access Memory", "Rapid Access Memory", "Readily Available Memory"],
        answer: 1
    },
    {
        question: "What is the primary purpose of an operating system?",
        options: ["Manage hardware and software resources", "Provide internet access", "Run applications", "Store data"],
        answer: 0
    },
    {
        question: "What is the most widely used operating system for personal computers?",
        options: ["Windows", "Linux", "macOS", "Unix"],
        answer: 0
    },
    {
        question: "What is the name of the first computer virus?",
        options: ["Creeper", "Elk Cloner", "Brain", "Trojan Horse"],
        answer: 2
    },
    {
        question: "What does USB stand for?",
        options: ["Universal Serial Bus", "Universal System Bus", "Universal Storage Bus", "Universal Service Bus"],
        answer: 0
    }
];
// HISTORY QUESTIONS
const historyQ = [{
    question: "Who was the first President of the United States?",
    options: ["George Washington", "Thomas Jefferson", "Abraham Lincoln", "John Adams"],
    answer: 0
},
{
    question: "What year did World War I begin?",
    options: ["1912", "1914", "1916", "1918"],
    answer: 1
},
{
    question: "Who discovered penicillin?",
    options: ["Marie Curie", "Alexander Fleming", "Louis Pasteur", "Albert Einstein"],
    answer: 1
},
{
    question: "What ancient civilization built the pyramids?",
    options: ["Romans", "Greeks", "Egyptians", "Mayans"],
    answer: 2
},
{
    question: "Who was the ALbanian leader that fought against the Ottoman Empire in several battles and was praised for his military tactics and bravery?",
    options: ["Skanderbeg", "Cercis Topulli", "Adem Jashari", "Isa Boletini"],
    answer: 0
},
{
    question: "What was the name of the ship that sank after hitting an iceberg in 1912?",
    options: ["Lusitania", "Titanic", "Britannic", "Olympic"],
    answer: 1
},
{
    question: "Who was the famous leader of the Mongol Empire who became one of the most feared conquerors in history?",
    options: ["Genghis Khan", "Kublai Khan", "Tamerlane", "Attila the Hun"],
        answer: 0
},
{
        question: "What was the name of the first manned mission to land on the Moon?",
        options: ["Apollo 11", "Gemini 8", "Mercury 7", "Apollo 13"],
        answer: 0
},
    {
        question: "In which year did World War II end?",
        options: ["1945", "1944", "1946", "1947"],
        answer: 0
    },
{
        question: "Who was the firstWhich ancient civilization is credited with the development of democracy?",
        options: ["Egyptians", "Greeks", "Romans", "Mesopotamians"],
        answer: 1
    },

]
// Music QUESTIONS
const musicQ = [
    {
        question: "Who is known as the King of Pop?",
        options: ["Elvis Presley", "Michael Jackson", "Prince", "Madonna"],
        answer: 1
    },
    {
        question: "What is the highest-selling album of all time?",
        options: ["Thriller", "Back in Black", "The Dark Side of the Moon", "The Beatles"],
        answer: 0
    },
    {
        question: "Which band was Freddie Mercury the lead singer of?",
        options: ["The Beatles", "Queen", "Led Zeppelin", "Pink Floyd"],
        answer: 1
    },
    {
        question: "What is the name of the famous music festival held in California?",
        options: ["Glastonbury", "Lollapalooza", "Coachella", "Woodstock"],
        answer: 2
    },
    {
        question: "Who is known as the Queen of Pop?",
        options: ["Beyoncé", "Lady Gaga", "Madonna", "Taylor Swift"],
        answer: 2
    },
    {
        question: "Who is considered one of the greatest lyricists in hip-hop, famous for his rapid-fire flow and intricate wordplay?",
        options: ["Nas", "Jay-Z", "Eminem", "Lil Wayne"],
        answer: 2
    },
    {
        question: "In which part of the world is music believed to have first originated, based on archaeological evidence of early instruments?",
        options: ["Africa", "Asia", "Europe", "North America"],
        answer: 0
    },
    {
        question: "What is the name of the famous music festival held in California?",
        options: ["Glastonbury", "Lollapalooza", "Coachella", "Woodstock"],
        answer: 2
    },
    {
        question: "'Which artist survived being shot nine times and later turned his life story into a successful career in music and film?",
        options: ["50 Cent", "Tupac Shakur", "The Notorious B.I.G.", "Eminem"],
        answer: 0
    },
    {
        question: "'Shape of You' was a hit song by which artist?",
        options: ["Ed Sheeran", "Justin Bieber", "Bruno Mars", "Sam Smith"],
        answer: 0
    }   
];
// MOOVIES QUESTIONS        
const moviesQ = [
    {
        question: "Who directed the movie 'Inception'?",
        options: ["Christopher Nolan", "Steven Spielberg", "Martin Scorsese", "Quentin Tarantino"],
        answer: 0
    },
    {
        question: "What is the highest-grossing film of all time?",
        options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
        answer: 2
    },
    {
        question: "Who played the Joker in 'The Dark Knight'?",
        options: ["Jared Leto", "Jack Nicholson", "Heath Ledger", "Joaquin Phoenix"],
        answer: 2
    },
    {
        question: "What is the name of the fictional African country in 'Black Panther'?",
        options: ["Wakanda", "Zamunda", "Genosha", "Elbonia"],
        answer: 0
    },
    {
        question: "'Which actor is known for his role as Tomy Shelbey in the TV series 'Peaky Blinders'?",
        options: ["Cillian Murphy", "Benedict Cumberbatch", "Tom Hardy", "Johny Dep"],
        answer: 0
    },
    {
        question: "What is the name of the fictional African country in 'Black Panther'?",      
        options: ["Genosha", "Zamunda", "Wakanda", "Elbonia"],
        answer: 2
    },
    {   
        question: "What film holds the record for the highest-grossing movie of all time (as of 2024)?",
        options: ["Titanic", "Avatar", "Avengers: Endgame", "Star Wars: The Force Awakens"],
        answer: 1
    },
    {
        question: "Who directed the movie 'Pulp Fiction'?",
        options: ["Quentin Tarantino", "Martin Scorsese", "Christopher Nolan", "Steven Spielberg"],
        answer: 0
    },
    {
        question: "What movie features a killer great white shark terrorizing a small beach town?",
        options: ["Jaws", "Deep Blue Sea", "The Meg", "Sharknado"],
        answer: 0
    }
];
// GEOGRAPHY QUESTIONS
const geographyQ = [
    {
        question: "What is the largest desert in the world?",
        options: ["Sahara", "Arabian", "Gobi", "Antarctic"],
        answer: 3
    },
    {
        question: "Which river is the longest in the world?",
        options: ["Amazon", "Nile", "Yangtze", "Mississippi"],
        answer: 1
    },
    {
        question: "What is the capital city of Australia?",
        options: ["Sydney", "Canberra", "Melbourne", "Brisbane"],
        answer: 1
    },
    {
        question: "Which continent is known as the 'Dark Continent'?",
        options: ["Asia", "Africa", "South America", "Australia"],
        answer: 1
    },
    {
        question: "'Which country has the most natural lakes?",
        options: ["Canada", "USA", "Russia", "India"],
        answer: 0
    },
    {
        question: "'Which country is known as the Land of the Rising Sun?",
        options: ["China", "Japan", "Thailand", "South Korea"],
        answer: 1
    },
    {
        question: "Which European country is known for its unique language that forms its own branch of the Indo-European family?",
        options: ["Albania", "Finland", "Iceland", "Estonia"],
        answer: 0
    },
    {
        question: "'Which mountain range separates Europe and Asia?",
        options: ["Himalayas", "Rockies", "Ural Mountains", "Andes"],
        answer: 2
    },
    {
        question: "'Which ocean is the largest in the world?",
        options: ["Atlantic Ocean", "Indian Ocean", "Arctic Ocean", "Pacific Ocean"],
        answer: 3
    },
    {
        question: "'Which country has the most time zones?",
        options: ["USA", "Russia", "China", "India"],
        answer: 1
    }
];
// Football QUESTIONS

const footballQ = [{
    question: "Who won the FIFA World Cup in 2018?",
    options: ["Germany", "Brazil", "France", "Argentina"],
    answer: 2
},
{
    question: "Which player has won the most Ballon d'Or awards?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Johan Cruyff", "Michel Platini"],
    answer: 0
},
{
    question: "Which country won the first FIFA World Cup?",
    options: ["Brazil", "Italy", "Germany", "Uruguay"],
    answer: 3
},
{
    question: "Which country has the most World Cups?",
    options: ["Brazil", "Germany", "Argentina ", "France"],
    answer: 0
},
{
    question: "'Which club has won the most UEFA Champions League titles?",
    options: ["Barcelona", "Real Madrid", "AC Milan", "Liverpool"],
    answer: 1
},
{
    question: "'Who is known as 'The King of Football'?",
    options: ["Pele", "Maradona", "Messi", "Ronaldo"],
    answer: 0
},
{
    question: "'Which country has won the most UEFA European Championships?",
    options: ["Germany", "Spain", "Italy", "France"],
    answer: 0
},
{
    question: "'What was the name of the trophy awarded to the winner of the FIFA World Cup?",
    options: ["The Jules Rimet Trophy", "The Golden Boot", "The Ballon d'Or", "The UEFA Champions League Trophy"],
    answer: 0
},
{
    question: "'Which player holds the record for the most goals scored in a single Premier League season?",
    options: ["Alan Shearer", "Sergio Aguero", "Mohamed Salah", "Cristiano Ronaldo"],
    answer: 2
},
{
    question: "Who is the GOAT - greatest of all time of football?",
    options: ["Lionel Messi", "Cristiano Ronaldo", "Pele", "Diego Maradona"],
    answer: 0 
}]



// Get DOM elements
const questionElement = document.getElementById('question');
const answerButtons = document.querySelectorAll('.answer-button');
const nextButton = document.getElementById('next-button');

let currentQuestionIndex = 0;
let score = 0;
let currentQuestionSet = [];

// ===== Load Category and Start Game =====

window.loadCategory = function(category) {
    switch (category) {
        case 'general':
            currentQuestionSet = generalKnowledgeQ;
            break;
        case 'sport':
            currentQuestionSet = sportQ;
            break;
        case 'history':
            currentQuestionSet = historyQ;
            break;
        case 'it':
            currentQuestionSet = itQ;
            break;
        case 'music':
            currentQuestionSet = musicQ;
            break;
        case 'movies':
            currentQuestionSet = moviesQ;
            break;
        case 'geography':
            currentQuestionSet = geographyQ;
            break;
        case 'football':
            currentQuestionSet = footballQ;
            break;
        default:
            currentQuestionSet = [];
            break;
    }

    startGame();
};

function startGame() {
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerText = 'Next';
    nextButton.classList.add('hide');
    showQuestion(currentQuestionSet[currentQuestionIndex]);
}

// ===== Display a Question =====

function showQuestion(questionObj) {
    questionElement.innerText = questionObj.question;

    answerButtons.forEach((button, index) => {
        button.innerText = questionObj.options[index];
        button.classList.remove('correct', 'wrong');
        button.disabled = false;
        button.onclick = () => selectAnswer(index);
    });

    nextButton.classList.add('hide');
}

// ===== Handle Answer Selection =====

function selectAnswer(selectedIndex) {
    const correctIndex = currentQuestionSet[currentQuestionIndex].answer;

    answerButtons.forEach((button, index) => {
        button.disabled = true;
        if (index === correctIndex) {
            button.classList.add('correct');
        } else if (index === selectedIndex) {
            button.classList.add('wrong');
        }
    });

    if (selectedIndex === correctIndex) {
        score++;
    }

    nextButton.classList.remove('hide');
}

// ===== Next Button =====

nextButton.addEventListener('click', () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < currentQuestionSet.length) {
        showQuestion(currentQuestionSet[currentQuestionIndex]);
    } else {
        showFinalScore();
    }
});

// ===== Final Score Display =====

function showFinalScore() {
    questionElement.innerText = `Quiz Finished! You scored ${score} out of ${currentQuestionSet.length}.`;

    answerButtons.forEach((button) => {
        button.innerText = '';
        button.disabled = true;
    });

    nextButton.innerText = 'Restart';
    nextButton.classList.remove('hide');
    nextButton.onclick = () => {
        nextButton.innerText = 'Next';
        startGame();
    };
}
// Correct and wrong 
function loadQuestion(questionData) {
  const questionElement = document.getElementById("question");
  const answerButtons = document.querySelectorAll(".answer-button");

  questionElement.textContent = questionData.question;

  answerButtons.forEach((button, index) => {
    button.textContent = questionData.options[index];
    button.className = "answer-button"; // Reset any old classes

    button.onclick = () => {
      // Disable all buttons
      answerButtons.forEach(btn => {
        btn.classList.add("disabled");
        btn.disabled = true;
      });

      // Check if correct
      if (index === questionData.answer) {
        button.classList.add("correct");
      } else {
        button.classList.add("wrong");
        // Highlight the correct one
        answerButtons[questionData.answer].classList.add("correct");
      }

      // Show next button
      document.getElementById("next-button").classList.remove("hide");
    };
  });
}

// ===== Load Category on Page Load =====

console.log("Category:", category);
console.log("Questions loaded:", currentQuestionSet);

