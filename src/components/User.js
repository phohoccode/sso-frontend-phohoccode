import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { useNavigate } from "react-router-dom"

import ModalUser from "./Modal"

const User = (props) => {
    const userInfo = useSelector(state => state.user.userInfo)
    const navigate = useNavigate()
    const [show, setShow] = useState(false)

    useEffect(() => {
        if (!userInfo.access_token) {
            navigate('/')
        }
    }, [userInfo])

   

    const handleClose = () => {
        setShow(false)
    }

    return (
        <>
            <div className="container mt-5 shadow-sm p-3 mb-5 bg-body rounded">
                <div className="row">
                    <h4>Thông tin tài khoản</h4>
                    <span>Tên người dùng: {userInfo.username}</span>
                    <span>Số điện thoại: {userInfo.phoneNumber}</span>
                    <span>Email: {userInfo.email}</span>
                    <span>Địa chỉ: {userInfo.address}</span>
                    <span>Giới tính: {userInfo.gender}</span>
                    <button className="btn btn-primary mt-5" onClick={() => setShow(true)}>Thay đổi thông tin</button>
                </div>
            </div>

            <ModalUser
                show={show}
                handleClose={handleClose}
            />
        </>
    )
}

export default User