# discord-meme-generator
Nodejs promise-based meme generator, it takes an image as url and top/bottom text to generate meme as Buffer

## Installation
```
$ npm install discord-meme-generator
```

## Example
```javascript
const Discord = require('discord.js');
const memes = require('meme-generator');
const client = new Discord.Client();

client.on('ready', () => {
  console.log(`Logged in as ${client.user.tag}!`);
});

client.on('message', msg => {
  if (msg.content === 'dank') {
    memes.generate(client,msg);
  }
});

client.login('token');
```
