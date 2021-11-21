import React from 'react'
import MultiplePizzas from '../assets/multiplePizzas.jpeg'
import '../styles/About.css'

function About() {
    return (
        <div className="about">
            <div className="aboutTop" style={{ backgroundImage: `url(${MultiplePizzas})` }}></div>
            <div className="aboutBottom">
                <h1> ABOUT US </h1>
                <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusantium ea animi accusamus, minus id quis exercitationem eius obcaecati, molestias quos, sint minima distinctio placeat dolor fugiat dolorem ad eaque architecto! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perspiciatis labore temporibus maiores illo provident est quasi nihil? Veritatis vel pariatur facilis nesciunt deserunt officiis odio autem. Dignissimos odio iusto minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint odio ad debitis maxime necessitatibus eum praesentium earum ullam porro non incidunt, perferendis unde id doloremque optio hic, magni, ea illum?Lorem ipsum, dolor sit amet consectetur adipisicing elit. Culpa consectetur nisi reprehenderit neque dicta esse repudiandae non atque est illo fugiat ut, incidunt quia. Minus nulla et laudantium id expedita?</p>
            </div>

        </div>
    )
}

export default About
