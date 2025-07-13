import { useEffect, useState } from 'react'
import logo from '../../assets/transparent-logo.png';
import { Spinner } from 'react-bootstrap';

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
                <div class="loading-screen d-flex flex-column gap-4">
                    <img src={logo} alt="logo" />
                    <div className="d-flex gap-2 loading-spinner">
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="info" />
                        <Spinner animation="grow" variant="info" />
                    </div>
                </div>}
        </>
    )
}

export default LoadingScreen