// in our current implementation we assume that every thing is working properly and ideally. bun in real world there are a lot of error and exceptions. for example the connection to mongodb drops down for whatever the reason.   as a best practice we should count for these unexpected situation and handle them properly
// Handeling Error 
// Send a friendly error 
// log the exception

// lets handle a real world scnerio
// lets asume the mongodb server has died and we put a request to the database. than what will happen?

// request will be hanged. after 30 second there will be an error message displays on the terminal.
// "UnhandeledPromiseRejectionWarning"
// "Failed to reconnect after 30 attemptswith interval 100 ms"
// by default if the mongodb server dont connect with app server the mongodb driver will attempt 30 times with the interval of 1000ms.
// in the future promise rejection  that are not handledwill terminate the nodejs process with a non zero exit code.

//its means in next version of nodejs after unhandeled rejection of promise there will be termination of promise and will not be able to serve to anyother client. 
// in real world scnerios if the mongodb server dies for one minute and after which it lives, the nodejs will attempte 30 times to access the server after which it will goes down weather the mongodb server is up or not. so we need to properly handle this scnerio. 

