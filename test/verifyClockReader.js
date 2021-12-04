import assert from 'assert'
import ClockReader from '../clock-reader.js'
import fs from 'fs'
import tf from '@tensorflow/tfjs-node'

describe('Clock Reader Test', function () {
    /*
    it('should initiate', () => {
        
        ClockReader.readImage("./images/4.png")
            .then( ob => console.log(ob))

    }),*/
    it('test objects', () => {

        
        fs.readFile('./images/3.jpg', (err,data) => {
            if (err) throw err;
            
            let imgTensor = tf.node.decodeImage( new Uint8Array(data), 3);
            ClockReader.detectObjects(imgTensor)
                .then ( ob => console.log("object: ", ob))

        })
        
    })
})