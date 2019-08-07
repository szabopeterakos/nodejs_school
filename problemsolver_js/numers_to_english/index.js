// // import { space, numbers, numbers_big, numbers_teen, numbers_tens } from './numberas_consts.js';
const NumberR = require("./number");
const GroupMaker = require("./groups");

let test_number = 7654321;
let test_number2 = 0;
let test_number3 = 90;
let test_number4 = 190;
let test_number5 = 11;
let test_number6 = 1000000;

GroupMaker.groupMaker(0);
GroupMaker.groupMaker(1);
GroupMaker.groupMaker(12);
GroupMaker.groupMaker(120);
GroupMaker.groupMaker(1200);
GroupMaker.groupMaker(12000);
GroupMaker.groupMaker(120000);
GroupMaker.groupMaker(1200000);