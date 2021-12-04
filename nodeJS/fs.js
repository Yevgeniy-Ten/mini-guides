const fs = require("fs")
const path = require("path")

// fs.mkdir(path.join(__dirname, "test"), (err) => {
//     if (err) {
//         throw err
//     }
// })

const filePath = path.join(__dirname, "test", "text.txt")
// Перетирает контент, создаёт файл или пишет туда контент
// fs.writeFile(filePath, "Hello node js", (err) => {
//     if (err) {
//         throw err
//     }
// })
// добавляет контент к контенту
// fs.appendFile(filePath, "Hello node js", (err) => {
//     if (err) {
//         throw err
//     }
// })
fs.readFile(filePath, "utf-8", (err, content) => {
    // const data = Buffer.from(content)
    // console.log(data.toString())
    console.log(content)
})