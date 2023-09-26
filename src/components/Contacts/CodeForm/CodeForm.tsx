import {FormData} from "../../../types"
import './styles.css'

export interface CodeFormProps {
    data: FormData
}

//TODO make more easy
const CodeForm = ({data}: CodeFormProps) => {
    return (
        <div></div>
        // <div className="flex flex-col p-4">
        //     <p className="line">
        //         <span className="line-number">1</span>
        //         <span className="const">const</span>
        //         button
        //         <span className="equal">=</span>
        //         document.querySelector
        //         <span className="text-gray-text">(</span>
        //         <span className="text-green">'#submit_message'</span>
        //         <span className="text-gray-text">)</span>
        //     </p>
        //     <p className="line">
        //         <span className="line-number">2</span>
        //         <span className="const">const</span>
        //         data
        //         <span className="equal">=</span>
        //         <span className="text-gray-text">{'{'}</span>
        //     </p>
        //     <p className="line">
        //         <span className="line-number">3</span>
        //         <span className="ml-6 mr-2 text-yellow">name:</span>
        //         <span className="text-green">{"'" + data.name + "'" || "''"}</span>
        //         <span className="text-gray-text">,</span>
        //     </p>
        //     <p className="line">
        //         <span className="line-number">4</span>
        //         <span className="ml-6 mr-2 text-yellow">email:</span>
        //         <span className="text-green">{"'" + data.email + "'" || "''"}</span>
        //         <span className="text-gray-text">,</span>
        //     </p>
        //     <p className="line">
        //         <span className="line-number">5</span>
        //         <span className="ml-6 mr-2 text-yellow">message:</span>
        //         <span className="text-green">{"'" + data.message + "'" || "''"}</span>
        //     </p>
        //     <p className="line">
        //         <span className="line-number">6</span>
        //         <span className="ml-6 mr-2 text-yellow">date:</span>
        //         <span className="text-green">{new Date().toLocaleDateString("en-EN")}</span>
        //         <span className="text-gray-text">,</span>
        //     </p>
        //     <p className="line">
        //         <span className="line-number">7</span>
        //         <span className="text-gray-text">{'}'}</span>
        //     </p>
        //
        //     <p className="line">
        //         <span className="line-number">8</span>
        //     </p>
        //
        //     <p className="line">
        //         <span className="line-number">9</span>
        //         button
        //         <span className="text-yellow">.addEventListener</span>
        //         <span className="text-gray-text">(</span>
        //         <span className="text-green">'click'</span>
        //         <span className="text-gray-text mr-2">,</span>
        //         <span className="text-yellow mr-2 whitespace-nowrap">{'() =>'}</span>
        //         form
        //         <span className="text-yellow">.send</span>
        //         <span className="text-gray-text">(</span>
        //         data
        //         <span className="text-gray-text">)</span>
        //         <span className="text-gray-text">)</span>
        //     </p>
        // </div>
    )
}

export default CodeForm
