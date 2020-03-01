const Discord = require("discord.js");
const client = new Discord.Client();
const RichEmbed = require('discord.js');




//-----------------
//EMBEDS
//-----------------
//Timer

let clock;

client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 180")
    if(message.member.roles.some(r => r.name === "Timer"))
    
    {   
        message.channel.send("180 SECONDS ON THE CLOCK")
        let timer = 180;
        clock = setInterval(() => {
            timer--;
            console.log(timer);
            if (timer == 180)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 90)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 60)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 30)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 10)
            {
                message.channel.send({embed :{
                    color: 15158332,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 0)
            {
                clearInterval(clock);
                message.channel.send({embed :{
                    color: 15158332,
                    title: "...TIME..."
                }})
            }
        }, 1000) 
      }
    
});
client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 90")
    if(message.member.roles.some(r => r.name === "Timer"))    
    {   
        message.channel.send("90 SECONDS ON THE CLOCK")
        let timer = 90;
        clock = setInterval(() => {
            timer--;
            console.log(timer);
            if (timer == 60)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 45)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 30)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 15)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 5)
            {
                message.channel.send({embed :{
                    color: 15158332,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 0)
            {
                clearInterval(clock);
                message.channel.send({embed :{
                    color: 15158332,
                    title: "...TIME..."
                }})
            }
        }, 1000) 
      }
    
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 60")
    if(message.member.roles.some(r => r.name === "Timer"))
        {   
        message.channel.send("60 SECONDS ON THE CLOCK")
        let timer = 60;
        clock = setInterval(() => {
            timer--;
            console.log(timer);
            if (timer == 45)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 30)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 25)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 15)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 10)
            {
                message.channel.send({embed :{
                    color: 15158332,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 5)
            {
                message.channel.send({embed :{
                    color: 15158332,
                    title: timer + " Seconds left"
                }})
            }
            if(timer == 0)
            {
                clearInterval(clock);
                message.channel.send({embed :{
                    color: 15158332,
                    title: "...TIME..."
                }})
            }
        }, 1000) 
      }
    
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 45")
    if(message.member.roles.some(r => r.name === "Timer"))
        {   
        message.channel.send("45 SECONDS ON THE CLOCK")
        let timer = 45;
        clock = setInterval(() => {
            timer--;
            console.log(timer);
            if (timer == 45)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 30)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 20)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            
            if(timer == 10)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 5)
            {
                message.channel.send({embed :{
                    color: 15158332,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 0)
            {
                clearInterval(clock);
                message.channel.send({embed :{
                    color: 15158332,
                    title: "...TIME..."
                }})
            }
        }, 1000) 
      }
    
});



client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 30")
    if(message.member.roles.some(r => r.name === "Timer"))
    
    
    {
        message.channel.send("30 SECONDS ON THE CLOCK")
        let timer = 30;
        clock = setInterval(() => {
            timer--;
            console.log(timer);
                       
            if (timer == 30)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 25)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 20)
            {
                message.channel.send({embed :{
                    color: 3066993,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 15)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 10)
            {
                message.channel.send({embed :{
                    color: 15105570,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 5)
            {
                message.channel.send({embed :{
                    color: 15158332,
                    title: timer +  " Seconds Left"
                }})
            }
            if(timer == 0)
            {
                clearInterval(clock);
                message.channel.send({embed :{
                    color: 15158332,
                    title: "...TIME..."
                }})
            }
        }, 1000) 
      }
    });


    client.on("message", message => {
        if(message.content.toLowerCase() == "!" + "timerstop")
        {
            clearInterval(clock);
            message.channel.send({embed :{
                color: 15158332,
                title: "TIMER STOPPED"
            }})
        }
            
            }); 


//--------------------
//Playing a game :
client.on("ready", () => {
    let user = "Made with ESH by STeaMie"
        client.user.setActivity(user)
  });

//----------------------------------------------------------------
//Flip a coin
function coinFlip(){
    return (Math.floor(Math.random()* 2 ) == 0) ? 'Tails!' : 'Heads!';
}
client.on('message', message =>{
   if(message.content.toLowerCase() == '!' + 'flip'){
       message.channel.send("It's" + " " + coinFlip() + "!");
   }
});
//------------------------------------------------------------------

client.on('message', message => {
    if(message.content.toLowerCase() === '!' + 'help') {
        message.channel.send({embed: {
            color: 3447003,
            description: "Here are the commands:\n```Coin Flip : !flip \nTimer : !timer 180, 90, 60, 45 or 30 \nStop Timer : !timerstop \nPart in Tounrey : !part \nQuit Tourney : !quit \nView Queue : !queue \nNext in Queue : !next \nEnd Tourney : !end```"
        }});
        
    }
});

//!part function
client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "part")
      if(message.member.roles.find(r => r.name === "Participant")){
        message.reply("You already have the Role!")}
        else {
        let role = message.guild.roles.find(role=> role.name === "Participant")
             message.member.addRole(role)
             message.reply("You've been added to the list!");
    }
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "end")
    if(message.member.roles.some(r => r.name === "Host")){
        let role = message.guild.roles.find(role => role.name == 'Participant')
        message.guild.members.forEach(member => {
          if(!member.roles.find(t => t.name == 'Participant')) return;
          member.removeRole(role);
                                })
         message.channel.send("Tournament is Over, all Participants removed!");
      }
      else {
        message.reply('Sorry, you dont have permission to do that!')
    }
    });


       

    
    
