const { token } = require("./config.json");
const DiscordJS = require("discord.js");
const WOKCommands = require("wokcommands");
const path = require("path");
const { appendFile } = require("fs");
const { Intents } = DiscordJS;

const host = "0.0.0.0";
const port = process.env.PORT || 3000;

const client = new DiscordJS.Client({
  intents: [
    Intents.FLAGS.GUILDS,
    Intents.FLAGS.GUILD_MESSAGES,
    Intents.FLAGS.GUILD_MESSAGE_REACTIONS,
  ],
});

client
  .once("ready", () => {
    new WOKCommands(client, {
      commandsDir: path.join(__dirname, "commands"),
    }),
      client.user.setActivity(`/stack`, { type: "PLAYING" });
  })
  .listen(port, host, function () {
    console.log("Server started...");
  });

// Login to Discord with your client's token
client.login(token);
