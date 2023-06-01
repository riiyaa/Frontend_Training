#!/usr/bin/env node
import chalk from "chalk";
import inquirer from "inquirer";
import gradient from "gradient-string";
import chalkAnimation from "chalk-animation";
import figlet from "figlet";
import { createSpinner } from "nanospinner";
import * as childProcess from 'child_process';
import Downloader, * as download from 'nodejs-file-downloader';
import JsFileDownloader from 'js-file-downloader';
import downloader from 'nodejs-file-downloader'
import cliProgress from 'cli-progress'

// const Downloader = require("nodejs-file-downloader");
let projectNumber = '';
let date = '';
let enviornment = '';
let allEnvt = [
    {
        name: 'Staging',
        number: 1
    },
    {
        name: 'Production',
        number: 2
    }
]
let projects = [
   {
    name: 'admin',
    number: 1
   },
   {
    name: 'cron',
    number: 2
   },
   {
    name: 'dine-in-2',
    number: 3
   },
   {
    name: 'insights',
    number: 4
   },
   {
    name: 'kds',
    number: 5
   },
   {
    name: 'kiosk',
    number: 6
   },
   {
    name: 'kiosktickets',
    number: 7
   }, {
    name: 'partnerapp',
    number: 8
   }, {
    name: 'pos',
    number: 9
   },
   {
    name: 'reservation',
    number: 10
   },
   {
    name: 'takeaway',
    number: 11
   },
   {
    name: 'webplanner',
    number: 12
   },{
    name: 'wipay-webhooks',
    number: 13
   }
]
const logPath = 'https://eatcard.s3.eu-central-1.amazonaws.com/laravel_logs/'
const stageLogPath = 'https://eatcard-stage.s3.eu-central-1.amazonaws.com/laravel_logs/'
const sleep = (ms = 2000) => new Promise((r) => setTimeout(r , ms))
async function welcome(){
    const rainbow = chalkAnimation.rainbow('Welcome to log downloader');
    await sleep(500);
    const rainbow2 = chalkAnimation.neon('You can download logs from different envt');
    await sleep(500);
    const rainbow3 = chalkAnimation.karaoke('Created by Ravi...');
    await sleep(500);
    // const rainbow = chalkAnimation.rainbow('Welcome to log downloader');
    await sleep(100);
    rainbow.stop();
    rainbow2.stop();
}
async function askEnvironment(){
    console.table(allEnvt)
    const number = await inquirer.prompt({
        name: 'env',
        type: 'input',
        message:'Choose an environment',
        default(){
            return 1
        }
    })
    enviornment = number.env
    console.log(enviornment)
}
async function askProjectNumber() {
    console.table(projects)
    const number = await inquirer.prompt({
        name: 'project_name',
        type: 'input',
        message:'Enter project number',
        default(){
            return 1
        }
    })
    projectNumber = number.project_name
    console.log(projectNumber)
}
async function askDate(){
    const rainbow = chalkAnimation.rainbow('Please add date in YYYY-MM-DD format only\n');
    rainbow.stop();
    const number = await inquirer.prompt({
        name: 'date',
        type: 'input',
        message:'Enter Date in YYYY-MM-DD format only',
        default(){
            return '2022-01-01';
        }
    })
    date = number.date
    console.log('Date' , date)
}
async function downloadLog(){
    console.log(projectNumber)
const projectName = projects.find(data => data.number == projectNumber)
const envName = allEnvt.find(data => data.number == enviornment)
console.log(projectName)
const finalUrl = `${(envName.name == 'Staging' ? stageLogPath :  logPath)}${projectName.name}/laravel-${date}.log`;
console.log(finalUrl)
const bar1 = new cliProgress.SingleBar({}, cliProgress.Presets.shades_classic);
const neww = new Downloader({
  url: finalUrl,
  directory: "./",
  fileName: `${projectName.name}-${date}.log`, 

  onProgress: function (percentage, chunk, remainingSize) {
    bar1.start(100, percentage);
    if(percentage == 100){
        bar1.stop();
    } 
  },
  onBeforeSave: (deducedName) => {
    console.log(`The file name is: ${deducedName}`);
  },
  
});
try {
    await neww.download();
  } catch (error) {
    console.log(error);
  }
}
await welcome();
await askEnvironment();
await askProjectNumber();
await sleep(500);
await askDate();
await sleep(1000);
await downloadLog();