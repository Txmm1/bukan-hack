module.exports = {
name: ["githubdl"],
type: ["download"],
description: "download file Zip github with username & repo",
utilisation: userbot.prefix + "githubdl <link>",

async execute(m) {
let { args } = data
//Madeby Rizky adi
if (!args[0]) return m.reply('where username')
if (!args[1]) return m.reply('where repo')

let url = `https://github.com/${args[0]}/${args[1]}/archive/refs/heads/main.zip`

m.reply(`compressing data to file zip\n*@RizkyAdi*`)
conn.sendFile( m.chat, url, 'repo.zip', null, m)

}
}