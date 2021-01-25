import PropTypes from 'prop-types'
import { Button } from "@material-ui/core";
import { useCallback } from "react";
import useConfig from "../hooks/useConfig";

function MarkCardRead({ entry }) {
    const { config, setConfig } = useConfig()

    const onClick = useCallback(event => {
        setConfig({ ...config, read: [ ...config.read, entry.id ]})
    }, [config, setConfig, entry.id])

    return <Button variant='contained' onClick={onClick}>
        Mark as read
    </Button>
}

MarkCardRead.propTypes = {
    entry: PropTypes.object.isRequired,
}

export default MarkCardRead
