import React from 'react'
import PropTypes from 'prop-types'
import moment from 'moment'
import useConfig from '../hooks/useConfig'
import { Box, Card, CardContent, Chip, Fade, makeStyles } from '@material-ui/core'
import HideCard from './HideCard'
import MarkCardRead from './MarkCardRead'


const useCustomStyles = makeStyles(theme => ({
    listItem: {
        listStyle: 'none',
        margin: theme.spacing(4, 0)
    },
    titleView: {
        '& img': {
            display: 'none',
        }
    },
    categoryChip: {
        marginLeft: theme.spacing(1),
        marginBottom: theme.spacing(1),
    },
    entryActions: {
        margin: theme.spacing(1, 2, 2),
        display: 'flex',
        '& button': {
            marginRight: theme.spacing(2),
        }
    },
    isRead: {
        position: 'relative',
        overflow: 'hidden',
        '&::after': {
            content: '""',
            display: 'block',
            position: 'absolute',
            top: 0,
            left: 0,
            width: '100%',
            height: '100%',
            backgroundColor: 'rgba(0, 0, 0, .2)',
            zIndex: 1,
        }
    },
}))

function ListEntry({ entry }) {
    const classes = useCustomStyles()
    const { config }= useConfig()

    const isRead = config.read.includes(entry.id)

    const cardView = useConfig().config.view === 'CARD'

    const commonData = <>
        <h1>{entry.title}</h1>
        <p>{moment(entry.date).fromNow()}</p>
        <div dangerouslySetInnerHTML={{ __html: entry.description }}></div>
    </>

    const actions = <Box className={classes.entryActions}>
        <HideCard entry={entry} />
        <MarkCardRead entry={entry} />
    </Box>

    return (
        <li className={`${classes.listItem} ${isRead ? classes.isRead : ''}`}>
            <Fade in>
                {cardView ? (
                    <Card elevation={3} className={isRead ? classes.isRead : ''}>
                        <CardContent>
                            {commonData}
                            {entry.categories.map(category => (
                                <Chip key={category} label={category} className={classes.categoryChip} />
                            ))}
                            {actions}
                        </CardContent>
                    </Card>
                ) : (
                        <Box className={classes.titleView}>
                            {commonData}
                            {actions}
                        </Box>
                    )}
            </Fade>
        </li>
    )
}

ListEntry.propTypes = {
    entry: PropTypes.object.isRequired,
}

export default ListEntry
