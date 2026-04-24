const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("help")
        .setDescription("Shows bot commands"),
    async execute(interaction) {
        const commands = interaction.client.commands;
        let reply = "Here are all the available commands:\n\n";

        commands.forEach(command => {
            reply += `**/${command.data.name}** - ${command.data.description}\n`;
        });

        await interaction.reply(reply);
    }
};