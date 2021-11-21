import React from 'react'
import { Link } from 'react-router-dom'
import BannerImage from '../assets/pizza.jpeg'
import '../styles/Home.css'

function Home() {
    return (
        <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
            <div className="headerContainer" >
                <h1>Mikey's Pizza</h1>
                <p>Pizza with pizazz!</p>
                <Link to="/menu">
                    <button> ORDER NOW! </button>
                </Link>
            </div>
        </div>
    )
}

export default Home
