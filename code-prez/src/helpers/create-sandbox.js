import { getParameters } from 'codesandbox/lib/api/define';


export default function createSandbox(content , filename){


    const params = {
      files: {
        'package.json': {
          content: { dependencies: {} },
        },
      },
    }

    params.files[filename] = {
      content
    }

    console.log(params)
  

    const parameters = getParameters(params);
      
    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
      
}