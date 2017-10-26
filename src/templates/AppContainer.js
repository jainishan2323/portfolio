import React, {Component} from 'react';
import HeroSection from './portfolio/HeroSection';
import About from './portfolio/About';
import Timeline from './portfolio/Timeline';
import Milestones from './portfolio/Milestones';

export default class AppContainer extends Component {
    render() {
        return (
            <div className="application-container">
                <HeroSection />                
                <div className="center-section">
                <About />
                <Timeline />
                <Milestones />
                </div>
            </div>
        )
    }
}