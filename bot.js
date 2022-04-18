"use strict"

import { NlpManager } from "node-nlp";
import { User } from "./user.js";

const myBot = new NlpManager({ languages: ['en'], forceNER: true });


const trainBot = async()=>{
    myBot.addCorpus("corpus.json");
    console.log("Training bot..");
    await myBot.train();
    console.log("Training completed..");
    myBot.save();
}
// Load the model. 
(async() => {
    // Change to these lines in case there are any changes in the corpus
    await trainBot();
    myBot.load();
  console.log("Bot Loaded");
    
})();

export default myBot;