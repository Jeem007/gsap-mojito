import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all"
gsap.registerPlugin(ScrollTrigger, SplitText);
import Navbar from "./components/Navbar";
const App = () =>{
    return (
       <main>
           <Navbar/>
       </main>
    )
}
export default App