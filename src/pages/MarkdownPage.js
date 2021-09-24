import React from 'react'
import Markdown from '../components/Markdown'
const MarkdownPage = ({ markdown, setMarkdown }) => {
    return (
        <Markdown markdown={markdown} setMarkdown={setMarkdown} />
    )
}

export default MarkdownPage

