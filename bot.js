const fs = require("fs");
const Discord = require('discord.js');
const {prefix, token} = require('./config.json');
const fetch = require("node-fetch");

const client = new Discord.Client();

client.once('ready', () => {
	console.log('Ready!');
});

client.on('message', async message => {
	if (!message.content.startsWith(prefix) || message.author.bot) return;

	const args = message.content.slice(prefix.length).trim().split(/ +/);
	const command = args.shift().toLowerCase();

	if(command === "boop") {
		var totalImages = 82;
		var imageNumber = Math.floor(Math.random() * totalImages) + 1;
		message.channel.send({files: ["./images/" + imageNumber + ".jpg"]});
	} else if(command === "pet") {
		var totalGifs = 20;
		var gifNumber = Math.floor(Math.random() * totalGifs) + 1;
		message.channel.send({files: ["./gifs/" + gifNumber + ".gif"]});
	} else if(command === "cat") {
		const { file } = await fetch("https://aws.random.cat/meow").then(response => response.json());
		message.channel.send(file);
	} else if(command === "hug") {
		const hugList = message.mentions.users.map(user => {
			return (`(> ^ w ^ )> ${user}`);
		});
		message.channel.send(hugList);
	} else if(command === "weather") {
		let getAdopt = async () => {
			let response = await axios.get('http://www.7timer.info/bin/astro.php?lon=113.17&lat=23.09&ac=0&lang=en&unit=metric&output=internal&tzshift=0');
			let weather = response.data;
			return weather;
		}
		let weatherVal = getAdopt;
		message.channel.send(weatherVal);
	}
	
});

client.login(token);
