import React, { Component } from 'react';

class Footer extends Component {
    render() {
        const style = {
            marginTop : '10px'
        };

        console.log("menu");
        
        return (
            <div>
                <ul style={style} className="nav justify-content-end">
                    <li className="nav-item">
                        <a className="nav-link active" href="#">React JS</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Home</a>
                    </li>
                    <li className="nav-item">
                        <a className="nav-link" href="#">Blog</a>
                    </li>
                </ul>
                <hr/>
            </div>
        );
    }
}

export default Footer;