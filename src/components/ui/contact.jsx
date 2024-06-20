import { Typography } from "antd"
import { FaFacebook, FaInstagram } from "react-icons/fa"

const Contact = () => {
    return (
        <div className="p-6 mt-10 m-2">
            <Typography.Title>Contact us:</Typography.Title>
            <div className="h-38 ml-48 float-left
              -mt-10 w- flex-col 
              rounded-xl bg-white bg-clip-border 
              text-gray-700 shadow-2xl">
                <div className="p-6 w-96">
                    <h5 className="text-center mr-4 mb-2 
                 block font-sans text-xl 
                 font-semibold text-blue-gray-900 
                 antialiased">
                        Reach Us At
                    </h5>
                    <ul>
                        <li className="mt-2">
                            <span><i className="fa fa-envelope mr-2"></i> </span>
                            <span>devogai.offical@gmail.com</span>
                        </li>
                        <li className="mt-2 flex gap-4 p-4">
                            <a href="https://www.facebook.com/profile.php?id=100087605461654" target="_blank" rel="noopener noreferrer">
                                <FaFacebook size={30} />
                            </a>
                            <a href="https://www.instagram.com/devogai/" target="_blank" rel="noopener noreferrer">
                                <FaInstagram size={30} />
                            </a>
                        </li>

                    </ul>
                </div>
            </div>
            <div className=" mr-36 w-96 text-center float-right -mt-7 flex-col rounded-xl
                     bg-white text-gray-700 shadow-2xl">
                <div className="p-6 ">
                    <h5 className="mb-2 block font-sans 
                               text-xl font-semibold 
                               text-blue-gray-900 antialiased">
                        Branding & Collaboration
                    </h5>
                    <i className="fa fa-handshake fa-2xl"></i>
                    <div className="text-left mt-4">
                        <span><i className="fa fa-envelope mr-2"></i> </span>
                        <span>devogai.offical@gmail.com</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default Contact
