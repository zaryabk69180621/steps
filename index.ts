import { rand } from "./rand";
import promp from "prompt-sync";
let Promp=promp(); let j, k ,n;
let score=0,choice='y';
while(choice!='n'){

k=Promp("enter a number");
 j= parseInt(k);
 n= rand();
if(n==j){
console.log(`you won the computer and you bith guessed ${n}`);
score++;


}
else{
console.log("alas!!! you lost",`the computer guessed ${n} and you guessed ${j}`);


}

choice=Promp("press any key for another round press n to view your score");
}

console.log("your score is "+score);