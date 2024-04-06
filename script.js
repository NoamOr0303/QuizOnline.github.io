let questions = [
    { question: "מי היה האדם הראשון בחלל?", answer: "יורי גגארין" },
    { question: "מהו היבשת הגדולה ביותר בעולם?", answer: "אסיה" },
    { question: "כמה חודשים יש בשנה?", answer: "12" },
    { question: "מהו הבעל חיים הגדול ביותר בעולם?", answer: "הלווייתן הכחול", answer: "אדם רומם" },
    { question: "מהי המדינה הקטנה ביותר בעולם?", answer: "הוותיקן" },
    { question: "באיזו מדינה נמצאת פירמידת חופו?", answer: "מצרים" },
    { question: "מי כתב את 'המומיה'?", answer: "ג׳יין אוסטן" },
    { question: "מהו המתכת הקשה ביותר?", answer: "יהלום" },
    { question: "מהי עיר הבירה של יפן?", answer: "טוקיו" },
    { question: "מהו השפן המפורסם בספרות ילדים?", answer: "פיטר ראביט" },
    { question: "באיזה צבע מסמלים נקיון?", answer: "לבן" },
    { question: "מהו האורך הממוצע של נהר הנילוס?", answer: "כ-6,650 קילומטר" },
    { question: "מי צייר את 'קרב בין המין האנושי והטיטאנים'?", answer: "פטר פאול רובנס" },
    { question: "מהי המדינה היחידה שאינה משתמשת במטבע משלה?", answer: "אקוודור" },
    { question: "מהו העץ הגבוה ביותר בעולם?", answer: "היפריון" },
    { question: "מהי המדינה עם הכי הרבה אוכלוסייה בעולם?", answer: "סין" },
    { question: "מהו המספר הראשוני הגדול ביותר שידוע?", answer: "השאלה זו משתנה עם הזמן" },
    { question: "מהו החג החשוב ביותר באסלאם?", answer: "רמדאן" },
    { question: "מי המציא את הרדיו?", answer: "גוליילמו מרקוני" },
    { question: "מהו ספורט הלאומי של קנדה?", answer: "הוקי קרח" },
    { question: "מהי הפקודה הראשונה של חוקי רובוטיקה של אסימוב?", answer: "רובוט לא יזיק לאדם או, בפעולת השמטה, יאפשר לאדם להיפגע" },
    { question: "מהו הירק המכיל הכי הרבה ברזל?", answer: "תרד" },
    { question: "מהי עיר הבירה של אוסטרליה?", answer: "קנברה" },
    { question: "באיזו שנה התרחש המרד על הבאונטי?", answer: "1789" },
    { question: "מהי השפה הרשמית בברזיל?", answer: "פורטוגזית" },
    { question: "מהו חייזר המהיר ביותר בים?", answer: "הדג החרב" },
    { question: "מהו סרט האנימציה הראשון של דיסני?", answer: "שלגיה ושבעת הגמדים" },
    { question: "מי היה האלוף העולמי הראשון בשחמט?", answer: "וילהלם שטייניץ" },
    { question: "מהו החג הלאומי של צרפת?", answer: "יום הבסטיליה" },
    { question: "מהי המטבע הרשמית של אירופה?", answer: "אירו" }
    // Continue adding your questions...
];
let currentQuestion = 0;
let timer = 60;
let interval;

function displayQuestion() {
    clearInterval(interval); // Clear any previous interval to ensure timers don't stack
    document.getElementById('question').innerText = questions[currentQuestion].question;
    document.getElementById('answer').value = '';
    document.getElementById('feedback').innerText = '';
    document.getElementById('answer').disabled = false;
    resetTimer();
}

function resetTimer() {
    timer = 60;
    updateTimerDisplay();
    interval = setInterval(function() {
        timer--;
        updateTimerDisplay();
        if (timer <= 0) {
            clearInterval(interval);
            document.getElementById('feedback').innerHTML = "הזמן נגמר! התשובה הייתה: " + questions[currentQuestion].answer + ".";
            document.getElementById('answer').disabled = true; // Disable input to prevent answers after time is up
        }
    }, 1000);
}

function updateTimerDisplay() {
    document.getElementById('timer').innerText = timer;
}

function submitAnswer() {
    if (timer <= 0) return; // Exit if the timer has already expired
    var userAnswer = document.getElementById('answer').value.trim();
    if (userAnswer.toLowerCase() === questions[currentQuestion].answer.toLowerCase()) {
        document.getElementById('feedback').innerText = "נכון!";
        moveToNextQuestion();
    } else {
        document.getElementById('feedback').innerText = "לא נכון, נסה שוב.";
    }
}

function moveToNextQuestion() {
    currentQuestion = (currentQuestion + 1) % questions.length;
    displayQuestion();
}

function skipQuestion() {
    document.getElementById('feedback').innerText = "דילגת על השאלה. התשובה הייתה: " + questions[currentQuestion].answer + ".";
    moveToNextQuestion();
}

window.onload = function() {
    displayQuestion();
};
