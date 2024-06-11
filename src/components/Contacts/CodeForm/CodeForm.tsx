import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter'
import {nightOwl} from "react-syntax-highlighter/dist/cjs/styles/prism"

import './styles.css'

import {CodeFormProps} from "@types"

//TODO make more easy
const CodeForm = ({data}: CodeFormProps) => {
    const code = `const button = document.querySelector('#sendBtn')
const data = {
    name: '${data.name}',
    email: '${data.email}',
    message: '${data.message}',
}

button.addEventListener('click', () => {form.send(data))}`

    return (

        <div
            className="bg-second-dark-bg rounded border border-secondary-gray overflow-auto text-yellow w-full max-h-96 md:text-sm text-xs">
            <SyntaxHighlighter
                language="javascript"
                style={nightOwl}
                wrapLines={true}
                customStyle={{margin: 0}}
                lineProps={{style: {wordBreak: 'break-word', whiteSpace: 'break-spaces'}}}
            >
                {code}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeForm
