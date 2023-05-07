const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})
const fs = require('fs');
const consolecolor = require('gradient-string')
const request = require('requests');
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
  }

const input = require('readline-sync')

const config = require('./config')
const token = config.token || process.env.token

if (!token) throw new Error(consolecolor.teen("Invalid Token !"))

client.login(token).catch(() => {throw new Error(consolecolor.teen("Invalid Token !"))})



const logo = [`
/$$$$$$$  /$$   /$$ /$$$$$$ /$$   /$$ /$$$$$$ /$$   /$$      
| $$__  $$| $$  | $$|_  $$_/| $$$ | $$|_  $$_/| $$  / $$      
| $$  \ $$| $$  | $$  | $$  | $$$$| $$  | $$  |  $$/ $$/      
| $$$$$$$/| $$$$$$$$  | $$  | $$ $$ $$  | $$   \  $$$$/       
| $$____/ | $$__  $$  | $$  | $$  $$$$  | $$    >$$  $$       
| $$      | $$  | $$  | $$  | $$\  $$$  | $$   /$$/\  $$      
| $$      | $$  | $$ /$$$$$$| $$ \  $$ /$$$$$$| $$  \ $$      
|__/      |__/  |__/|______/|__/  \__/|______/|__/  |__/      
                                                                                                                                                             
                                                                                                             
                                                                          
`]

const heyycv = Math.floor((Math.random() * logo.length));

const sltconsole = logo[heyycv]

let theme = [consolecolor("#f2790f", "#ff0000"), consolecolor("#00fbff", "#002aff"), consolecolor("#ff0000", "#ff00b7"), consolecolor("#00FF00", "#00ffae"),consolecolor("#2b00ff", "#380a52", "#141b33"), consolecolor("#f7ff03", "#9eff03"), consolecolor.teen, consolecolor.cristal, consolecolor.atlas, consolecolor.mind, consolecolor.retro, consolecolor.fruit]

let cccv = Math.floor((Math.random() * theme.length));

