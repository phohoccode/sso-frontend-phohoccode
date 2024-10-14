import { useEffect, useState } from 'react';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';
import { useDispatch, useSelector } from 'react-redux';
import Form from 'react-bootstrap/Form';
import { doGetAccount, doUpdateUser } from '../redux/slice/userSlice';


const ModalUser = (props) => {
    const userInfo = useSelector(state => state.user.userInfo)
    const dispatch = useDispatch()

    const [user, setUser] = useState({
        username: userInfo.username,
        phoneNumber: userInfo.phoneNumber,
        email: userInfo.email,
        gender: userInfo.gender || 'Nam',
        address: userInfo.address,
        type: userInfo.type,
    })

    const handleUpdateUser = async () => {
        await dispatch(doUpdateUser(user))
        dispatch(doGetAccount())
    }

    return (
        <Modal
            show={props.show}
            onHide={props.handleClose}
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Thay đổi thông tin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group className="mb-3">
                        <Form.Label>Tên người dùng</Form.Label>
                        <Form.Control
                            onChange={(e) => setUser({ ...user, username: e.target.value })}
                            value={user.username || ''} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            onChange={(e) => setUser({ ...user, email: e.target.value })}
                            value={user.email || ''} type="email" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Số điện thoại</Form.Label>
                        <Form.Control
                            onChange={(e) => setUser({ ...user, phoneNumber: e.target.value })}
                            value={user.phoneNumber || ''} type="text" />
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Select
                            onChange={(e) => setUser({ ...user, gender: e.target.value })}
                            defaultValue={user.gender || 'Nam'}>
                            <option value="Nam">Nam</option>
                            <option value="Nữ">Nữ</option>
                        </Form.Select>
                    </Form.Group>
                    <Form.Group className="mb-3">
                        <Form.Label>Địa chỉ</Form.Label>
                        <Form.Control
                            onChange={(e) => setUser({ ...user, address: e.target.value })}
                            value={user.address || ''} as="textarea" rows={3} />
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={props.handleClose}>
                    Huỷ
                </Button>
                <Button onClick={() => handleUpdateUser()} variant="primary">Xác nhận</Button>
            </Modal.Footer>
        </Modal>

    )
}

export default ModalUser