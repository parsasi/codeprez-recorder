import { getParameters } from 'codesandbox/lib/api/define';


export default function createSandbox(content){
    const parameters = getParameters({
        files: {
          'index.js': {
            content
          },
          'package.json': {
            content: { dependencies: {} },
          },
        },
      });
      
    return `https://codesandbox.io/api/v1/sandboxes/define?parameters=${parameters}`;
      
}