const mosca = require('mosca')

const server = new mosca.Server({ port: 1883 })

server.on('clientConnected', client => {
  console.log('client connected', client.id)
})

server.on('clientDisconnected', client => {
  console.log('Client Disconnected:', client.id)
})

server.on('published', packet => {
  console.log('Message', packet.payload.toString())
})

server.on('ready', () => {
  console.log('Mosca server is up and running')
})
