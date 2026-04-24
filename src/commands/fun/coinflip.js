const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("coinflip")
        .setDescription("Flips a coin"),
    async execute(interaction) {
        const choices = ["heads", "tails"];
        const randomIndex = choices[Math.floor(Math.random() * choices.length)];
        const result = randomIndex;
        await interaction.reply(`The result of the coinflip is ${result}`);
    },
};