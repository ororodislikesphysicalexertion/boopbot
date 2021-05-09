const fs = require("fs");
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === "boop") {
		var totalImages = 82;
		var imageNumber = Math.floor(Math.random() * totalImages) + 1;
		message.channel.send({files: ["./images/" + imageNumber + ".jpg"]});
	} else if(command === "pet") {
		var totalGifs = 5;
		var gifNumber = Math.floor(Math.random() * totalGifs) + 1;
		message.channel.send({files: ["./gifs/" + gifNumber + ".gif"]});
	}
	
});

client.login(token);
