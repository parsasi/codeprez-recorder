import React from 'react'
import Monaco from 'react-monaco-editor'

export default function CodeEditor(props){
    return (
        <Monaco width={100 + '%'}
        height={100 +'%'}
        lang={props.lang || 'javascript'}
        value={props.content || ''}
        onChange={props.onChange}
        theme="vs-dark"
        options={ {selectOnLineNumbers: true , readOnly : props.readOnly || false }}
        
        />
    )
}