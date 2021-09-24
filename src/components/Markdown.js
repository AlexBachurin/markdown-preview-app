import React from 'react'
import ReactMarkdown from 'react-markdown'
import { useGlobalContext } from '../context'
const Markdown = () => {
    const { markdown, handleChange } = useGlobalContext();
    return (
        <section className="markdown">
            <textarea onChange={handleChange} value={markdown} className="input">{markdown}</textarea>
            <article className="result">
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>

            </article>
        </section>
    )
}

export default Markdown
