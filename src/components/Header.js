import { useEffect } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useDispatch, useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom';
import { doLogout } from '../redux/slice/userSlice';


const Header = (props) => {
    const userInfo = useSelector(state => state.user.userInfo)
    const dispatch = useDispatch()

    const handleLogin = () => {
        window.location.href =
            `${process.env.REACT_APP_API}/login?redirectURL=${window.location.origin}`
    }

    const handleLogout = () => {
        dispatch(doLogout())
    }

    return (
        <>
            <Navbar expand="lg" className="bg-body-tertiary">
                <Container fluid>
                    <Navbar.Brand href="#">SSO-PHOHOCCODE</Navbar.Brand>
                    <Navbar.Toggle aria-controls="navbarScroll" />
                    <Navbar.Collapse id="navbarScroll">
                        <Nav
                            className="me-auto my-2 my-lg-0"
                            style={{ maxHeight: '100px' }}
                            navbarScroll
                        >
                            <NavLink className='nav-link' to='/'>Trang chủ</NavLink>
                            <NavLink className='nav-link' to='/user'>Thông tin người dùng</NavLink>
                        </Nav>
                        <Nav>
                            {userInfo && userInfo.access_token &&
                                <Nav.Item className='nav-link' >Xin chào! {userInfo.username}</Nav.Item>}
                            {userInfo && userInfo.access_token ?
                                <Nav.Item className='nav-link' onClick={() => handleLogout()}>Đăng xuất</Nav.Item> :
                                <Nav.Item className='nav-link' onClick={() => handleLogin()}>Đăng nhập</Nav.Item>
                            }
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </>
    )
}

export default Header