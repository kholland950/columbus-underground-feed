import React, { useEffect } from 'react'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const FeedContext = React.createContext(null)

function FeedProvider({ children }) {
    const [feed, setFeed] = useState([])

    useEffect(() => {
        fetch('/api/feed').then(resp => resp.json()).then(body => setFeed(body))
    }, [])

    return <FeedContext.Provider value={feed}>
        {children}
    </FeedContext.Provider>
}

FeedProvider.props = {
    children: PropTypes.node,
}

export default FeedProvider
