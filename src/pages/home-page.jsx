import Banner from "../assets/banner.jpg"
import Contact from "../components/ui/contact"
import TabCategory from "../components/ui/tab-category"
import TabCollection from "../components/ui/tab-collection"
import AiPrompt from "../components/ui/AiPrompt"

export default function HomePage() {
    return (
        <div className="px-40">
            <div className="bg-cover bg-center m-0 h-92 leading-4 text-lg text-center">
                <img src={Banner} alt="Banner" className="w-full h-full object-cover" />
            </div>
            <div>
                <AiPrompt />
            </div>
            <div id="arrivals">
                <TabCategory tag={"New Arrivals"} />
            </div>
            <div id="T-shirt">
                <TabCollection tag={"T-shirt"} />
            </div>
            <div id="Bandana">
                <TabCollection tag={"Bandana"} />
            </div>
            <div id="Tote Bag">
                <TabCollection tag={"Tote Bag"} />
            </div>
            <div id="Socks">
                <TabCollection tag={"Socks"} />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    )
}