import {FormData} from "../../../types"
import './styles.css'
import {Prism as SyntaxHighlighter} from 'react-syntax-highlighter';
import {nightOwl} from "react-syntax-highlighter/dist/cjs/styles/prism";

export interface CodeFormProps {
    data: FormData
}

//TODO make more easy
const CodeForm = ({data}: CodeFormProps) => {
    return (

        <div
            className="bg-second-dark-bg rounded border border-secondary-gray overflow-auto text-yellow w-full md:text-sm text-xs">
            <SyntaxHighlighter
                language="javascript"
                style={nightOwl}
                // showLineNumbers={true}
                // wrapLongLines={true}
                wrapLines={true}
                customStyle={{margin: 0}}
                lineProps={{style: {wordBreak: 'break-word', whiteSpace: 'break-spaces'}}}
                // customStyle={{
                //     backgroundColor: '#161D29',
                // }}
            >
                {`const button = document.querySelector('#sendBtn')
const data = {
    name: '${data.name}',
    email: '${data.email}',
    message: '${data.message}',
}

button.addEventListener('click', () => {form.send(message))}`}
            </SyntaxHighlighter>
        </div>
    )
}

export default CodeForm
