//change 5 to the total number of questions
var total=10
var question=new Array()
for (i=1;i<=total+1;i++){
temp="choice"+i+"=new Array()"
eval(temp)
}
var solution=new Array()

/*Below lists the phrases that will be randomly displayed if the user correctly answers the question. You may extend or shorten this list as desired*/
var compliments=new Array()
compliments[0]="Excellent!"
compliments[1]="Wow, you're really rocking!"
compliments[2]="You must have studied hard. Good job!"
compliments[3]="Right on."
compliments[4]="Correct!"
compliments[5]="Great Job!"
compliments[6]="Good work!"


/*Below lists the questions, its choices, and finally, the solution to each question. Folow the exact format below when editing the questions. You may have as many questions as needed. Check doc at http://javascriptkit.com/script/script2/comboquiz.htm for more info
*/

question[1]="Which sentence uses a comma correctly?"
choice1[1]="My mother went to the store, and bought milk, eggs and flour."
choice1[2]="My mother went to the store and bought milk, eggs, and flour."
choice1[3]="My mother went to the store and bought milk, eggs and flour."
choice1[4]="My mother, went to the store, and bought, milk, eggs, and flour."

question[2]="Which sentence uses a comma correctly?"
choice2[1]="Today is February 12th, 2021."
choice2[2]="Today is, February 12th 2021."
choice2[3]="Today is February, 12th, 2021."
choice2[4]="Today is February, 12th 2021."

question[3]="Which sentence uses a comma correctly?"
choice3[1]="No I don't want to, go to the store."
choice3[2]="No I, don't want to go to the store."
choice3[3]="No, I, don't want to go to the store."
choice3[4]="No, I don't want to go to the store."

question[4]="Which sentence uses a comma correctly?"
choice4[1]="Sincerely Jack"
choice4[2]="Sincerely, Jack"
choice4[3]="Sincerely Jack,"
choice4[4]="Sincerely, Jack,"

question[5]="Which sentence uses a comma correctly?"
choice5[1]="The party was over but, nobody wanted to leave."
choice5[2]="The party was over, but nobody wanted to leave."
choice5[3]="The party was over but nobody wanted to leave."
choice5[4]="The party was over but nobody, wanted to leave."

question[6]="Jenna is writing a letter to her sister.  How should she begin it?"
choice6[1]="Hi Maddy"
choice6[2]="Hi, Maddy,"
choice6[3]="Hi, Maddy"
choice6[4]="Hi Maddy,"

question[7]="Which sentence uses a comma correctly?"
choice7[1]="Well, I think it's a great idea!"
choice7[2]="Well I think, it's a great idea!"
choice7[3]="Well, I think, it's a great idea!"
choice7[4]="Well I think it's a great idea!"

question[8]="Which sentence uses a comma correctly?"
choice8[1]="No you can't eat dessert yet!"
choice8[2]="No, you, can't eat dessert yet!"
choice8[3]="No, you can't eat dessert yet!"
choice8[4]="No, you can't eat dessert, yet!"

question[9]="Which sentence uses a comma correctly?"
choice9[1]="Anna spent her weekend with, Mary, Elizabeth and Josie."
choice9[2]="Anna spent her weekend with Mary, Elizabeth and Josie."
choice9[3]="Anna spent her weekend with Mary, Elizabeth, and Josie."
choice9[4]="Anna spenter her weekend with Mary Elizabeth and Josie."

question[10]="Which sentence uses a comma correctly?"
choice10[1]="Yesterday, was my friend's birthday so we had a party."
choice10[2]="Yesterday was my friend's birthday, so we had a party."
choice10[3]="Yesterday, was my friend's birthday, so we had a party."
choice10[4]="Yesterday was my friend's birthday so we had a party."

solution[1]="b"
solution[2]="a"
solution[3]="d"
solution[4]="b"
solution[5]="b"
solution[6]="d"
solution[7]="a"
solution[8]="c"
solution[9]="c"
solution[10]="b"

