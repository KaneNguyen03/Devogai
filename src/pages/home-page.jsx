import { Carousel } from "antd"
import TabCategory from "../components/ui/tab-category"


export default function HomePage() {
    return (
        <div>
            <Carousel autoplay autoplaySpeed={2500} arrows infinite={true}>
                <div>
                    <h3 className="m-0 h-80 text-white leading-4 text-lg text-center bg-green-500">1</h3>
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
            <TabCategory tag={"New Arrivals"} />
            <TabCategory tag={"T Shirts"} />
            <TabCategory tag={"Shirts"} />
            <TabCategory tag={"Pants"} />
        </div>
    )
}
