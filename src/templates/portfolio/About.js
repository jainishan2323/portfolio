import React, {Component} from 'react';

export default class About extends Component {
    render() {
        return (
            <section className="about-section">
                <div className="content">
                    <div className="about">
                        <div className="name white">
                            <div className="text-container">
                                <h2>ISHAN</h2>
                                <h4>JAIN</h4>
                                <h5>UI/UX DEVELOPER</h5>
                            </div>
                        </div>
                        <div className="gradient-seperator-secondary-color" />
                        <div className="intro">
                            <h3 className="section-header">About</h3>
                            <div className=" text-container">
                                <article className="intro-content">
                                    <div className="image" />
                                    <h5>
                                        I am a Web developer, India based. 
                                        I like creating high performance and optimized web applications leveraging latest
                                        Web frameworks like ReactJS and Redux.
                                    </h5>
                                    <p>Lorem ipsum Irure Ut dolor cupidatat reprehenderit dolore cillum consectetur pariatur voluptate anim deserunt voluptate laboris Duis do Duis Ut sed dolore est do amet in eiusmod eiusmod nostrud ullamco eu labore in aliqua ullamco voluptate aliquip ad sed dolore ad reprehenderit non in velit sed elit in labore amet aliquip quis commodo consequat eu dolor dolor dolor do laboris dolor.</p>
                                </article>
                            </div>
                        </div>
                    </div>                    
                    <div className="gradient-seperator-primary-color" />
                </div>
            </section>
        );
    }
}