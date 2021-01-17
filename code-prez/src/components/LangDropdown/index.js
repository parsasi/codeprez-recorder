import React from 'react'
import Dropdown from 'react-dropdown';
import 'react-dropdown/style.css';
import { langToExtension } from '../../helpers/lang-to-extention'

export default function LangDropdown(props){



    const options = Object.keys(langToExtension)
    return (
        <Dropdown options={options} onChange={(option) => props.setLang(option.value)} value={props.lang} placeholder="Select language" />
    )

}