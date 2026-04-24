const { SlashCommandBuilder } = require("@discordjs/builders");
const { PermissionsBitField, MessageFlags } = require("discord.js");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("purge")
    .setDescription("Delete a specific number of messages.")
    .addIntegerOption(option =>
      option.setName("amount")
        .setDescription("The number of messages to delete")
        .setRequired(true)
        .setMinValue(1)
        .setMaxValue(100)),

  async execute(interaction) {
    if (!interaction.member.permissions.has(PermissionsBitField.Flags.Administrator)) {
      return interaction.reply({
        content: "You do not have permission to use this command.",
        flags: MessageFlags.Ephemeral,
      });
    }

    const amount = interaction.options.getInteger("amount");

    try {
      await interaction.channel.bulkDelete(amount, true);
      return interaction.reply({
        content: `${amount} messages have been deleted.`,
        flags: MessageFlags.Ephemeral,
      });
    } catch (error) {
      console.error(error);
      return interaction.reply({
        content: `There was an error trying to purge messages: ${error.message}\nSome messages could not be deleted because they are older than 14 days.`,
        flags: MessageFlags.Ephemeral,
      });
    }
  },
};
