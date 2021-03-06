const Discord = require("discord.js");
const client = new Discord.Client();
const RichEmbed = require("discord.js");

//-----------------
//EMBEDS
//-----------------
//Timer

let clock;

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!timer 180")
    if (message.member.roles.some((r) => r.name === "Timer")) {
      clearInterval(clock);
      message.channel.send({
        embed: {
          color: 0x7289da,
          title: "180 SECONDS ON THE CLOCK",
        },
      });
      let timer = 180;
      clock = setInterval(() => {
        timer--;
        console.log(timer);
        if (timer == 180) {
          message.channel.send({
            embed: {
              color: 0x7289da,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 90) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 60) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 30) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 10) {
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 0) {
          clearInterval(clock);
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: "...TIME...",
            },
          });
        }
      }, 1000);
    }
});
client.on("message", (message) => {
  if (message.content.toLowerCase() == "!timer 90")
    if (message.member.roles.some((r) => r.name === "Timer")) {
      clearInterval(clock);
      message.channel.send({
        embed: {
          color: 0x7289da,
          title: "90 SECONDS ON THE CLOCK",
        },
      });
      let timer = 90;
      clock = setInterval(() => {
        timer--;
        console.log(timer);
        if (timer == 60) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 45) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 30) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 15) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 5) {
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 0) {
          clearInterval(clock);
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: "...TIME...",
            },
          });
        }
      }, 1000);
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!timer 60")
    if (message.member.roles.some((r) => r.name === "Timer")) {
      clearInterval(clock);
      message.channel.send({
        embed: {
          color: 0x7289da,
          title: "60 SECONDS ON THE CLOCK",
        },
      });
      let timer = 60;
      clock = setInterval(() => {
        timer--;
        console.log(timer);
        if (timer == 45) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 30) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 25) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 15) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 10) {
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 5) {
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: timer + " Seconds left",
            },
          });
        }
        if (timer == 0) {
          clearInterval(clock);
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: "...TIME...",
            },
          });
        }
      }, 1000);
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!timer 45")
    if (message.member.roles.some((r) => r.name === "Timer")) {
      clearInterval(clock);
      message.channel.send({
        embed: {
          color: 0x7289da,
          title: "45 SECONDS ON THE CLOCK",
        },
      });

      let timer = 45;
      clock = setInterval(() => {
        timer--;
        console.log(timer);
        if (timer == 45) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 30) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 20) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }

        if (timer == 10) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 5) {
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 0) {
          clearInterval(clock);
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: "...TIME...",
            },
          });
        }
      }, 1000);
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!timer 30")
    if (message.member.roles.some((r) => r.name === "Timer")) {
      clearInterval(clock);
      message.channel.send({
        embed: {
          color: 0x7289da,
          title: "30 SECONDS ON THE CLOCK",
        },
      });
      let timer = 30;
      clock = setInterval(() => {
        timer--;
        console.log(timer);

        if (timer == 30) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 25) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 20) {
          message.channel.send({
            embed: {
              color: 0xaaf542,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 15) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 10) {
          message.channel.send({
            embed: {
              color: 0xf57e42,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 5) {
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: timer + " Seconds Left",
            },
          });
        }
        if (timer == 0) {
          clearInterval(clock);
          message.channel.send({
            embed: {
              color: 0xf55742,
              title: "...TIME...",
            },
          });
        }
      }, 1000);
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!" + "stop") {
    clearInterval(clock);
    message.channel.send({
      embed: {
        color: 0x7289da,
        title: "TIMER HAS BEEN STOPPED",
      },
    });
  }
});

//--------------------
//Playing a game :
client.on("ready", () => {
  let user = "ONE LOVE - ONE LANGUAGE \nBEATBOX INTERNATIONAL";
  client.user.setActivity(user);
});

//----------------------------------------------------------------
//Flip a coin
function coinFlip() {
  return Math.floor(Math.random() * 2) == 0 ? "Tails!" : "Heads!";
}
client.on("message", (message) => {
  if (message.content.toLowerCase() == "!" + "flip") {
    message.channel.send({
      embed: {
        color: 0x7289da,
        title: "It's" + " " + coinFlip() + "!",
      },
    });
  }
});
//------------------------------------------------------------------

client.on("message", (message) => {
  if (message.content.toLowerCase() === "!" + "help") {
    message.channel.send({
      embed: {
        color: 0x7289da,
        description:
          "Coin Flip : !flip \nTimer : !timer 180, 90, 60, 45 or 30 \nStop Timer : !stop \nTimer commands require Timer role!",
      },
    });
  }
});

//Tournament -------------------------------------------------------------

var unlocked = [];

