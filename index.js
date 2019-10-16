const discord = require("discord.js");
const client = new discord.Client();
const fs = require("fs");
var colors = require('colors');
const logo = require('asciiart-logo');
const name = require('./package.json');
client.commands = new discord.Collection();

function vaunted(options) {

}

vaunted.load = function (options) {

    let groupFiles = fs.readdirSync("./commands");
    groupFiles.forEach((groupFile) => {

        let groupStat = fs.statSync(`./commands/${groupFile}`);
        if (!groupStat.isDirectory()) {
            console.log(`${groupFile} is not dir`);
            return;
        }
        let commandFiles = fs.readdirSync(`./commands/${groupFile}`);
      commandFiles.forEach((commandFile) => {
            if (!commandFile.endsWith(".js")) {
                console.log(`${groupFile}/${commandFile} is not a javascript file`);
                return;
            }
              global.commandFiles = fs.readdirSync(`./commands/${groupFile}`);
        })
        console.log("Loaded the following files: " + global.commandFiles)
    })
}

vaunted.main = function (settings){
      client.login(settings.botToken).then(console.log(colors.rainbow((logo(name).render()))));
      console.log(colors.magenta("Up and Ready"));


}

module.exports = vaunted;