import React from 'react'

const Markdown = ({ markdown, setMarkdown }) => {
    return (
        <section className="markdown">
            <textarea onChange={(e) => {
                setMarkdown(e.target.value)
            }} value={markdown} className="input">{markdown}</textarea>
            <article className="result">{markdown}</article>
        </section>
    )
}

export default Markdown
