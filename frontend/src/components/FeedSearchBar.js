import { Box, InputBase, makeStyles } from "@material-ui/core";
import SearchIcon from '@material-ui/icons/Search';
import { useCallback, useEffect } from "react";
import useConfig from "../hooks/useConfig";
import useIKEKeyboard from "../hooks/useIKEKeyboard";

const useCustomStyles = makeStyles(theme => ({
    searchBar: {
        backgroundColor: 'rgba(0, 0, 0, .1)',
        borderRadius: '5px',
        width: '30%',
    },
    searchIcon: {
        verticalAlign: 'middle',
        marginRight: theme.spacing(1),
    },
}))


function FeedSearchBar() {
    const classes = useCustomStyles()

    const { config, setConfig } = useConfig()
    const { addKeyboardListener, openKeyboard, closeKeyboard } = useIKEKeyboard()

    useEffect(() => {
        addKeyboardListener('KEYBOARD_PRESS', 'search', key => {
            setConfig({ ...config, search: config.search + key })
        })

        addKeyboardListener('KEYBOARD_DELETE', 'search', () => {
            setConfig({ ...config, search: config.search.slice(0, config.search.length - 1) })
        })

        addKeyboardListener('KEYBOARD_ENTER', 'search', () => {
            closeKeyboard()
        })
    }, [config, setConfig, closeKeyboard, addKeyboardListener])


    const onSearch = useCallback(event => {
        setConfig({ ...config, search: event.target.value })
    }, [config, setConfig])

    return <Box className={classes.searchBar} ml={5} p={1}>
        <SearchIcon className={classes.searchIcon} />
        <InputBase placeholder='Search...' onChange={onSearch} onFocus={openKeyboard} onBlur={closeKeyboard} value={config.search} />
    </Box>
}

export default FeedSearchBar
