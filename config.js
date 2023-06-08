const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split("785918674")
global.mongodb = process.env.MONGODB_URI || "Enter-MongoURI-HERE"
global.port= process.env.PORT || 5000
global.email = 'shashikachirath1@gmail.com'
global.github = 'https://github.com/mrhansamala/-Queen-Nethu-MD-Bot-'
global.location = 'Sultanpur IN'
global.gurl = 'https://instagram.com/' // add your username
global.sudo = process.env.SUDO || '94781708673'
global.devs = '94781708673';
global.website = 'https://github.com/mrhansamala/-Queen-Nethu-MD-Bot-' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/d229929fd0e975d64010c.jpg'
module.exports = {
  botname: process.env.BOT_NAME || 'Queen Nethu',
  ownername:process.env.OWNER_NAME || 'MR.Akila',
  sessionName: process.env.SESSION_ID || 'eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTUhJQUd4MlJVL3FJcy9Fd25NRGZkV09iaGJRQW5WWWt1UmtwQlNWR09HOD0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTURKdWRtb3ZuZDV6WnAzdy80QzJwOGRnQkdtckpLWUNDRzFjS251MjRIWT0ifX0sInNpZ25lZElkZW50aXR5S2V5Ijp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJhSGo5bHBiQ01iVHMzc295cHNEaWJyVmU5ODZJZnFGR3dWdUlxZkk0dVc4PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVTEFjTlV6YnBQUW1YdFlpMWVzMUNsc084SldBWlRjVU9wMi9Vdm8xOW1ZPSJ9fSwic2lnbmVkUHJlS2V5Ijp7ImtleVBhaXIiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InlBbG5saDdtcHZLdG1qdEhJRnlnYmhrNkdwOG1lN3o3WFArRkdqUGU3MGc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6Imtrd0h4ekhieG53RHRJcnZnYkc4WTRabkFYaUhKSjVhcVFLTCtnL1IxbWc9In19LCJzaWduYXR1cmUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJrK1l4RXdiemMwZUZUY1VsMHM3QWZPd2xsQXR2ZmQwZlhvalRtTE9kUitLMEN1Zm1aSkcvZjR5dmJYMEptSXJFZXpSeWlpV1VNSmFnMzdNUEZ2amNpUT09In0sImtleUlkIjoxfSwicmVnaXN0cmF0aW9uSWQiOjI0NywiYWR2U2VjcmV0S2V5IjoiQzNqdFNqRnpaSEdBdldORjlzU0syTVdUajF0QktUUVRrTStnR3BCRXBmVT0iLCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXMiOltdLCJuZXh0UHJlS2V5SWQiOjMxLCJmaXJzdFVudXBsb2FkZWRQcmVLZXlJZCI6MzEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTWp2a00wRUVJVE9oNlFHR0FFPSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ6QzljN3g1NGJaV25CVHYvQzUyYmxySzRpRm1wVDNLcVhwcERoRllkb2xJPSIsImFjY291bnRTaWduYXR1cmUiOiIybThDV1BxcjNLSVhlMVJSbVZ1N1dlMDlBZFJyUXovdXNuTTBldUJzTU9SR1JyZy82MFluY24xTmNvbGVuK1E4Y2FZSlFVRHV4d004S3JuU2kySEdEQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoiK0tkWGRVcmNjK2xqbGdmM3E5bkdhZGI5YXZhQlN1NUtUZElsbXRtcCtrYmhqa2NIZnBiNms5N2R4ZnJwYk53Qjhkc3pjSjRUbEhTZ01SUDdjRE1YaHc9PSJ9LCJtZSI6eyJpZCI6Ijk0Nzg1OTE4Njc0OjIwQHMud2hhdHNhcHAubmV0IiwibmFtZSI6Is6x0LrOueKEk86xINGVzrHRj86xzrdnzrEifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3ODU5MTg2NzQ6MjBAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY3d2WE84ZWVHMlZwd1U3L3d1ZG01YXl1SWhacVU5eXFsNmFRNFJXSGFKUyJ9fV0sInBsYXRmb3JtIjoic21iYSIsImxhc3RBY2NvdW50U3luY1RpbWVzdGFtcCI6MTY4NjIzNDg4N30=',
  author: process.env.PACK_INFO.split(";")[0] || 'author', 
  auto_read_status : process.env.AUTO_READ_STATUS || 'false',
  packname: process.env.PACK_INFO.split(";")[1] || 'Name',
  autoreaction: process.env.AUTO_REACTION || 'off',
  antibadword : process.env.ANTI_BAD_WORD || 'nobadwordokey',
  alwaysonline: process.env.ALWAYS_ONLINE || 'false',
  antifake : process.env.FAKE_COUNTRY_CODE || '92',
  readmessage: process.env.READ_MESSAGE || false,
  HANDLERS: process.env.PREFIX || ['.'],
  warncount : process.env.WARN_COUNT || 3,
  disablepm: process.env.DISABLE_PM || "flase",
  levelupmessage: process.env.LEVEL_UP_MESSAGE || 'false',
  antilink: process.env.ANTILINK_VALUES || 'chat.whatsapp.com',
  antilinkaction: process.env.ANTILINK_ACTION || 'remove',
  BRANCH: 'main',
  ALIVE_MESSAGE: process.env.ALIVE_MESSAGE || '',
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || 'OPENAI_KEY',
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SECKTOR',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
