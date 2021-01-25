import { makeStyles } from '@material-ui/core'
import { Alert } from '@material-ui/lab'
import React from 'react'
import useConfig from '../hooks/useConfig'
import useFeed from '../hooks/useFeed'
import ListEntry from './ListEntry'

const useCustomStyles = makeStyles(theme => ({
    feed: {
        margin: 0,
        padding: 0,
    }
}))

function Feed() {
    const classes = useCustomStyles()
    const feed = useFeed()
    const { config } = useConfig()

    const filterSearch = (feed) => (config.search ?
        feed.filter(entry => entry.title.toLowerCase().includes(config.search.toLowerCase())) :
        feed)

    const filterHidden = (feed) => feed.filter(entry => !config.hidden.includes(entry.id))

    const entriesToShow = filterSearch(filterHidden(feed))

    return entriesToShow.length ? <ul className={classes.feed}>
        {entriesToShow.map(entry => (
            <ListEntry key={entry.id} entry={entry} />
        ))}
    </ul> : <Alert severity='warning'>No results found</Alert>
}

export default Feed
