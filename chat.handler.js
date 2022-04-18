"use strict"

import myBot from './bot.js'
const userDatabase = {};
export const newChat = async(msg,chatId)=>{
    console.log("Passing message to Bot....");
    let response;
    // If the user doesn't yet exist in out database, add them
    // if (!userDatabase[chatId]) {
    //     console.log("Creating new user Database..");
    //     userDatabase[chatId] = new User(myBot, "tg", chatId);
    // }
    
      response = await myBot.process('en', msg);
    //   response = await userDatabase[chatId].onIntent(response);
        console.log("Bot Response: ",response);
      return  response;
}