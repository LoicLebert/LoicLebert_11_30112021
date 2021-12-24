import React, { Component } from 'react'
import "../css/homepage.css"
import { data } from "../data"
import Banner from './banner'
import Thumb from './thumb'

export default class HomePage extends Component {
    render() {
        return (
            <div className='homepage'>
                <header className='header-main'>
                    <Banner
                    />
                </header>
                <main className="content-main">
                    {data.map((elt) => (
                        <article key={elt.id} className="location-elt">
                            <Thumb title={elt.title} src={elt.cover} id={elt.id} />
                        </article>
                ))}
            </main>
        </div>
        )
    }
}
