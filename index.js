const discord = require('discord.js-selfbot-v13')
const client = new discord.Client({checkUpdate: false})

const consolecolor = require('gradient-string')

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


async function main() {
    process.title = `PHINIX ON TOP | Connected As ${client.user.username} | Guilds: ${client.guilds.cache.size}`
    let sltcv = theme[cccv]

    console.clear()
    console.log(sltcv(`   
    
    


${sltconsole}



[1] MassBan
[2] MassKick
[3] Exit
    `))

    const e = input.question(sltcv("[?] : "))
    cccv = Math.floor((Math.random() * theme.length));
    sltcv = theme[cccv]
    if (e === "1"){
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
    else if (e==="2"){
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
    else if (e === "3"){
        process.exit(1)
    }
    else{
        console.log(sltcv("[!] Missclick ??"))
        await sleep(1000)
        main()
    }
}



client.on('ready', () => main())