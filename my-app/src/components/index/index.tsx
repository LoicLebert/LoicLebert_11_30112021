import React, { Component } from "react"
import imgUrl from "../../../assets/images/cover-home.png"

export default class IndexContent extends Component {
    render() {
        return (
            <section className="relative text-center hero-index bg-black h-52 rounded-3xl w-full overflow-hidden">
            <img className="opacity-70 object-cover h-full w-full" src={imgUrl} alt="">
            </img>
            <h1 className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-4xl font-bold text-white w-full">
                Chez vous, partout et&nbsp;ailleurs
            </h1>
        </section>
        )
    }
}