import happy2 from '../../images/video2.mp4';
import AOS from "aos";
import "aos/dist/aos.css";
import './About.css';
import working from '../../images/working.jpg';
import working2 from '../../images/working2.jpg';

AOS.init();

export default function About() {

    return (

        <>
            <div className='textvid'>
                <div className='titleabs'>
                    {/*
                // @ts-ignore */}
                    <video autoPlay="autoplay" loop="loop" width="95%" height="40%" className='videop'>
                        <source src={happy2} type="video/mp4" />
                    </video>
                    <div className='animate__animated animate__fadeInLeft title'>
                        <p>Everyone Deserves A Second Chance</p>
                    </div>
                </div>
            </div>
            <div className='firstphoto'>
                <p className='firsttext'>Norway has one of the lowest rates of reoffending in the world – prisoners in Norway must take responsibility for their past actions, but it is in everyone’s interest that offenders are helped to reintegrate into society when their sentences come to an end.

                    There are many factors that contribute to Norway’s success in reducing reoffending.
                    Some of these lessons are being shared with other countries, with support from the Norway Grants.
                    One project brings together different aspects of rehabilitation, from making sure that prisoners maintain links with their family, to ensuring that they acquire new skills that will help them to find work once they leave prison.
                </p>
                <div data-aos="zoom-in">
                    <img src={working} className='working'></img>
                </div>
            </div>
            <div className='secondphoto'>
                <p className='secondtext'>No less important are the skills needed to deal with anger, stress, fear and other negative emotions; emotions that were often the root cause of the original offence.

                    Contact with animals has been found to have a positive impact on mental health, in particular in improving emotional and social reactions.
                    The prisoners are taught how to look after dogs, including obedience training, exercising and agility training.
                    The positive relationship that develops reaps rewards not just for the dogs, who are tamed and can find new homes, but also for the prisoners, who regain confidence in themselves.</p>

                <div data-aos="zoom-in">
                    <img src={working2} className='working2'></img>
                </div>
            </div>
        </>
    )
}