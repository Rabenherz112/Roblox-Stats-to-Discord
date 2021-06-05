# Roblox-Stats-to-Discord

## Getting Started

#### Requirements
* [Discord Bot Token](https://discord.com/developers/applications)
* [Node v14+](https://nodejs.org/en/)
* [Roblox Group ID](https://www.roblox.com/my/groups)
* Discord Channel ID

#### Configuration

To start with the actuall configuration open the config.json file and replace the following Fields:
* **Token** - Replace the Token with your own Discord Bot token, you can get this in the [Discord Developer Portal](https://discord.com/developers/applications)
* **Guild** - Replace the Guild with your Discord Guild ID. You can get this ID by activating discord developer mode and right clicking on your guild.
* **URLS** - Replace here only the last part "GROUPID" with your roblox GroupID.
* **Voicechannels** - Replace the VoicechannelID with the ChannelID you wish to be edited by the Bot (Always make sure the Bot has enough permissions to edit it)

#### Start the Bot up

Once you invited the Bot to your server you can start the Bot up.
For the first startup run first `npm i` and after that `node .`

The Bot will now update the Channel all 30 Minutes. If you wish this to be shorter go into the index.js file and change the 30 in line 30 to something else.