client.on("message", (message) => {
  if (message.content.toLowerCase() == "?" + "start")
    if (message.member.roles.some((r) => r.name === "Host")) {
      function empty() {
        que.length = 0;
      }
      empty();

      unlocked = true;
      message.channel.send({
        embed: {
          color: 0x7289da,
          description: "The Queue is now open, type !join to part!",
        },
      });
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!" + "lock")
    if (message.member.roles.some((r) => r.name === "Host")) {
      unlocked = false;
      message.reply("Queue is now locked!");
    } else {
      message.reply("Sorry, you dont have permission to do that!");
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!" + "open")
    if (message.member.roles.some((r) => r.name === "Host")) {
      unlocked = true;
      message.reply("Queue is now open!");
    } else {
      message.reply("Sorry, you dont have permission to do that!");
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!" + "join")
    if (unlocked) {
      if (message.member.roles.find((r) => r.name === "Participant")) {
      } else {
        let role = message.guild.roles.find(
          (role) => role.name === "Participant"
        );
        message.member.addRole(role);
      }
    } else {
      message.reply("Sorry, the Queue has been locked!");
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!" + "quitit")
    if (message.member.roles.find((r) => r.name === "Participant")) {
      let role = message.guild.roles.find(
        (role) => role.name === "Participant"
      );
      message.member.removeRole(role);
    }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "!" + "list") {
    if (message.guild.id == "309374937355911168") {
      if (message.member.roles.some((r) => r.name === "Host")) {
        let roleID = "433941835723964417";
        let membersWithRole = message.guild.roles.get(roleID).members;
        message.guild.roles.get(roleID).members.map((m) => m.displayName);
        message.channel.send({
          embed: {
            color: 0x7289da,
            title: `Participants | ${membersWithRole.size}`,
            description: message.guild.roles
              .get(roleID)
              .members.map((m) => m.displayName)
              .join("\n"),
          },
        });
      }
    } else if (message.guild.id == "184921833756295168") {
      if (message.member.roles.some((r) => r.name === "Host")) {
        let roleID = "535945835251499038";
        let membersWithRole = message.guild.roles.get(roleID).members;
        message.guild.roles.get(roleID).members.map((m) => m.displayName);
        message.channel.send({
          embed: {
            color: 0x7289da,
            title: `Participants | ${membersWithRole.size}`,
            description: message.guild.roles
              .get(roleID)
              .members.map((m) => m.displayName)
              .join("\n"),
          },
        });
      }
    } else {
      message.reply("Sorry, this feature is not availible in this server!");
    }
  }
});

client.on("message", (message) => {
  if (message.content.toLowerCase() == "?" + "endthedamntournament")
    if (message.member.roles.some((r) => r.name === "Host")) {
      let role = message.guild.roles.find((role) => role.name == "Participant");
      message.guild.members.forEach((member) => {
        if (!member.roles.find((t) => t.name == "Participant")) return;
        member.removeRole(role);
      });
      message.channel.send("Tournament is Over, all Participants removed!");
    } else {
      message.reply("Sorry, you dont have permission to do that!");
    }
});

var que = [];
var partstart = [];
client.on("message", (message) => {
  if (message.content.toLowerCase() == "!" + "join") {
    if (unlocked) {
      if (message.member.roles.find((r) => r.name === "Participant")) {
      } else {
        que.push(message.member.displayName);
        message.reply("You have been added to the queue");
      }
    }
  }

  if (message.content.toLowerCase() == "!" + "quitit") {
    if (que.indexOf(message.member.displayName) === -1) {
      message.reply("You are not in the Queue!");
    } else {
      que.splice(que.indexOf(message.member.displayName), 1);

      message.reply("You Have been removed from the List");
    }
  }

  if (message.content.toLowerCase() == "!" + "queue") {
    {
      if (que.length === 0) {
        message.reply("The Queue is empty, !join to join the Queue.");
      } else {
        let prfrmingnow = que[0];

        const Preformingembed = new Discord.RichEmbed()
          .setTitle("Performing Now | " + prfrmingnow)
          .setColor(0xaaf542);

        let nextpreformer = que[1];

        const nextprfrmingembed = new Discord.RichEmbed()
          .setTitle("Up Next | " + nextpreformer)
          .setColor(0x3baced);

        let msg = "";

        const list = new Discord.RichEmbed().setTitle("List of Parts :");
        for (
          let i = 0;
          i < que.length;
          i++ // loop
        ) {
          msg += i + " | " + que[i] + ` ` + "\n"; // adds '.' and value of que[i] and adds a newline
          list.setTitle("Queue | " + que.length);
        }
        list.setDescription(msg).setColor(0x7289da);

        message.channel.send(Preformingembed).then(() => {
          message.channel.send(nextprfrmingembed);
          message.channel.send(list);
        });
      }
    }
  }

  if (message.content.toLowerCase() == "!" + "next")
    if (message.member.roles.some((r) => r.name === "Host")) {
      message.channel.send({
        embed: {
          color: 0xf57e42,
          title: "Previous | " + que[0],
        },
      });
      que.shift(que);
      let prfrmingnow = que[0];
      let nextpreformer = que[1];

      const Preformingembed = new Discord.RichEmbed()
        .setTitle("Performing Now | " + prfrmingnow)
        .setColor(0xaaf542);
      const nextprfrmingembed = new Discord.RichEmbed()
        .setTitle("Up Next | " + nextpreformer)
        .setColor(0x3baced);
      message.channel.send(Preformingembed).then(() => {
        message.channel.send(nextprfrmingembed);
      });
    }
  msg = message.content.toLowerCase();
  let mention = message.mentions.members.first();

  if (msg.startsWith("!" + "add")) {
    if (mention == null) {
      return;
    }
    let user = mention.displayName;
    message.channel.send({
      embed: {
        color: 0xaaf542,
        title: user + " has been added to the Queue ",
      },
    });
    que.push(user);
  }

  if (msg.startsWith("!" + "remove")) {
    if (mention == null) {
      return;
    }
    let user = mention.displayName;
    message.channel.send({
      embed: {
        color: 0xf57e42,
        title: user + " has been removed from the Queue ",
      },
    });
    que.splice(que.indexOf(user), 1);
  }

  if (message.content.toLowerCase() == "?" + "end")
    if (message.member.roles.some((r) => r.name === "Host")) {
      function empty() {
        que.length = 0;
      }
      empty();
      message.channel.send("Tournament is Over, all Participants removed!");
    }
});

///-----------------------------------------------------------------

client.on("ready", function () {
  console.log("Ready");
});

client.login(process.env.TOKEN);
