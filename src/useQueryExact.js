import {useEffect, useState} from 'react'

const useQueryExact = (minWidth,maxWidth) =>{
    const [state, setState] = useState({
        windowWidth: window.innerWidth,
        isDesiredWidth: false,
    })

    useEffect(() => {
        const resizeHandler = () => {
            const currentWindowWidth = window.innerWidth
            const isDesiredWidth = currentWindowWidth < minWidth && currentWindowWidth > maxWidth
            setState({windowWidth: currentWindowWidth, isDesiredWidth})
        }
        window.addEventListener("resize", resizeHandler)
        return () => window.removeEventListener("resize",resizeHandler)
    },[state.windowWidth])

    return state.isDesiredWidth
}

export default useQueryExact;