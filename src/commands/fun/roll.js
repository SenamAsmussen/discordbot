const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("roll")
        .setDescription("Rolls a dice")
        .addStringOption(option =>
            option.setName("sides")
                .setDescription("Choose how many sides the dice should have")
                .setRequired(true)
                .addChoices(
                    { name: "6 sides", value: "6"},
                    { name: "8 sides", value: "8"},
                    { name: "10 sides", value: "10"},
                    { name: "12 sides", value: "12"},
                    { name: "20 sides", value: "20"}
                )),
    async execute(interaction) {
        const sides = interaction.options.getString("sides");
        const result = Math.floor(Math.random() * sides) + 1;
        await interaction.reply(`You rolled a ${result} on a ${sides}-sided dice.`)
    },
};