const http = require("http")
const fs = require("fs")
const path = require("path")
const server = http.createServer((req, res) => {

    // if (req.url === "/") {
    //     fs.readFile(path.join(__dirname, "public", "index.html"), (err, data) => {
    //         if (err) {
    //             throw err
    //         }
    //         res.writeHead(200, {
    //             "Content-Type": "text/html"
    //         })
    //         res.end(data)
    //     })
    // }

    let filepath = path.join(__dirname, "public", req.url === "/" ? "index.html" : req.url)
    const ext = path.extname(filepath)
    let contentType = "text/html"
    switch (ext) {
        case ".css":
            contentType = "text/css"
            break
        case ".js":
            contentType = "text/javascript"
            break
        default:
            contentType = "text/html"
    }
    if (!ext) {
        filepath += ".html"
    }
    fs.readFile(filepath, (err, data) => {
        res.writeHead(200, {
            "Content-Type": contentType
        })
        res.end(data)
    })
})
const PORT = process.env.PORT || 3005
server.listen(PORT, () => console.log("app started" + PORT))