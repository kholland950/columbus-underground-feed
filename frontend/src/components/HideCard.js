import React from 'react'
import PropTypes from 'prop-types'
import { Button } from "@material-ui/core"
import { useCallback } from "react"
import useConfig from "../hooks/useConfig"

function HideCard({ entry }) {
    const { config, setConfig } = useConfig()
    
    const onClick = useCallback(event => {
        setConfig({ ...config, hidden: [ ...config.hidden, entry.id ]})
    }, [config, setConfig, entry.id])

    return <Button variant='contained' onClick={onClick}>
        Hide Card
    </Button>
}

HideCard.propTypes = {
    entry: PropTypes.object.isRequired,
}

export default HideCard
