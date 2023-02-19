import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { CircularProgressbar } from 'react-circular-progressbar';
import 'react-circular-progressbar/dist/styles.css';
import "./Skills.css"

const responsive = {
    superLargeDesktop: {
        // the naming can be any, depends on you.
        breakpoint: { max: 4000, min: 3000 },
        items: 5
    },
    desktop: {
        breakpoint: { max: 3000, min: 1024 },
        items: 3
    },
    tablet: {
        breakpoint: { max: 1024, min: 464 },
        items: 2
    },
    mobile: {
        breakpoint: { max: 464, min: 0 },
        items: 1
    }
};

const Slider = () => {
    return (
        <Carousel responsive={responsive}
            infinite="true">
            <div className="pb-5 mb-3 text-dark">
                <div style={{ height: "160px", width: "190px", margin: "auto" }}>
                    <svg style={{ height: 0 }}>
                        <defs>
                            <linearGradient id="hello" gradientTransform="rotate(90)">
                                <stop offset="16.29%" stopColor="#198754" />
                                <stop offset="85.56%" stopColor="#20C997" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgressbar
                        strokeWidth={8}
                        value={80}
                        text={`80%`}
                        styles={{
                            path: { stroke: `url(#hello)`, height: "100%" },
                            trail: {
                                stroke: "#2e2e2e"
                            }
                        }}
                    />
                    <h3 className="text-secondary pt-3">HTML</h3>
                </div>
            </div>
            <div className="pb-5 mb-3 text-dark">
                <div style={{ height: "160px", width: "190px", margin: "auto" }}>
                    <svg style={{ height: 0 }}>
                        <defs>
                            <linearGradient id="hello" gradientTransform="rotate(90)">
                                <stop offset="16.29%" stopColor="#198754" />
                                <stop offset="85.56%" stopColor="#20C997" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgressbar
                        strokeWidth={8}
                        value={90}
                        text={`90%`}
                        styles={{
                            path: { stroke: `url(#hello)`, height: "100%" },
                            trail: {
                                stroke: "#2e2e2e"
                            }
                        }}
                    />
                    <h3 className="text-secondary pt-3">CSS</h3>
                </div>
            </div>
            <div className="pb-5 mb-3 text-dark">
                <div style={{ height: "160px", width: "190px", margin: "auto" }}>
                    <svg style={{ height: 0 }}>
                        <defs>
                            <linearGradient id="hello" gradientTransform="rotate(90)">
                                <stop offset="16.29%" stopColor="#198754" />
                                <stop offset="85.56%" stopColor="#20C997" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgressbar
                        strokeWidth={8}
                        value={95}
                        text={`95%`}
                        styles={{
                            path: { stroke: `url(#hello)`, height: "100%" },
                            trail: {
                                stroke: "#2e2e2e"
                            }
                        }}
                    />
                    <h3 className="text-secondary pt-3">javaScript</h3>
                </div>
            </div>
            <div className="pb-5 mb-5 text-dark">
                <div style={{ height: "160px", width: "180px", margin: "auto" }}>
                    <svg style={{ height: 0 }}>
                        <defs>
                            <linearGradient id="hello" gradientTransform="rotate(90)">
                                <stop offset="16.29%" stopColor="#198754" />
                                <stop offset="85.56%" stopColor="#20C997" />
                            </linearGradient>
                        </defs>
                    </svg>
                    <CircularProgressbar
                        strokeWidth={8}
                        value={98}
                        text={`98%`}
                        styles={{
                            path: { stroke: `url(#hello)`, height: "100%" },
                            trail: {
                                stroke: "#2e2e2e"
                            }
                        }}
                    />
                    <h3 className="text-secondary pt-3">React</h3>
                </div>
            </div>
        </Carousel>
    );
}

export default Slider;