//----------------------------------------------------------------
var que = [];
var que2 = [];
var partstart = [];
client.on('message', message => {
            if(message.content.toLowerCase() == "!" + "part") {
                if(message.member.roles.find(r => r.name === "Participant")){
                
            } else {
               
            que.push(message.member.displayName);
           
            
            }
        }
    
       
        if(message.content.toLowerCase() == "!" + "quit") {
            if(message.member.roles.find(r => r.name === "Participant")){
                if(que.indexOf(message.author.username) === -1) {
                    let role = message.guild.roles.find(role=> role.name === "Participant")
                    message.member.removeRole(role)
                    message.reply("You've been removed from the Queue!");
                } else {
                    if(que.indexOf(message.author.username) < 1){
                        que.shift(que);
                        let prfrmingnow = que[0];
                        let nextpreformer = que[1];
                        let role = message.guild.roles.find(role=> role.name === "Participant")
                        message.member.removeRole(role)
                        que.splice(que.indexOf(message.author.username), -1)
                        message.reply("You've been removed from the list!");}
                    
                    else {
    
                
                    let role = message.guild.roles.find(role=> role.name === "Participant")
                    message.member.removeRole(role)
                    que.splice(que.indexOf(message.author.username), 1)
                    
                    message.reply("You've been removed from the list!");}
                }
            
            
            
            
                
             } else {
                message.reply("You are not in the Queue!");           
             }}
            

    

   
            
          if(message.content.toLowerCase() == "!" + "queue"){
            {
                if(que.length === 0) {
                   message.reply('The Queue is empty, !part to join the Queue.')
                } else {
            let prfrmingnow = que[0];
      
              const Preformingembed = new Discord.RichEmbed()
            .setTitle("Performing Now | "  +  prfrmingnow)
            .setColor(0x00AE86);   

            let nextpreformer = que[1];

            const nextprfrmingembed = new Discord.RichEmbed()
            .setTitle("Up Next | " + nextpreformer)
            .setColor(3447003);

            let msg = '';

          const list = new Discord.RichEmbed()
          .setTitle("List of Parts :")
          for(let i = 0; i < que.length; i++) // loop
          {
             msg+= i + ' | ' + que[i] + ` ` + '\n'; // adds '.' and value of que[i] and adds a newline
           list.setTitle("Queue | " +  que.length)
          }
          list.setDescription(msg)
          .setColor(9936031)
          
              
              message.channel.send(Preformingembed).then(()  =>
              {
                message.channel.send(nextprfrmingembed)
               message.channel.send(list);
              })            
          }}}

          if(message.content.toLowerCase() == "!" + "list"){
            {
                if(que2.length === 0) {
                   message.reply('The List is empty, !part to join the List')
                } else {
            

            let msg = '';

          const list = new Discord.RichEmbed()
          .setTitle("List of Parts :")
          for(let i = 0; i < que2.length; i++) // loop
          {
             msg+= i + ' | ' + que2[i] + ` ` + '\n'; // adds '.' and value of que[i] and adds a newline
           list.setTitle("Participants | " +  que2.length)
          }
          list.setDescription(msg)
          .setColor(3447003)
          
              
              
               message.channel.send(list);
                          
          }}}

          if(message.content.toLowerCase() == '!' + 'next')
          if(message.member.roles.some(r => r.name === "Host"))
          {
            message.channel.send({embed :{
                color: 15158332,
                title: "Previous | "  +  que[0]
            }})
            que.shift(que);
            let prfrmingnow = que[0];
            let nextpreformer = que[1];
            

            const Preformingembed = new Discord.RichEmbed()
                .setTitle("Performing Now | "  +  prfrmingnow)
                .setColor(0x00AE86); 
            const nextprfrmingembed = new Discord.RichEmbed()
                .setTitle("Up Next | " + nextpreformer)
                .setColor(3447003);
            message.channel.send(Preformingembed).then(() =>
            {
               message.channel.send(nextprfrmingembed)
            })
        }
   

if(message.content.toLowerCase() == '!' + 'end')
if(message.member.roles.some(r => r.name === "Host"))
{
    function empty() {
        que.length = 0
        que2.length = 0
    }
    empty();
    
}
});


//--------------------------

function nigger(){
    return (Math.floor(Math.random()* 2 ) == 0) ? 'Hey, thats racist' : 'Yall niggas need Jesus';
}
client.on('message', message =>{
   if(message.content.toLowerCase() == '!' + 'nigger'){
       message.channel.send(" " + nigger() + "!");
   }
});


  //________________________________________________________________________

client.on('ready',function(){
        console.log("Ready");
})






client.login('NjIwNjA0NDU0NTE2OTQ5MDIw.XlqXUQ.shXBEVk7_umodTr14nli5xMWXDk');

