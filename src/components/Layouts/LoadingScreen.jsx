import { useEffect, useState } from 'react'
import logo from '../../assets/transparent-logo.png'

const LoadingScreen = () => {
    const [isLoading, setLoading] = useState(true)
    useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1500)
    }, [])

    return (
        <>
            {isLoading &&
                <div class="loading-screen">
                    <img src={logo} alt="logo" />
                </div>}
        </>
    )
}

export default LoadingScreen