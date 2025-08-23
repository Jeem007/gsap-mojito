import { storeInfo, openingHours, socials } from '../../constants'
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { SplitText } from 'gsap/all';
const Contact = () => {
    useGSAP(()=>{
        const titleSplit = SplitText.create('#contact h2',{
            type:'words'
        })
        const timeline = gsap.timeline({
            scrollTrigger:{
                trigger:'#contact',
                start:"top center"
            },
            ease:"power1.inOut"
        })
        timeline
        .from(titleSplit.words,{
            yPercent:100,
            opacity:0,
            stagger:0.02,
            ease:"power2.out"
        })

        .from('#contact h3, #contact p',{
            opacity:0,
            yPercent:100,
            stagger:0.02
        })
        .to('#f-right-leaf',{
            y:'-50',
            duration:1,
            ease:"power1.inOut"
        })
        .to('#f-left-leaf',{
            duration:1,
            scale:1.2,
            ease:"power1.inOut"
        },'<')

    },[])
    return (
        <div id='contact'>
            <img src='../../public/images/footer-right-leaf.png' alt='leaf-right' id='f-right-leaf' />
            <img src='../../public/images/footer-left-leaf.png' alt='leaf-left' id='f-left-leaf' />

            <div className='content'>
                <h2>Where to Find Us</h2>
                <div>
                    <h3>Visit Our Bar</h3>
                    <p>{storeInfo.address}</p>
                </div>
                <div>
                    <h3>Contact Us</h3>
                    <p>{storeInfo.contact.phone}</p>
                    <p>{storeInfo.contact.email}</p>
                </div>
                 <div>
                    <h3>Open Every Day</h3>
                    {openingHours.map((time)=>(
                        <p key={time.day}>{time.day} : {time.time}</p>
                    ))}
                </div>

                <div>
                    <h3>Socials</h3>
                    <div className='flex-center gap-5'>
                        {socials.map((social)=>(
                            <a key={social.name} href={social.url} target="_blank" rel="noopener noreferrer" aria-label={social.name}>
                                <img src={social.icon}/>
                            </a>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Contact;