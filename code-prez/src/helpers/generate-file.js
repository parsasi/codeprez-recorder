export default function generateFile(snapshots , lang = 'javascript' , frameRate = 1000){
    const file = {
        lang,
        frameRate,
        snapshots
    }
    return file
}