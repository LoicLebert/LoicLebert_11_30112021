import React, { Component } from 'react'
import imgUrl from "../assets/images/logo_white.svg"

export default class footer extends Component {
    render() {
        return (
            <footer className='bg-black'>
                <div className='block text-white text-center mx-auto py-12'>
                    <img className="mx-auto pb-4" src={imgUrl} alt=''>
                    </img>
                    @ 2020 Kasa, All rights reserved
                </div>
            </footer>
        )
    }
}
