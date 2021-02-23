const Messenger = require('./05-extending-messenger')
const messenger = new Messenger()

// register the event
messenger.on('MessageSent', (arg) => {
    console.log('Received sent message', arg)
})

messenger.message("Rising the event")