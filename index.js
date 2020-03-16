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
    
    {   clearInterval(clock);
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
    {   clearInterval(clock);
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
        {   clearInterval(clock);
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
        {   clearInterval(clock);
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
    
    
    {   clearInterval(clock);
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
            if(timer  == 0)
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

client.on("message", message => {
    if(message.content.toLowerCase() == ";" + "join"){
        message.reply('The prefix for Events has changed from ; to !, so please use !join to Part, !leave to Leave and !queue to see the Queue.')
    }});


client.on('message', message => {
    if(message.content.toLowerCase() === '!' + 'help') {
        message.channel.send({embed: {
            color: 3447003,
            description: "Here are the commands:\n```Coin Flip : !flip \nTimer : !timer 180, 90, 60, 45 or 30 \nStop Timer : !timerstop \nList of Participants : !list \nTimer commands require Timer role \nList command requires Host role```"
        }});
        
    }
});

//!part function
client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "join")
      if(message.member.roles.find(r => r.name === "Participant")){
        }
        else {
        let role = message.guild.roles.find(role=> role.name === "Participant")
             message.member.addRole(role)
            
    }
});

client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "leave")
    if(message.member.roles.find(r => r.name === "Participant")){
            let role = message.guild.roles.find(role=> role.name === "Participant")
            message.member.removeRole(role)
           

    }
    });
       
client.on("message", message => {
    if(message.content.toLowerCase() == "!" + "list"){
    if (message.guild.id == '309374937355911168') {
             
    if(message.member.roles.some(r => r.name === "Host")){
        let roleID = "433941835723964417";
        let membersWithRole = message.guild.roles.get(roleID).members;
        message.guild.roles.get(roleID).members.map(m=>m.displayName);
                           message.channel.send({embed: {
            color: 3447003,
            title: `Participants | ${membersWithRole.size}`,
            description: (message.guild.roles.get(roleID).members.map(m=>m.displayName).join('\n'))
                    }});
                      
      }}
    
    else if (message.guild.id == '184921833756295168') {
            if(message.member.roles.some(r => r.name === "Host")){
                let roleID = "535945835251499038";
                let membersWithRole = message.guild.roles.get(roleID).members;
                message.guild.roles.get(roleID).members.map(m=>m.displayName);
                                   message.channel.send({embed: {
                    color: 3447003,
                    title: `Participants | ${membersWithRole.size}`,
                    description: (message.guild.roles.get(roleID).members.map(m=>m.displayName).join('\n'))
                            }});
                              
              }

    }

    else {
        message.reply('Sorry, this feature is not availible in this server!')
    }



}});


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
});






client.login(process.env.TOKEN);