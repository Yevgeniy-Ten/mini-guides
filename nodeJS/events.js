const EventEmitter = require("events")

// const emmiter = new EventEmitter()
// emmiter.on("anything", (data) => {
//     console.log("on anything", data)
// })
// emmiter.emit("anything",{a:1})
// emmiter.emit("anything",{a:1})
class Dispatcher extends EventEmitter {
    subscribe(event, cb) {
        console.log("subscribe")
        this.on(event, cb)
    }

    dispatch(event, data) {
        console.log("dispatching")
        this.emit(event, data)
    }
}

const dis = new Dispatcher()
dis.subscribe("aa", (data) => console.log(data))
dis.dispatch("aa", {aa: "22"})
