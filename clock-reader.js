
import  { createWorker } from 'tesseract.js'
import PSM from 'tesseract.js/src/constants/PSM.js'
import * as cocoSsd from "@tensorflow-models/coco-ssd"

export default {   

    detectObjects: async (image) => {
        
        let model = await cocoSsd.load()
        let predictions = await model.detect(image)

        return predictions
    },

    readImage: async (image) => {
        const worker = createWorker()

        await worker.load()
        await worker.loadLanguage('eng')
        await worker.initialize('eng')
        await worker.setParameters( {
            tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
            user_patterns_file: "./patterns.txt",
            load_system_dawg: false,
            load_freq_dawg: false

        })

        const { data: { text } } = await worker.recognize(image)

        await worker.terminate()

        return text;
    }
}