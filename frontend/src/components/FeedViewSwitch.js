import { FormControlLabel, Switch } from "@material-ui/core"
import { useCallback } from "react"
import useConfig from "../hooks/useConfig"

function FeedViewSwitch() {
    const { config, setConfig } = useConfig()

    const cardView = config.view === 'CARD'

    const switchView = useCallback(event => {
        setConfig({ ...config, view: event.target.checked ? 'CARD' : 'TITLE' })
    }, [setConfig, config])

    return <FormControlLabel control={
        <Switch checked={cardView} onChange={switchView} />
    } label='Card View'>
    </FormControlLabel>
}

export default FeedViewSwitch
