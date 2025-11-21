import React from 'react';

const BannerSlider = () => {
    return (
        <div>
            <div className="carousel w-full h-280">
                <div id="slide1" className="carousel-item relative w-full">
                    <img
                        src="/images/rdr2-cover-pic.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide4" className="btn btn-circle">❮</a>
                        <a href="#slide2" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide2" className="carousel-item relative w-full">
                    <img
                        src="/images/PUBG-cover.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide1" className="btn btn-circle">❮</a>
                        <a href="#slide3" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide3" className="carousel-item relative w-full">
                    <img
                        src="/images/GTAV-cover.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide2" className="btn btn-circle">❮</a>
                        <a href="#slide4" className="btn btn-circle">❯</a>
                    </div>
                </div>
                <div id="slide4" className="carousel-item relative w-full">
                    <img
                        src="/images/cyberpunk-cover.jpg"
                        className="w-full" />
                    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
                        <a href="#slide3" className="btn btn-circle">❮</a>
                        <a href="#slide1" className="btn btn-circle">❯</a>
                    </div>
                </div>
            </div>
            <div className='flex flex-col items-center justify-center mt-7'>
                <h1 className='mb-2.5 text-4xl'>Popular Games</h1>
                <div className="carousel carousel-center rounded-box">
                    <div className="carousel-item">
                        <img className='h-100'
                            src="/images/GOT-DC.jpg" alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-100'
                            src="/images/RDR2.jpg"
                            alt="Pizza" />
                    </div>
                    <div className="carousel-item">
                        <img className='h-100'
                            src="/images/lou-2.jpg"
                            alt="Pizza" />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BannerSlider;