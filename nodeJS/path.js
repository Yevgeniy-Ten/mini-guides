const path = require("path")


console.log("Название файла", path.basename(__filename))
console.log("Имя директории", path.dirname(__filename))
console.log("Расширение файла", path.extname(__filename))
console.log(path.parse(__filename), "Все поля")
console.log(path.join(__dirname, "server", "index.html"))