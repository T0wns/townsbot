const { SlashCommandBuilder } = require('discord.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('towns')
		.setDescription('towns emoji'),
	async execute(interaction) {
		await interaction.reply('<:towns:1123731327477350440>');
	},
};