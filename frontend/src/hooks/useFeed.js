import { useContext } from "react"
import { FeedContext } from "../components/FeedProvider"

function useFeed() {
    return useContext(FeedContext)
}

export default useFeed
