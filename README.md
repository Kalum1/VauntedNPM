# Vaunted

The best Discord.js command handler

## Getting Started

First of all, [cd](https://www.macworld.com/article/2042378/master-the-command-line-navigating-files-and-folders.html) into your working directory.

After creating your node project, run the following: ```npm install vauntednpm --save```

## Prerequisites

Simply run `npm install` or `npm i` to install all of the prerequisites.

## Documentation

To be added later

### main bot file (index.js)
```
vaunted.main({
    botToken: config.token,
    commandsFile: "./commands", // Recommended to be ./commands
    unknownCommandResponse: false,
    disableEveryone: true
})
```

### Commands (./commands/misc/ping.js...)
```
vaunted({
    name: "Yeet",
    triggers: ["Tester"],
    description: "Test command",
    async: true,
    ownerOnly: false,
    argument: true,
    debug: "true"
})
```

## Authors

* **Kalum** - *Initial work | Development work*
* **Brad** - *Initial work | Development work*
* **Sophia** - *Initial work | Development work*
* **Alex** - *Development work*
* **Jackson** - *Development work*


See also the list of [contributors](https://github.com/your/project/contributors) who participated in this project.

## License

This project is licensed under the MIT License - see the [LICENSE.md](LICENSE.md) file for details


