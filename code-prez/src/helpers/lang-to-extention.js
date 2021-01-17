export const langToExtension  = {
    'javascript' : 'js',
    'css' : 'css',
    'csharp' : 'cs',
    'html' : 'html',
    'json' : 'json',
    'ini' : 'ini',
    'typescript' : 'ts',
    'php' : 'php',
    'python' : 'py',
    'java' : 'java',
    'markdown' : 'md',
    'sql' : 'sql'
}

const  convertLangToExtension =  (lang) => {
    return langToExtension[lang]
}

export default convertLangToExtension