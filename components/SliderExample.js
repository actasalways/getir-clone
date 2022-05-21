import React from 'react';

const nextSlide = () => {
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('-translate-x-full');

    let nextSlide = activeSlide.nextElementSibling;
    nextSlide.classList.remove('translate-x-full');
    nextSlide.classList.add('translate-x-0');
}

function previousSlide() {
    let activeSlide = document.querySelector('.slide.translate-x-0');
    activeSlide.classList.remove('translate-x-0');
    activeSlide.classList.add('translate-x-full');

    let previousSlide = activeSlide.previousElementSibling;
    previousSlide.classList.remove('-translate-x-full');
    previousSlide.classList.add('translate-x-0');
}

const Slider = () => {
    return (
        <div>
            <div className="relative">
                <div className="absolute inset-0 w-screen h-screen bg-gray-500 text-white 
                flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform hover:-translate-x-full translate-x-0 slide">Hello</div>
                <div className="absolute inset-0 w-screen h-screen bg-gray-800 text-white 
                flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform hover:-translate-x-full translate-x-full slide">There</div>
                <div className="absolute inset-0 w-screen h-screen bg-teal-500 text-white 
                flex items-center justify-center text-5xl transition-all ease-in-out duration-1000 transform hover:-translate-x-full translate-x-full slide">Booya!</div>
                <div onClick="nextSlide()" className="fixed bottom-0 right-0 bg-white w-16 h-16 
                flex items-center justify-center text-black cursor-pointer">&#x276F;</div>
                <div onClick="previousSlide()" className="fixed bottom-0 right-0 bg-white w-16 h-16 mr-16 
                border-r border-gray-400 flex items-center justify-center text-black cursor-pointer">&#x276E;</div>
            </div>

        </div>
    );
};

export default Slider;