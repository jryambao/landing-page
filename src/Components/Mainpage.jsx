import React from 'react'
import '../Style/Main.scss'

function Mainpage() {
  return (
    
    <section id="hp-about">
        <div className="container">
            <div className="agent">
                <img src="img/agent1.jpg" alt="Phil Dunphy"/>
            </div>
            <div className="about-body">
                <div className="section-title">
                    <h3>Meet</h3>
                    <h2>Phil Dunphy</h2>
                </div>
                <div className="content">
                <p>Phil Dunphy is known for his quirky personality and unrelenting optimism. In addition to his role as a doting husband and father, Phil is a highly successful real estate agent. With his extensive knowledge of the market, impeccable communication skills, and unwavering determination, Phil is a force to be reckoned with in the real estate industry. Whether he's helping his clients find their dream home or closing a deal with a firm handshake and a big smile, Phil's commitment to his work is unwavering. As a realtor, Phil Dunphy is a true professional who knows how to get the job done with a touch of humor and a lot of heart.</p>
                </div>

                <div className="global-btn">
                    <a href="#">Learn More</a>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Mainpage