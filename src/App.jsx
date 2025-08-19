import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
gsap.registerPlugin(ScrollTrigger, SplitText);

const App = () =>{
    return (
        <div className="flex-center">
            <p className="text-indigo-400 text-3xl">App</p>
        </div>
    )
}
export default App