const EventEmitter = require('events')

class Messenger extends EventEmitter{
    message(msg){
        console.log(msg)
        this.emit("MessageSent",{id: 1, data: 'this is message emitter event'})
    }
}
module.exports= Messenger;