import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Home from './components/Home';
import User from './components/User';
import Header from './components/Header';
import Authenticate from './components/Authenticate';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';
import { doGetAccount } from './redux/slice/userSlice';

function App() {
    const dispatch = useDispatch()
    const userInfo = useSelector(state => state.user.userInfo)

    useEffect(() => {
        if (!userInfo.access_token) {
            dispatch(doGetAccount())
        }
    }, [])

    return (
        <div className="App">
            <Router>
                <Header />
                <Routes>
                    <Route path='/' element={<Home />} />
                    <Route path='/user' element={<User />} />
                    <Route path='/authenticate' element={<Authenticate />} />
                </Routes>
            </Router>
        </div>
    );
}

export default App;
