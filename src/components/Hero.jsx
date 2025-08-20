import { useGSAP } from "@gsap/react";
import {SplitText} from 'gsap/all'
import gsap from "gsap";
import { useRef } from "react";
import { useMediaQuery } from "react-responsive";
const Hero = () =>{
    const videoRef = useRef();
    const isMobile = useMediaQuery({maxWidth:767})

    useGSAP(()=>{
        const heroSplit = new SplitText('.title',{type:'chars,words'});
        const paragraphSplit = new SplitText('.subtitle',{type:'lines'});

        heroSplit.chars.forEach((char)=>char.classList.add('text-gradient'));
        gsap.from(heroSplit.chars,{
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.05,
        });

        gsap.from(paragraphSplit.lines,{
            opacity:0,
            yPercent:100,
            duration:1.8,
            ease:"expo.out",
            stagger:0.05,
            delay:1,
        });

        gsap
        .timeline({
            scrollTrigger:{
                trigger:'#hero',
                start:'top top',
                end:'bottom top',
                scrub: true,
            }
        })
        .to('.right-leaf',{y:200},0)
        .to('.left-leaf',{y:-200},0)

        const startValue = isMobile ? 'top 50%' : 'center 60%'
        const endValue = isMobile ? '120% top': 'bottom top'

        const tl = gsap.timeline({
            scrollTrigger:{
                trigger:'video',
                start:startValue,
                end:endValue,
                scrub: true,
                pin:true,
            }
        })
        videoRef.current.onloadedmetadata = () =>{
            tl.to(videoRef.current,{
                currentTime: videoRef.current.duration,
            })
        }





    },[])
    return(
        <>
            <section id="hero" className="noisy">
                <h1 className="title">MOJITO</h1>
                <img src="../../public/images/hero-left-leaf.png" className="left-leaf" alt="left-leaf"/>
                <img src="../../public/images/hero-right-leaf.png" className="right-leaf" alt="right-leaf"/>

                <div className="body">
                    <div className="content">
                        <div className="space-y-5 hidden md:block">
                            <p>Cool. Crisp. Classic.</p>
                             <p className="subtitle">Sip the Spirit <br/> of Summer</p>
                        </div>
                        <div className="view-cocktails">
                            <p className="subtitle">
                                Every cocktail in our menu is a blend of premium ingredients, creative flair, and timeless recipes <br/>- designed to delight your senses.
                            </p>
                            <a href="#cocktails">View Cocktails</a>
                        </div>
                    </div>
                </div>

            </section>
            <div className="video absolute inset-0">
            {/* Use ffmpeg command after download and install it
                ffmpeg -i input.mp4 -vf scale=960:-1 -movflags faststart -vcodec libx264 -crf 20 -g 1 -pix_fmt yuv420p output.mp4
             */}
                <video ref={videoRef} src="/videos/output.mp4" muted playsInline preload="auto"/>
            </div>
        </>
    )
}
export default Hero;