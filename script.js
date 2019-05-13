// VUE V-MODEL INPUT //
var vm = new Vue ({
   el: "#app",
    data: {
        input: ' ',
    }
});



// BACKGROUND IMAGE //
var ColourArray = ['#80bad9', '#ede9af', '#f2afdf', '#cdeb83', '#8bc3b1', '#f9d999', '#eeb550', '#CB99C9', '#F49AC2', '#779ECB', '#AEC6CF', '#DEA5A4', '#ab907a', '#FF6961', '#c8a99f', '#bec89f', '#99C7FF', '#ffbdbd'];
         
var getBGcolour = ColourArray[Math.floor(Math.random() * ColourArray.length)];
document.body.style.backgroundColor = getBGcolour;



// VARIABLES //
var eight = document.getElementsByClassName("eight");
var input = document.getElementById("question");
var answer = document.getElementById("answer");
var button = document.getElementById("button");



// THINKING LOOP //
 var count = 0;
 setInterval(function()
  {count++;
     var dots = new Array (count %10).join('.');
     document.getElementById('animation').innerHTML = "Hmm let me think" + dots;},
   1000);


// OUTPUT ARRAY //
var output = ["It is certain",
                "Without a doubt",
                "Yes – definitely",
                "You bet",
                "As far as I can tell, yes",
                "Highly likely",
                "Sure, why not",
                "Yes",
                "Duh",
                "I would say so",
                "Don’t count on it",
                "My reply is no",
                "My sources say no",
                "Is not promising",
                "Very doubtful",
                "Try again",
                "Ask again later",
                "Better not get your hopes up",
                "Not sure about that",
                "Concentrate and ask again"];



// IF/ELSE STATEMENT FOR BUTTON ON:CLICK //
button.addEventListener("click", function()
                       {if (input.value.length < 1 == input.value.endsWith("?"))
                        
                      {alert("ask a question & don't forget to use punctuation");}
                        
                        else {eight.innerText = " ";
                              
                        var num = input.value.length % output.length;
                            answer.innerText = output[num];}
                       });
