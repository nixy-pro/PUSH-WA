require("./all/module.js")

//========== Setting Owner ==========//
global.owner = "6281312892060"
global.namaowner = "IQBAL OFFICIAL"

//======== Setting Bot & Link ========//
global.namabot = "BZL PUSH" 
global.namabot2 = "BzlPush V1"
global.foother = "© IQBAL OFFICIAL - 2024"
global.idsaluran = "120363311920743499@newsletter"
global.linkgc = 'https://chat.whatsapp.com/HtepiHGYjSC8ShHmVvTQeD'
global.linksaluran = "https://whatsapp.com/channel/0029Vae6FXc3wtb5R5Gx2G1m"
global.linkyt = 'https://youtube.com/@IqbalHosting'
global.linktele = "https://t.me/Iqbalofficial2"
global.packname = "IQBAL OFFICIAL"
global.author = "IQBAL OFFICIAL"

//========== Setting Event ==========//
global.welcome = false
global.autoread = false
global.anticall = true
global.owneroff = false

//==== Waktu Jeda Jpm & Pushkon ====//
global.delaypushkontak = 7000
global.delayjpm = 3000

//========= Setting Url Foto =========//
//Lihat Di Folder Media!

//========= Setting Payment =========//
//Kalo Gak Ada Isi Aja jadi false
global.dana = "085783856862"
global.gopay = "087793857430"
global.ovo = "087793857430"
global.pulsa = "087793857430"
global.qris = fs.readFileSync("./media/qris.jpeg")

//========= Setting Message =========//
global.msg = {
"error": "Error terjasi kesalahan",
"done": "Done Bang ✅", 
"wait": "Bot Sedang Memproses Tunggu Sebentar . . .", 
"group": "*• Group Only* Fitur Ini Hanya Untuk Di Dalam Grup!", 
"private": "*• Private Chat* Fitur Ini Hanya Untuk Didalam Private Chat!", 
"admin": "*• Admin Only* Fitur Ini Hanya Untuk Admin Grup!", 
"adminbot": "*• Bot Admin* Fitur Ini Dapat Digunakan Ketika Bot Menjadi Admin", 
"owner": "*• Owner Only* Fitur Ini Hanya Untuk Owner Bot!", 
"developer": "*• Developer Only* Fitur Ini Hanya Untuk Developer"
}


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(chalk.redBright(`Update ${__filename}`))
	delete require.cache[file]
	require(file)
})
