"use strict"
import * as chatHandler from "./chat.handler.js";

export const newChat = async (req,res)=>{
    try{
        console.log("New Chat Received : ",req.body);
        const payload  = await chatHandler.newChat(req.body.message,req.body.chatId);
        res.send({error:false,payload})
    }catch(e){
        res.status(500).send(e);
    }
} 

export const get = (req,res)=>{
    res.send("App is working hurray!!")
}