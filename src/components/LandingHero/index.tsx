import TextFormat from "lib/helpers/TextFormat";
import React, { useState } from "react";
import Fade from "react-reveal/Fade";
import HeroSlide from "./TextSlide";
import { url } from "lib/utils";

import { cn } from "lib/utils";
interface IProps {}

const LandingPageHero = () => {
	const [index, setIndex] = useState(0);

	return (
        <section className="container relative    w-full max-w-[1700px] px-container-base pt-[3rem] lg:px-container-lg lg:pb-[5rem] lg:pt-[0.5rem] xl:px-container-xl  xl:py-[5rem] xl:pb-[8rem]">
            <div className="relative flex w-full flex-col justify-center gap-[0.5rem] md:grid  md:grid-cols-[1fr_1fr]  md:gap-[2.75rem] ">
                <div className=" flex flex-col items-center justify-center  gap-6 2xl:gap-8">
                    <div>
                        <h1 className="max-w-[80rem] text-center text-[2rem]    font-[700] leading-[130%] tracking-[0.02rem] text-secondary-2 transition-all duration-500 ease-in-out md:tracking-[0.0225rem] lg:ml-[-0.2rem] lg:text-[3.4rem] xxl:text-[5rem] xxl:leading-[5rem]">
                            <TextFormat
                                text={`Stop the waste and convert your  Plastic to Profit for everyone.`}
                                keyword={"Plastic to Profit"}
                                keywordClassName="text-primary-1 transition-all duration-500 ease-in-out"
                            />
                        </h1>
                        <HeroSlide />
                    </div>

                    <Fade bottom>
                        <h2 className="max-w-[38.875rem] text-center text-[1.18rem] font-[500] leading-[2.2rem] text-secondary-2 md:leading-[2.01rem] lg:text-[1.2rem] xxl:max-w-[45.875rem] xxl:text-[1.5rem]">
                            Lets create a greener world together
                        </h2>
                    </Fade>

                    <div className="mb-5 flex w-full md:w-fit  items-center gap-4 transition-all duration-500 ease-in-out">
                        <a href="#contact" className="w-full">
                            <div className="flex w-full items-center justify-center rounded-full bg-primary-1 px-4 py-3  xl:px-24 xl:py-4">
                                <p className="text-sm  font-bold tracking-wider text-white lg:text-[0.9rem] xxl:text-[1.1rem]">
                                    Join Us
                                </p>
                            </div>
                        </a>
                    </div>
                </div>

                <section>
                    <div
                        className="relative flex h-full max-h-[42rem] min-h-[30rem] w-full flex-col items-center justify-center rounded-lg md:min-h-[40.375rem] md:items-end md:justify-end 2xl:max-h-[50rem] 2xl:min-h-[44.375rem] "
                        //     style={{
                        //         background: ` url(
                        //     '/images/bg.svg'
                        //  )`,
                        //         backgroundSize: "contain",
                        //         backgroundPosition: "center",
                        //         backgroundRepeat: "no-repeat",
                        // 	}}
                    >
                        <img
                            src="/images/hero-new.png"
                            className="z-20 rounded-md  h-full w-full sm:object-contain xxl:object-cover   "
                        />
                    </div>
                </section>
            </div>
        </section>
    );
};

export default LandingPageHero;
