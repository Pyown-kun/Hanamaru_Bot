require("dotenv").config();
const {
  Client,
  IntentsBitField,
  ClientApplication,
  Embed,
  EmbedBuilder,
} = require("discord.js");

const client = new Client({
  intents: [
    IntentsBitField.Flags.Guilds,
    IntentsBitField.Flags.GuildMembers,
    IntentsBitField.Flags.GuildMessages,
    IntentsBitField.Flags.MessageContent,
  ],
});

client.on("ready", (c) => {
  console.log(`${c.user.username} is Online`);
});

client.on("messageCreate", (message) => {
  if (message.author.bot) {
    return;
  }

  if (message.content === "Hey") {
    message.reply("Hey!");
  }
  if (message.content === "Hello") {
    message.reply("Hello");
  }
});

client.on("interactionCreate", (interaction) => {
  if (!interaction.isChatInputCommand()) return;

  if (interaction.commandName === "embed") {
    const embedImage = new EmbedBuilder()
      .setColor(0xffb390)
      .setImage("https://c.tenor.com/-InnPLsYruoAAAAC/tenor.gif");

    const embed = new EmbedBuilder()
      .setColor(0xffb390)
      .setTitle("❢◥ ▬▬▬▬ WELCOME TO ZURAMARU PLAYGROUND ▬▬▬▬ ◤❢")
      .setDescription(
        `Hello @everyone

      We’re excited to have you join us in this welcoming and creative space. Zuramaru Playground is more than just a place to chat. It's a supportive network where everyone can share their stories, ideas, and experiences.
      
      You can start chat at <#1301103306558410782>. Or explore this place as you wish, because this place has been set up to be easy for everyone to understand.
      
      We value respect, collaboration, and fun. We believe that everyone has something valuable to contribute, and together, we can build a positive environment where connections flourish and new opportunities arise.
      ᲼`
      )
      .addFields({
        name: "══════════════════ ⟬📜⟭ RULES LIST ═══════════════════",
        value: `᲼
            ➧ Use Every Channel Properly and Correctly
            ᲼᲼● Ensure your messages align with the purpose of each channel.
            ᲼᲼● Avoid off-topic discussions or spamming in specific channels.
            
            ➧ Keep the Server Free from NSFW Content
            ᲼᲼● Do not post or share NSFW (Not Safe For Work) content of any kind.
            ᲼᲼● Violations may lead to warnings, content removal, or bans.
            
            ➧ Be Polite with Every Member
            ᲼᲼● Treat all members with kindness and respect.
            ᲼᲼● Refrain from harassment, bullying, or any form of rude behavior.`,
      });

    interaction.reply({ embeds: [embedImage, embed] });
  }
});

client.login(process.env.TOKEN);
