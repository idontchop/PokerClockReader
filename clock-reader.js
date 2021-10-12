
import  { createWorker } from 'tesseract.js'
import PSM from 'tesseract.js/src/constants/PSM.js'

export default {   

    readImage: async (image) => {
        const worker = createWorker()

        await worker.load()
        await worker.loadLanguage('eng')
        await worker.initialize('eng')
        await worker.setParameters( {
            tessedit_pageseg_mode: PSM.AUTO
        })

        const text = await worker.recognize(image)

        await worker.terminate()

        return text;
    }
}