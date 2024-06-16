import { Carousel } from "antd"
import Contact from "../components/ui/contact"
import TabCategory from "../components/ui/tab-category"
import TabCollection from "../components/ui/tab-collection"

export default function HomePage() {
    return (
        <div className="px-60">
            <Carousel autoplay autoplaySpeed={2500} arrows infinite={true}>
                <div>
                    <h3 className="m-0 h-80 text-white leading-4 text-lg text-center bg-gray-300">1</h3>
                </div>
                <div>
                    <h3 className="m-0 h-80 text-white leading-4 text-lg text-center bg-gray-700">2</h3>
                </div>
                <div>
                    <h3 className="m-0 h-80 text-white leading-4 text-lg text-center bg-red-500">3</h3>
                </div>
                <div>
                    <h3 className="m-0 h-80 text-white leading-4 text-lg text-center bg-black">4</h3>
                </div>
            </Carousel>
            <div id="arrivals">
                <TabCategory tag={"New Arrivals"} />
            </div>
            <div id="collection1">
                <TabCollection tag={1} />
            </div>
            <div id="collection2">
                <TabCollection tag={2} />
            </div>
            <div id="collection3">
                <TabCollection tag={3} />
            </div>
            <div id="contact">
                <Contact />
            </div>
        </div>
    )
}