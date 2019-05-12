'use strict';
const images = require('./meme-images.json');
const words = require('./meme-words.json');
const discord = require('discord.js');
const Canvas = require('canvas');


module.exports = {
    randomWords: function () {
        var rw = '';
        rw = words[Math.floor(Math.random() * words.length)]
        return rw;
    },

    randomImages: function () {
        var ri = '';
        ri = images[Math.floor(Math.random() * images.length)]
        return ri;
    },

    generate: async function (client, msg) {
        var txt = this.randomWords();
        var bg = this.randomImages();

        var background = await Canvas.loadImage(bg);

        const canvas = Canvas.createCanvas(background.width, background.height);
        const ctx = canvas.getContext('2d');

        ctx.drawImage(await background, 0, 0, canvas.width, canvas.height);

        ctx.font = 'bold ' + canvas.height / 15 + 'px Comic Sans MS';
        ctx.fillStyle = '#ffffff';
        ctx.textAlign = "center";
        ctx.fillText(txt, canvas.width / 2, canvas.height - 50);
        ctx.strokeText(txt, canvas.width / 2, canvas.height - 50);

        ctx.beginPath();
        ctx.arc(125, 125, 100, 0, Math.PI * 2, true);
        ctx.closePath();
        ctx.clip();

        const attachment = await new discord.Attachment(canvas.toBuffer(), 'undefined.png');
        msg.channel.send('', attachment);
    }
}