import { isVisible } from '@testing-library/user-event/dist/utils';
import React, { useEffect, useState } from 'react'

const BackToTop = () => {
    const [IsVisible, SetIsVisible] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 150) {
                SetIsVisible(true)
            } else {
                SetIsVisible(false)
            }
        }
        window.addEventListener("scroll", handleScroll);
        return () => window.addEventListener("scroll", handleScroll);
    }, [])
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };
    return (
        <>
            <div >
                <button className={`back-to-top ${IsVisible ? "visible" : "hidden"}`} onClick={scrollToTop}><i className="fa-solid fa-arrow-up "></i></button>
            </div>
        </>
    )
}

export default BackToTop