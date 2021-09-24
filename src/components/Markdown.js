import React from 'react'
import ReactMarkdown from 'react-markdown'
const Markdown = ({ markdown, setMarkdown }) => {
    return (
        <section className="markdown">
            <textarea onChange={(e) => {
                setMarkdown(e.target.value)
            }} value={markdown} className="input">{markdown}</textarea>
            <article className="result">
                <ReactMarkdown>
                    {markdown}
                </ReactMarkdown>

            </article>
        </section>
    )
}

export default Markdown
