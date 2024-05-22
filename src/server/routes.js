const { reqPredictHandler, reqPredictHistories } = require('../server/handler');
 
const routes = [
  {
    path: '/predict',
    method: 'POST',
    handler: reqPredictHandler,
    options: {
      payload: {
        allow: 'multipart/form-data',
        maxBytes: 1000000,
        multipart: true
      }
    }
  },
  {
    path: '/predict/histories',
    method: 'GET',
    handler: reqPredictHistories,
  }
]
 
module.exports = routes;