import React from 'react'
import { Link } from 'react-router-dom'
import { useGlobalContext } from '../context'

const HomePage = () => {
    const { restoreMarkdown } = useGlobalContext();
    return (
        <div className='home'>
            <h1>Welcome to markdown editor!</h1>
            <div className="home-center">
                <p>click button to proceed to editor</p>
                <Link to="/markdown-editor"><button onClick={restoreMarkdown} className="primary-btn">Go to editor</button></Link>
            </div>
        </div>
    )
}

export default HomePage

