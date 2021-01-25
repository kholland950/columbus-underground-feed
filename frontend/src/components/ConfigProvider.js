import React, { useState } from 'react'

const defaultConfig = {
    view: 'TITLE',
    hidden: [],
    read: [],
    search: '',
}

export const ConfigContext = React.createContext(defaultConfig)

function ConfigProvider({ children }) {
    const [config, setConfig] = useState(defaultConfig)

    return <ConfigContext.Provider value={{ config, setConfig }}>
        {children}
    </ConfigContext.Provider>
}

export default ConfigProvider
