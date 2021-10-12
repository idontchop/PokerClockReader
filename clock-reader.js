import Tesseract from 'tesseract.js'

const { createWorker } = require ('tesseract.js')

export default {

   

    readImage: async (image) => {
        const worker = createWorker()

        await worker.load()
        await worker.loadLanguage('eng')
        await worker.initialize('eng')

        const text = await worker.recognize(image)

        await worker.terminate()

        return text;
    }
}