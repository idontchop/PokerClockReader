import assert from 'assert'
import ClockReader from '../clock-reader.js'

describe('Clock Reader Test', function () {
    
    it('should initiate', () => {
        
        ClockReader.readImage("./images/2.jpg")
            .then( ob => console.log(ob))

    }),
    it('test chipCount', () => {
        //let t = new TourneyChop(5000,5000,6)
        
    })
})