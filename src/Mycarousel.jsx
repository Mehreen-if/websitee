import Carousel from 'react-bootstrap/Carousel';


function MyCarousel() {
    return (
        <Carousel fade>
            <Carousel.Item>
                <img src="/img1.jpg" style={{width:"100%"}}></img>
                <Carousel.Caption>
                    <h3>Grace Rooted in Heritage</h3>
                    <p>A bold blend of minimalism and sparkle — crafted for the woman who owns every room she walks into. Modern beauty, made eternal.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src="/img2.jpg" style={{width:"100%"}}></img>
                <Carousel.Caption>
                    <h3>Where Elegance Meets the Now</h3>
                    <p>Echoes of tradition meet timeless artistry. Inspired by royal elegance, this piece captures the essence of stories passed down through generations.</p>
                </Carousel.Caption>
            </Carousel.Item>

            <Carousel.Item>
                <img src="/img3.jpg" style={{width:"100%"}}></img>
                <Carousel.Caption style={{color:"black"}}>
                    <h3>For Moments That Last Forever</h3>
                    <p>Celebrate beginnings with a touch of classic opulence. Designed to complement your most cherished moments with grace and grandeur.</p>
                </Carousel.Caption>
            </Carousel.Item>
        </Carousel>
    );
}

export default MyCarousel;