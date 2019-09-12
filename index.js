const Discord = require("discord.js");
const client = new Discord.Client();
const RichEmbed = require('discord.js');


global.servers = {};

//-----------------
//EMBEDS
//-----------------
//Timer
client.on("message", message => {
    if(message.content.toLowerCase() == "!timer 90")
    {   
        message.channel.send("90 SECONDS ON THE CLOCK")
        let timer = 90;
        const clock = setInterval(() => {
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
        {   
        message.channel.send("60 SECONDS ON THE CLOCK")
        let timer = 60;
        const clock = setInterval(() => {
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
    if(message.content.toLowerCase() == "!timer 30")
        {   
        message.channel.send("30 SECONDS ON THE CLOCK")
        let timer = 30;
        const clock = setInterval(() => {
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


//--------------------
//Playing a game :
client.on("ready", () => {
    let user = "I say the 3, yall say the 2 and the 1. In 3... 2.... 1...."
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
            description: "Here are the commands:\n```Coin Flip : !flip \nTimer : !timer 90, 60 or 30 \nPart in Tourney : !part \nList of Parts : !list \nEnd Tourney : !end```"
        }});
        
    }
});

//!part function
client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "part")
      if(message.member.roles.find(r => r.name === "Participant"))
        message.reply("You already have the Role!")
        else {
        let role = message.guild.roles.find(role=> role.name === "Participant")
             message.member.addRole(role)
             message.reply("You've been added to the list!!");
    }
})

client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "end")
    if(message.member.roles.some(r => r.name === "Judge")){
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
    })

  
       
client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "list"){
        let roleID = "433941835723964417";
        let membersWithRole = message.guild.roles.get(roleID).members;
        message.guild.roles.get(roleID).members.map(m=>m.displayName);
                           message.channel.send({embed: {
            color: 3447003,
            title: `Participants | ${membersWithRole.size}`,
            description: (message.guild.roles.get(roleID).members.map(m=>m.displayName).join('\n'))
                    }});
                      
      }
    })
//----------------------------------------------------------------


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



client.login(process.env.TOKEN);