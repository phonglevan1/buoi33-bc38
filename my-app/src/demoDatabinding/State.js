import React, { Component } from 'react'

class State extends Component {
    
    state = {
        isLogin: false,
        a:1,
        b:2,
    };
    login = () =>{
        this.setState({
            isLogin: true,
        });
    };
    renderNav() {
        if (this.isLogin) {
            return (
                <div>
                    <h4>Xin chào</h4>
                    <button>Log out</button>
                </div>
            );
        }
        return (
            <div>
                <button>Đăng ký</button>
                <button onClick={this.login}>Đăng Nhập</button>
            </div>
        );
    }

    render() {
        return (
            <div>
                <h1>Demo State</h1>
                {this.renderNav()}
            </div >
        )
    }

}
export default State;

