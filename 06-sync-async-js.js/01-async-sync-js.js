console.log('Before');
setTimeout(() => {
    console.log('Reading a user from the database....')
}, 2000)
console.log('After')
// in sync behaviour these line should run in the following way.
// first run the 'Before"
// secondly wait for 2 second and log "Reading a use...."
// thirdly log "After" in terminal.

/// but its behaviour is different. as we have studdied that node has a single thread.
// thread goes to the first log and print 'Before'. than it will schadual it for two second and will log 'After". than after two seconds it will print "reading a user...."
// means it will works in async or non blocking way.