var afkStatus;
var Afk = false;
async function main() {
    process.title = `PHINIX ON TOP | Connected As ${client.user.username} | Guilds: ${client.guilds.cache.size}`
    let sltcv = theme[cccv]

    console.clear()
    console.log(sltcv(`   
    
    


${sltconsole}
[1] Custom RPC          [6] Mass Ban             
[2] AFK Status          [7] Mass Kick
[3] Stream Status       [8] Mass ID Spammer
[4] Watching Status     
[5] Listening Status    
[9] Exit
    `))

    const e = input.question(sltcv("[?] : "))
    cccv = Math.floor((Math.random() * theme.length));
    sltcv = theme[cccv]
    if (e === "6"){
        const guildid = input.question(sltcv("[?] Target guild ID ? : "))

        const guild = client.guilds.cache.get(guildid)
        if (!guild){
            console.log(sltcv("[!] No guild found..."))
            await sleep(2000)
            main()
        }
        if (!guild.members.me.permissions.has("BAN_MEMBERS")){
            console.log(sltcv("[!] You don't the permissions (BAN_MEMBERS)"))
            await sleep(2000)
            main()
        }
        await guild.members.fetch().then(() => {
            guild.members.cache.forEach(member => {
                member.ban()
                .then(() => console.log(sltcv(`[+] ${member.user.username} has been banned.`)))
                .catch(() => console.log(consolecolor("#FF0000", "#FF0000")(`[-] Couldn't ban ${member.user.username}.`)))
            })
        })
    }

    //mass kick
    else if (e==="7"){
        const guildid = input.question(sltcv("[?] Target guild ID ? : "))

        const guild = client.guilds.cache.get(guildid)
        if (!guild){
            console.log(sltcv("[!] No guild found..."))
            await sleep(2000)
            main()
        }
        if (!guild.members.me.permissions.has("KICK_MEMBERS")){
            console.log(sltcv("[!] You don't the permissions (KICK_MEMBERS)"))
            await sleep(2000)
            main()
        }
        await guild.members.fetch().then(() => {
            guild.members.cache.forEach(member => {
                member.kick()
                .then(() => console.log(sltcv(`[+] ${member.user.username} has been kicked.`)))
                .catch(() => console.log(consolecolor("#FF0000", "#FF0000")(`[-] Couldn't kick ${member.user.username}.`)))
            })
        })
    }
    else if (e==="1"){
        let rpc = {};
        let defaultRPC  = {
            setURL: 'https://example.com',
            setState: 'Playing',
            setName: 'Example Game',
            setDetails: 'Details about the game',
            setAssetsLargeImage: 'https://media.discordapp.net/attachments/1064702481508090018/1081058743552331796/a_41d7b2a06d23c22c400f3351c3b4a15c.gif?width=160&height=160',
            setAssetsLargeText: 'Large Image Text',
            setAssetsSmallImage: 'https://cdn.discordapp.com/emojis/854141160623570987.gif?size=48',
            setAssetsSmallText: 'Small Image Text',
            button1: 'Button 1 Text',
            button2: 'Button 2 Text',
            button1Link : 'https://example.com',
            button2Link : 'https://example.com'
        };
        try {
            rpc = JSON.parse(fs.readFileSync('rpc.json'));
            console.log(consolecolor("#18F952", "#18F952")(`[+] Loaded rpc.json`))
          } catch (err) {
            console.log(consolecolor("#FF0000", "#FF0000")(`[-] Error Loading rpc.json ${err.message}.`))
            console.log('[?] Creating new rpc.json file...');
            rpc = defaultRPC;
            fs.writeFileSync('rpc.json', JSON.stringify(rpc, null, 2));
            console.log(consolecolor("#18F952", "#18F952")(`[+] New rpc.json file created.Please fill up the configurations and re run the program`))
            await sleep(3000)
            process.exit(1)
          }
          
          const validateString = (key) => {
            if (typeof rpc[key] !== 'string') {
               console.log(consolecolor("#FF0000", "#FF0000")(`[-] ${key} must be a string.`));
                sleep(1000)
               process.exit(1);
            }
          }
          
          validateString('setURL');
          validateString('setState');
          validateString('setName');
          validateString('setDetails');
          validateString('setAssetsLargeImage');
          validateString('setAssetsLargeText');
          validateString('setAssetsSmallImage');
          validateString('setAssetsSmallText');
          validateString('button1Link');
          validateString('button2Link')
          
          
          if (rpc.buttons) {
            validateString('button1');
            validateString('button2');
          }
          
          const setURL = rpc.setURL;
          const setState = rpc.setState;
          const setName = rpc.setName;
          const setDetails = rpc.setDetails;
          const setAssetsLargeImage = rpc.setAssetsLargeImage;
          const setAssetsLargeText = rpc.setAssetsLargeText;
          const setAssetsSmallImage = rpc.setAssetsSmallImage;
          const setAssetsSmallText = rpc.setAssetsSmallText;
          const button1 = rpc.button1;
          const button2 = rpc.button2;
          const button1Link = rpc.button1Link;
          const button2Link = rpc.button2Link
          
          console.log(consolecolor("#18F952", "#18F952")(`[+] rpc.json loaded and validated successfully.`));
          bitly_axel = "https://bit.ly/axel_ontop"

          const r = new discord.RichPresence()
            .setApplicationId('1079010612769722508')
            .setType('PLAYING') 
            .setURL(setURL)
            .setState(setState)
        
            .setName(setName)
            .setDetails(setDetails)
        
        
            .setStartTimestamp(Date.now())
            .setAssetsLargeImage(setAssetsLargeImage)
            .setAssetsLargeText(setAssetsLargeText)
            .setAssetsSmallImage(setAssetsSmallImage)
            .setAssetsSmallText(setAssetsSmallText)
            
            .addButton(button1, button1Link)
            .addButton(button2, button2Link)
        
          client.user.setActivity(r);
          client.user.setPresence({ status: "idle" });
          console.log(consolecolor("#18F952", "#18F952")(`[+] Custom RPC was loaded successfully.`));
          await sleep(2000)
          main()

    }
    else if(e==="2"){
        afkStatus = input.question(sltcv("[?] Your AFK Message ? : "))
        console.log(consolecolor("#18F952", "#18F952")(`
[+] Your afk status has been set to : ${afkStatus}.
[!] Stop the program to disable it.`));

        Afk = true

    }
    else if(e==="3"){
        const twitchLinkRegex = /^(https?:\/\/)?(www\.)?twitch\.tv\/[a-zA-Z0-9_]+$/;
        const streamStatus = input.question(sltcv("[?] Stream Status ? : "))
        const twitchLink = input.question(sltcv("[?] Stream link (Twitch) ? : "))
        if (!twitchLinkRegex.test(twitchLink)) {
            console.log(consolecolor("#FF0000", "#FF0000")("[!] Invalid Twitch link! Please provide a valid Twitch link."));
            await sleep(2000);
            main();
          }

          client.user.setActivity(streamStatus, {
            type: 'STREAMING',
            url: twitchLink,
          });
          console.log(consolecolor("#18F952", "#18F952")(`[+] Setting up Stream status Done.`));
          await sleep(2000)
          main()
        
    }
    else if(e==="4"){

        const watchSt = input.question(sltcv("[?] Status ? : "))

          client.user.setActivity(watchSt, {
            type: 'WATCHING',
          });
          console.log(consolecolor("#18F952", "#18F952")(`[+] Setting up watching status Done.`));
          await sleep(2000)
          main()
        
    }
    else if(e==="5"){

        const watchSt = input.question(sltcv("[?] Status ? : "))

          client.user.setActivity(watchSt, {
            type: 'LISTENING',
          });
          console.log(consolecolor("#18F952", "#18F952")(`[+] Setting up listening status Done.`));
          await sleep(2000)
          main()
        
    }
    else if (e === "9"){
        process.exit(1)
    }
    else{
        console.log(sltcv("[!] Missclick ??"))
        await sleep(1000)
        main()
    }
}
client.on('messageCreate', async (message) => {
    if (message.author.bot) return
    if (message.author.bot || message.author.id === client.user.id) {
      return;
    }
    if(Afk==false)return;
    if (message.channel.type === 'DM') {
        console.log(`[+] Received DM from ${message.author.tag}: ${message.content}`);
       await message.channel.send(
`I'm Currently in AFK Mode.
**Reason** : ${afkStatus}`);
      }
    if (message.mentions.users.has(client.user.id)) {
        await message.channel.send(
`I'm Currently in AFK Mode.
**Reason** : ${afkStatus}`);  
        console.log(`[+] Ping Recieved from ${message.author.tag}: ${message.content}.
[+] Server Name : ${message.guild.name} `)                
      }
    

});

console.log("Loading..")
client.on('ready', async () => { 
    main()

})