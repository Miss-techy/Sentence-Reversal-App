// SENTENCE REVERSAL APP

//Assign the variables
const userSentence = document.getElementById('user-sentence')
const reversedStrElement = document.getElementById('reversed-str-result');
const reversedStrBtn = document.getElementById('reverse-str-btn')


reversedStrBtn.addEventListener("click", () => {
//Assign the user value to a variable
 const userValue = userSentence.value;

 //Check if the user value is an empty string - user hasn't entered a sentence
 if (!userValue) {
    alert("Please provide a sentence")

    //exit the function if the user does not provide an input
    return;
 }
 //use the chaining method to 
 const reversedSentence = userValue.split("").reverse().join("");

 //display the results
 reversedStrElement.innerText = `Reversed Sentence: ${reversedSentence}`;

 //reset the input value after the result is displayed
 userSentence.value = "";
});