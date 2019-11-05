import React from 'react';
import Header from './Header'
import MyFooter from './MyFooter';
import RenderPage from '../Route/RenderPage';
import { BrowserRouter } from 'react-router-dom';


class Home extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <body class="app sidebar-minimized sidebar-show">
                        <Header />
                        <div class="app-body">
                            <div class="sidebar">
                                
                            </div>
                            <main class="main">
                                <RenderPage/>
                            </main>
                        </div>
                        <MyFooter />
                    </body>
                </div>
            </BrowserRouter>
        )
    }
}

export default Home
