// cashier - This variable will keep track of the average score for our cashier.
// c_tot - This variable will keep track of the total score for our cashier.
// c_num - This variable will keep track of the number of ratings our cashier has received.

let cashier = 0;
let c_tot = 0;
let c_num = 0;
let overall = 0;
let o_tot = 0;
let o_num = 0;

let cashierScore = document.getElementById("cashierScore");
let overallScore = document.getElementById("overallScore");

//cashier-1
let cashierScoreBtn1 = document.getElementById("cashier-1")
cashierScoreBtn1.addEventListener("click", function(){
    c_tot= c_tot + 1; // Adding 1 to score
    c_num = c_num + 1; 
    cashier = c_tot / c_num;
    cashierScore.textContent = cashier
})

//cashier-2
let cashierScoreBtn2 = document.getElementById("cashier-2")
cashierScoreBtn2.addEventListener("click", function(){
    c_tot= c_tot + 2; // Adding 2 to score
    c_num = c_num + 1; 
    cashier = c_tot / c_num;
    cashierScore.textContent = cashier
})


//cashier-3
let cashierScoreBtn3 = document.getElementById("cashier-3")
cashierScoreBtn3.addEventListener("click", function(){
    c_tot= c_tot + 3; // Adding 3 to score
    c_num = c_num + 1; 
    cashier = c_tot / c_num;
    cashierScore.textContent = cashier
})

//cashier-4
let cashierScoreBtn4 = document.getElementById("cashier-4")
cashierScoreBtn4.addEventListener("click", function(){
    c_tot= c_tot + 4; // Adding 4 to score
    c_num = c_num + 1; 
    cashier = c_tot / c_num;
    cashierScore.textContent = cashier
})

//overall-1
let overallScoreBtn1 = document.getElementById("overall-1")
overallScoreBtn1.addEventListener("click", function(){
    o_tot= o_tot + 1; // Adding 1 to score
    o_num = o_num + 1; 
    overall = o_tot / o_num;
    overallScore.textContent = overall
})

//overall-2
let overallScoreBtn2 = document.getElementById("overall-2")
overallScoreBtn2.addEventListener("click", function(){
    o_tot= o_tot + 2; // Adding 2 to score
    o_num = o_num + 1; 
    overall = o_tot / o_num;
    overallScore.textContent = overall
})

//overall-3
let overallScoreBtn3 = document.getElementById("overall-3")
overallScoreBtn3.addEventListener("click", function(){
    o_tot= o_tot + 3; // Adding 3 to score
    o_num = o_num + 1; 
    overall = o_tot / o_num;
    overallScore.textContent = overall
})

//overall-4
let overallScoreBtn4 = document.getElementById("overall-4")
overallScoreBtn4.addEventListener("click", function(){
    o_tot= o_tot + 4; // Adding 4 to score
    o_num = o_num + 1; 
    overall = o_tot / o_num;
    overallScore.textContent = overall
})

// let cashierScore = document.getElementById("cashierScore");
// let overallScore = document.getElementById("overallScore");

let showHide = document.getElementById("show-hide")
showHide.addEventListener("click", function(){
let scoresDiv = document.getElementById("show-scores")

cashierScore.textContent = cashier
overallScore.textContent = overall

let btnText = showHide.textContent
if(btnText === "Display Ratings"){
scoresDiv.style.display = "block"
showHide.innerHTML = "Hide Ratings"
}
else{
    scoresDiv.style.display = "none"
    showHide.innerHTML = "Display Ratings"
}
})

