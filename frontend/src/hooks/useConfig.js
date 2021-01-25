import { useContext } from "react"
import { ConfigContext } from "../components/ConfigProvider"

function useConfig() {
    return useContext(ConfigContext)
}

export default useConfig
