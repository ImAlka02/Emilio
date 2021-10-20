require("dotenv").config();
const fetch = require('node-fetch');
const { Client, Intents, MessageEmbed } = require("discord.js");
const client = new Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.DIRECT_MESSAGES,
  ],
});
let prefix = process.env.PREFIX;

///Funciones///
function generarLetra(){
	var letras = ["a","b","c","d","e","f","0","1","2","3","4","5","6","7","8","9"];
	var numero = (Math.random()*15).toFixed(0);
	return letras[numero];
}
	
function colorHEX(){
	var coolor = "";
	for(var i=0;i<6;i++){
		coolor = coolor + generarLetra() ;
	}
	return "#" + coolor;
}
//////////////////

if (!globalThis.fetch) {
  globalThis.fetch = fetch;
}

client.once("ready", (err) => 
  {
    console.log("Ready and logged in as " + client.user.tag);
    client.user.setActivity('Puedes llamarme con !Emilio', {type: "PLAYING"})
  });

//////// Interacciones ////////
client.on("messageCreate", async(message) => 
{

  const args = message.content.slice(prefix.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  let mencionado = message.mentions.users.first();


  if(command === "Emilio" || command === "Emilie" || command === "emilio" || command === "emilie")
  {
    const embed = new MessageEmbed()
        .setColor('#ff8000')
        .setTitle('Presentacion')
        .setAuthor('!Emilio', 'https://i.imgur.com/iuMRW5X.png')
        .setDescription('Holaa, mi nombre es Emilio y soy un Melon Mexicano :D')
        .setThumbnail('https://i.imgur.com/iuMRW5X.png')
        .addFields(
          {name: 'Comandos', value: '!kill - !sad - !punch \n!suicide - !hi - !greetme \n!dance - !nausea - !ty \n!angry - !shy - !sleep \n!hug - !happy'},
        )
        .setImage('https://i.imgur.com/CmUeb0R.png')
        //.setImage('https://tenor.com/5Sou.gif')
        message.channel.send({ embeds: [embed] })
  }
  
  if( command === "kill" || command === "Kill"  )
  {
    
    if(!mencionado){
      const lmt = 56;
      const search_term = "matar";
      const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
           + "&limit=" + lmt;

      const getCumGif = async () => {
          const res = await fetch(search_url);
          const gif = await res.json();

          return gif;
      } 
      const gif = await getCumGif()
      const randomNumber = Math.floor(Math.random() * gif.results.length);

      const exampleEmbed = new MessageEmbed()
          .setColor(colorHEX())
          .setDescription(`${message.author} ha matado a alguien  :smiling_imp: ...`)
          .setImage(gif.results[randomNumber].media[0].gif.url)
          .setTimestamp()
          .setFooter('Made by ImAlka');

      message.channel.send({ embeds: [exampleEmbed] });
    } else {
    const lmt = 56;
      const search_term = "matar";
      const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
           + "&limit=" + lmt;

      const getCumGif = async () => {
          const res = await fetch(search_url);
          const gif = await res.json();

          return gif;
      }
      const gif = await getCumGif()
      const randomNumber = Math.floor(Math.random() * gif.results.length);

      const exampleEmbed = new MessageEmbed()
          .setColor(colorHEX())
          .setDescription(`${message.author} ha matado a ${mencionado.username}  :smiling_imp: ...`)
          .setImage(gif.results[randomNumber].media[0].gif.url)
          .setTimestamp()
          .setFooter('Made by ImAlka');

      message.channel.send({ embeds: [exampleEmbed] });
    }
  } 

  if(command === "Sad" || command === "sad" )
  {
    
    const lmt = 56;
      const search_term = "sad";
      const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
           + "&limit=" + lmt;

      const getCumGif = async () => {
          const res = await fetch(search_url);
          const gif = await res.json();

          return gif;
      }
      const gif = await getCumGif()
      const randomNumber = Math.floor(Math.random() * gif.results.length);

      const exampleEmbed = new MessageEmbed()
          .setColor(colorHEX())
          .setDescription(`${message.author} esta triste u.u ...`)
          .setImage(gif.results[randomNumber].media[0].gif.url)
          .setTimestamp()
          .setFooter('Made by ImAlka');

      message.channel.send({ embeds: [exampleEmbed] });
  }
  
  if (command === "punch" || command === "Punch") {
      if(!mencionado){
        const lmt = 56;
        const search_term = "golpe-anime";
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
             + "&limit=" + lmt;
  
        const getCumGif = async () => {
            const res = await fetch(search_url);
            const gif = await res.json();
  
            return gif;
        }
        const gif = await getCumGif()
        const randomNumber = Math.floor(Math.random() * gif.results.length);
  
        const exampleEmbed = new MessageEmbed()
            .setColor(colorHEX())
            .setDescription(`${message.author.username} se vergueo a alguien x.x`)
            .setImage(gif.results[randomNumber].media[0].gif.url)
            .setTimestamp()
            .setFooter('Made by ImAlka');
  
        message.channel.send({ embeds: [exampleEmbed] });
      }else {
      const lmt = 56;
      const search_term = "golpe-anime";
      const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
           + "&limit=" + lmt;

      const getCumGif = async () => {
          const res = await fetch(search_url);
          const gif = await res.json();

          return gif;
      }
      const gif = await getCumGif()
      const randomNumber = Math.floor(Math.random() * gif.results.length);

      const exampleEmbed = new MessageEmbed()
          .setColor(colorHEX())
          .setDescription(`${message.author.username} se verguea a ${mencionado.username} x.x`)
          .setImage(gif.results[randomNumber].media[0].gif.url)
          .setTimestamp()
          .setFooter('Made by ImAlka');

      message.channel.send({ embeds: [exampleEmbed] });
    }
  }

  if (command === "Angry" || command === "angry") {
    if(!mencionado){
      const lmt = 56;
      const search_term = "enojado";
      const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
           + "&limit=" + lmt;

      const getCumGif = async () => {
          const res = await fetch(search_url);
          const gif = await res.json();

          return gif;
      }
      const gif = await getCumGif()
      const randomNumber = Math.floor(Math.random() * gif.results.length);

      const exampleEmbed = new MessageEmbed()
          .setColor(colorHEX())
          .setDescription(`${message.author.username} ESTA FURIOSO/A <:677625422996832302:766371650848423957>`)
          .setImage(gif.results[randomNumber].media[0].gif.url)
          .setTimestamp()
          .setFooter('Made by ImAlka');

      message.channel.send({ embeds: [exampleEmbed] });
    }else {
    const lmt = 56;
    const search_term = "enojado";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} se emputo contigo ${mencionado.username} <:677625422996832302:766371650848423957> `)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
  }
  }

  if (command === "suicide" || command === "Suicide") 
       {
        const lmt = 56;
        const search_term = "suicide";
        const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
             + "&limit=" + lmt;
  
        const getCumGif = async () => {
            const res = await fetch(search_url);
            const gif = await res.json();
  
            return gif;
        }
        const gif = await getCumGif()
        const randomNumber = Math.floor(Math.random() * gif.results.length);
  
        const exampleEmbed = new MessageEmbed()
            .setColor(colorHEX())
            .setDescription(`${message.author.username} se ha suicidado u.u ...`)
            .setImage(gif.results[randomNumber].media[0].gif.url)
            .setTimestamp()
            .setFooter('Made by ImAlka');
  
        message.channel.send({ embeds: [exampleEmbed] });
  }

  if (command === "hi" || command === "Hi") {
      if(!mencionado) {
        const lmt = 56;
      const search_term = "hi";
      const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
           + "&limit=" + lmt;

      const getCumGif = async () => {
          const res = await fetch(search_url);
          const gif = await res.json();

          return gif;
      }
      const gif = await getCumGif()
      const randomNumber = Math.floor(Math.random() * gif.results.length);

      const exampleEmbed = new MessageEmbed()
          .setColor(colorHEX())
          .setDescription(`${message.author.username} les dice holaaa UwU`)
          .setImage(gif.results[randomNumber].media[0].gif.url)
          .setTimestamp()
          .setFooter('Made by ImAlka');

      message.channel.send({ embeds: [exampleEmbed] });
      }else{
      const lmt = 56;
      const search_term = "hi";
      const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
           + "&limit=" + lmt;

      const getCumGif = async () => {
          const res = await fetch(search_url);
          const gif = await res.json();

          return gif;
      }
      const gif = await getCumGif()
      const randomNumber = Math.floor(Math.random() * gif.results.length);

      const exampleEmbed = new MessageEmbed()
          .setColor(colorHEX())
          .setDescription(`${message.author.username} te dice holaaaa ${mencionado.username}`)
          .setImage(gif.results[randomNumber].media[0].gif.url)
          .setTimestamp()
          .setFooter('Made by ImAlka');

      message.channel.send({ embeds: [exampleEmbed] });
    }
  }

  if (command === "greetMe" || command === "greetme" || command === "Greetme" || command === "GreetMe"  ) {
    
      const lmt = 56;
    const search_term = "saludo";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`Hola mi estimado/a ${message.author.username} <:848007417282297888:884541930107723786> `)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
    
  }

  if(command === "dance" || command === "Dance"){
    if(!mencionado) {
      const lmt = 56;
    const search_term = "anime-dance-gif";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} derrocha talento en la pistaa UwU`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
    }else{
    const lmt = 56;
    const search_term = "two-people-dancing";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} y ${mencionado.username} se ven hermosos bailando UwU`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
  }
  }

  if(command === "nausea" || command === "Nausea"){
    if(!mencionado) {
      const lmt = 56;
    const search_term = "Nauseated";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`A ${message.author.username} le da asco`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
    }else{
    const lmt = 56;
    const search_term = "Nauseated";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`A ${message.author.username} le das asco ${mencionado.username} :nauseated_face: `)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
  }
  }
  
  if(command === "ty" || command === "Ty"){
    if(!mencionado) {
      const lmt = 56;
    const search_term = "thank-you";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} te da las graciaas :3`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
    }else{
    const lmt = 56;
    const search_term = "thank-you";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} te da las gracias ${mencionado.username} :D `)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
  }
  }

  if(command === "shy" || command === "Shy"){
    if(!mencionado) {
      const lmt = 56;
    const search_term = "shy";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} es shy <:736993235406159912:766371454232559656>`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
    }else{
    const lmt = 56;
    const search_term = "shy";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} es shy por ${mencionado.username} <:736993235406159912:766371454232559656>`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
  }
  }

  if(command === "sleep" || command === "Sleep"){
    if(!mencionado) {
      const lmt = 56;
    const search_term = "sleep";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} llego la hora de irse a dormir U.u `)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
    }else{
    const lmt = 56;
    const search_term = "sleep";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} a mimir se ha dicho ${mencionado.username} U.u`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
  }
  }

  if(command === "hug" || command === "Hug"){
    if(!mencionado) {
      const lmt = 56;
    const search_term = "virtual-hug";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} les manda un abrazo :3 `)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
    }else{
    const lmt = 56;
    const search_term = "friend-hug";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} te manda un abrazo ${mencionado.username} uwu`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
  }
  }

  if(command === "happy" || command === "Happy"){
    if(!mencionado) {
      const lmt = 56;
    const search_term = "smile";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} esta feli c: `)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
    }else{
    const lmt = 56;
    const search_term = "smile";
    const search_url = "https://g.tenor.com/v1/search?q=" + search_term + `&key=${process.env.TENORKEY}` +
         + "&limit=" + lmt;

    const getCumGif = async () => {
        const res = await fetch(search_url);
        const gif = await res.json();

        return gif;
    }
    const gif = await getCumGif()
    const randomNumber = Math.floor(Math.random() * gif.results.length);

    const exampleEmbed = new MessageEmbed()
        .setColor(colorHEX())
        .setDescription(`${message.author.username} te comparte de su felicidad ${mencionado.username} c:`)
        .setImage(gif.results[randomNumber].media[0].gif.url)
        .setTimestamp()
        .setFooter('Made by ImAlka');

    message.channel.send({ embeds: [exampleEmbed] });
  }
  }

  ///// Comando para ver que escribe ALKA /////
  if(message.author.discriminator == "3747")
    {
           console.log(message.content)
  } 
  //////////////////////////////////////////////
})
client.login(process.env.BOTTOKEN)