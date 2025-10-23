const { SlashCommandBuilder } = require("discord.js");

module.exports = {
    data: new SlashCommandBuilder()
        .setName("rps")
        .setDescription("Play Rock, Paper, Scissors")
        .addStringOption(option =>
            option.setName("choice")
                .setDescription("Choose rock, paper, or scissors")
                .setRequired(true)
                .addChoices(
                    { name: "Rock", value: "rock" },
                    { name: "Paper", value: "paper" },
                    { name: "Scissors", value: "scissors" }
                )),
    async execute(interaction) {
        const choices = ["rock", "paper", "scissors"];
        const userChoice = interaction.options.getString("choice");
        const botChoice = choices[Math.floor(Math.random() * choices.length)];

        let result;
        if (userChoice === botChoice) {
            result = "It's a tie!";
        } else if (
            (userChoice === "rock" && botChoice === "scissors") ||
            (userChoice === "paper" && botChoice === "rock") ||
            (userChoice === "scissors" && botChoice === "paper")
        ) {
            result = "You win!";
        } else {
            result = "You lose!";
        }

        await interaction.reply(`You chose **${userChoice}**. I chose **${botChoice}**. ${result}`);
    }
};