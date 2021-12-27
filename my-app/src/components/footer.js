import React, { Component } from 'react'
import imgUrl from "../assets/images/logo_white.svg"
import "../css/footer.css"

export default class Footer extends Component {
    render() {
        return (
            <footer className='footer-main'>
                    <img src={imgUrl} alt='Kasa-Logo' />
                    <p>
                    @ 2020 Kasa, All rights reserved
                    </p>            
            </footer>
        )
    }
}
