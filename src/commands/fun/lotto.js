const { SlashCommandBuilder } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("lotto")
    .setDescription("Generates lotto numbers for different types of lotteries.")
    .addStringOption(option =>
      option.setName("type")
        .setDescription("The type of lottery.")
        .setRequired(true)
        .addChoices(
          { name: "VikingLotto", value: "vikinglotto" },
          { name: "Eurojackpot", value: "eurojackpot" },
          { name: "Lørdagslotto", value: "lordagslotto" }
        )),

  async execute(interaction) {
    const type = interaction.options.getString("type");
    let result;

    switch (type) {
      case "vikinglotto":
        result = generateVikingLotto();
        break;
      case "eurojackpot":
        result = generateEurojackpot();
        break;
      case "lordagslotto":
        result = generateLordagslotto();
        break;
      default:
        return interaction.reply("Invalid lottery type.");
    }

    await interaction.reply(result);
  },
};

function generateVikingLotto() {
  const mainNumbers = generateUniqueNumbers(6, 1, 48);
  const bonusNumber = generateUniqueNumbers(1, 1, 7)[0];
  return `VikingLotto numbers: ${mainNumbers.join(", ")}. Bonus number: ${bonusNumber}`;
}

function generateEurojackpot() {
  const mainNumbers = generateUniqueNumbers(5, 1, 50);
  const euroNumbers = generateUniqueNumbers(2, 1, 12);
  return `Eurojackpot numbers: ${mainNumbers.join(", ")}. Euro numbers: ${euroNumbers.join(", ")}`;
}

function generateLordagslotto() {
  const mainNumbers = generateUniqueNumbers(7, 1, 34);
  const bonusNumber = generateUniqueNumbers(1, 1, 34)[0];
  return `Lørdagslotto numbers: ${mainNumbers.join(", ")}. Bonus number: ${bonusNumber}`;
}

function generateUniqueNumbers(amount, min, max) {
  const numbers = new Set();
  while (numbers.size < amount) {
    const number = Math.floor(Math.random() * (max - min + 1)) + min;
    numbers.add(number);
  }
  return [...numbers];
};