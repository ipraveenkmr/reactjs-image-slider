import { useEffect, useState } from 'react';
import SimpleImageSlider from "react-simple-image-slider";

const images = [
    { url: "/car/car1.jpg" },
    { url: "/car/car2.jpg" },
    { url: "/car/car3.jpg" },
    { url: "/car/car4.jpg" },
    { url: "/car/car1.jpg" },
];

const Slideshow = () => {
    const [selectedImage, setSelectedImage] = useState(null);

    useEffect(() => {
        console.log('selectedImage ', selectedImage);
    }, [selectedImage])


    return (
        <>
            <div>
                {selectedImage === null ? (
                    <SimpleImageSlider
                        width="100vw"
                        height="100vh"
                        images={images}
                        showBullets={true}
                        showNavs={true}
                        autoPlay={true}
                    />
                ) : (
                    <img src={selectedImage} width="100%" height="100%" alt="" />
                )}

            </div>
            <div className="flex cursor-pointer">
                <div onClick={() => setSelectedImage(images[0].url)}>
                    <img src={images[0].url} width="320" alt="" />
                </div>
                <div onClick={() => setSelectedImage(images[1].url)}>
                    <img src={images[1].url} width="320" alt="" />
                </div>
                <div onClick={() => setSelectedImage(images[2].url)}>
                    <img src={images[2].url} width="320" alt="" />
                </div>
                <div onClick={() => setSelectedImage(images[3].url)}>
                    <img src={images[3].url} width="320" alt="" />
                </div>
                <div onClick={() => setSelectedImage(images[4].url)}>
                    <img src={images[4].url} width="320" alt="" />
                </div>
            </div>
        </>

    );
}

export default Slideshow;