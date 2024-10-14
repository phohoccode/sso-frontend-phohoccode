import { useEffect } from "react"
import { useSearchParams, useNavigate } from "react-router-dom"
import { useDispatch, useSelector } from "react-redux"
import { doLogin } from "../redux/slice/userSlice"

const Authenticate = (props) => {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user.userInfo)
    const [searchParams, setSearchParams] = useSearchParams();
    const navigate = useNavigate()

    useEffect(() => {
        if (userInfo.access_token) {
            navigate('/')
        }
    }, [userInfo])

    useEffect(() => {
        const ssoToken = searchParams.get('ssoToken')
        const typeAccount = searchParams.get('type')
        const query = {
            ssoToken,
            typeAccount
        }

        dispatch(doLogin(query))   
    }, [])
    
    return (
        <>
        </>
    )
}

export default Authenticate