
import  { createWorker } from 'tesseract.js'
import PSM from 'tesseract.js/src/constants/PSM.js'

export default {   

    readImage: async (image) => {
        const worker = createWorker()

        await worker.load()
        await worker.loadLanguage('eng')
        await worker.initialize('eng')
        await worker.setParameters( {
            tessedit_pageseg_mode: PSM.SINGLE_BLOCK,
            tessedit_char_whitelist: "$0123456789.thstrdndRemainingPlaces",
            load_system_dawg: false,
            load_freq_dawg: false

        })

        const { data: { text } } = await worker.recognize(image)

        await worker.terminate()

        return text;
    }
}