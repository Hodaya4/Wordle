let currentRow = 1;
let currentCollumn = 5;

function oneWord(){  //אוסי, פונק' בנק לא גמורה
    const words = [ "תמונה" , "מצלמה" , "מחברת","בקבוק" ,"חולצה", "חברות","גלידה", "אלבום","מסיכה", "הצלחה",
        "משטרה","אולפן", "התחלה", "הסכמה","עבודה" ,"עברית" ,"עימות", "חפירה" , "מסגרת", "תאריך"];
    let rand = Math.floor(Math.random() * (20));

}


function typeLetter(idLetter) {

    if(idLetter === 'enter') {
        if(currentCollumn != 0) {
            return;
        }
        checkAnswer();
        if(currentRow == 6) {
            return;
        }
        currentRow++;
        currentCollumn = 5;
        return;
    }

    if(idLetter === 'delete') {
        if(currentCollumn == 5) {
            return;
        }
        currentCollumn++;
        document.getElementById(`r${currentRow}c${currentCollumn}`).innerHTML = "";
        return;
    }

    const letterToHebrew = document.getElementById(idLetter).innerHTML;
    document.getElementById(`r${currentRow}c${currentCollumn}`).innerHTML = letterToHebrew;
    currentCollumn--;
}

function checkAnswer() {
    return;
}