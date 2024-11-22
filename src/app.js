require ('dotenv').config();
const createServer= require('./Infrastructures/http/createServer')
const container = require('./Infrastructures/container')

const start = async()=>{
  const server = await createServer(container);
  await server.start();
  console.log(`Server berjalan pada ${server.info.uri}`);
}
start()