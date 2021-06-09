//Note: Please only change Stuff if you know what you are doing!
const axios = require('axios');
const Discord = require('discord.js');
const config = require('./config.json');
const client = new Discord.Client();

client.on('ready', async () => {
    console.log(`Logged in as ${client.user.tag}!`);

    setInterval(async () => {
        const guild = client.guilds.cache.get(config.guild);
        
        // Get's the Channel as well as sends a request to Roblox to find all Infos about the Group
        const memberschannel = guild.channels.cache.get(config.voicechannels.RobloxGroupMemberCount);
        const membersrequest = await axios.get(config.urls.RobloxGroupInfos);

        // Filter's the Data, to only see the Group Member Count
        const membersCount = membersrequest.data.memberCount;

        // Uses the saved Data and edits the Voice Channel
        memberschannel.setName('Total Members: ' + membersCount);

        const status = [
            `over the Roblox Group`, // You can add here your custom Bot status
            `what roblox is doing`
        ];

        const index = Math.floor(Math.random() * status.length);

        client.user.setPresence({ activity: { name: status[index], type: 'WATCHING' } });
    }, 30 * 60 * 1000); // 30min * 60sec * 1000ms  = Updates Status and Group Stats all 30 minutes
});

client.login(config.token);
