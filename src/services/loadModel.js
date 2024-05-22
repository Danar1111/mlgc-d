const tf = require('@tensorflow/tfjs-node');

async function loadModel() {
    const url = 'https://storage.googleapis.com/dicoding-mlgc-danno/model.json';
    const urlModel = process.env.MODEL_URL || url;
    return tf.loadGraphModel(urlModel);
}
module.exports = loadModel;