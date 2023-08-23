"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const rand_1 = require("./rand");
const prompt_sync_1 = __importDefault(require("prompt-sync"));
let Promp = (0, prompt_sync_1.default)();
let j, k, n;
let score = 0, choice = 'y';
while (choice != 'n') {
    k = Promp("enter a number");
    j = parseInt(k);
    n = (0, rand_1.rand)();
    if (n == j) {
        console.log(`you won the computer and you bith guessed ${n}`);
        score++;
    }
    else {
        console.log("alas!!! you lost", `the computer guessed ${n} and you guessed ${j}`);
    }
    choice = Promp("press any key for another round press n to view your score");
}
console.log("your score is " + score);
