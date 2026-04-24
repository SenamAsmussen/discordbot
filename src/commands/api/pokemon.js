const { SlashCommandBuilder } = require("@discordjs/builders");

module.exports = {
  data: new SlashCommandBuilder()
    .setName("pokemon")
    .setDescription("Get info about a Pokémon")
    .addStringOption(option =>
      option.setName("name")
        .setDescription("Name of the Pokémon")
        .setRequired(true)
    ),

  async execute(interaction) {
    const pokemonName = interaction.options.getString("name").toLowerCase();

    try {
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${pokemonName}`);

      if (!response.ok) {
        throw new Error(`HTTP request failed with status code ${response.status}`);
      }

      const data = await response.json();
      const sprite = data.sprites.front_default;
      const types = data.types.map(t => t.type.name).join(", ");
      const stats = data.stats.map(s => `${s.stat.name}: ${s.base_stat}`).join("\n");

      await interaction.reply({
        content: `**${data.name.toUpperCase()}**\nType: ${types}\n\n**Stats:**\n${stats}`,
        files: sprite ? [sprite] : []
      });

    } catch (error) {
      console.error(error);
      await interaction.reply("Sorry, something went wrong when fetching the Pokémon.");
    }
  },
};