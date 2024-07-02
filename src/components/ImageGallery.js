// components/ImageGallery.js
import Image from 'next/image'

// Sample image data
const images = [
    { id: 1, title: 'Image 1', src: '/screen1.jpg', alt: 'Placeholder 1' },
    { id: 2, title: 'Image 4', src: '/screen4.jpg', alt: 'Placeholder 2' },
    { id: 3, title: 'Image 5', src: '/screen5.jpg', alt: 'Placeholder 2' },
    { id: 5, title: 'Image 3', src: '/screen3.jpg', alt: 'Placeholder 2' },
    { id: 4, title: 'Image 2', src: '/screen2.jpg', alt: 'Placeholder 2' },
];

const ImageGallery = () => {
    return (
        <div className="bg-gray-900 text-white py-8">
            <div className="container mx-auto px-4 py-8">
                <h1 className="text-3xl font-bold mb-6 text-center">X Spaces Live</h1>
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-1 gap-4">
                    {images.map((image) => (
                        <div key={image.id} className="bg-gray-800 rounded-lg shadow-md overflow-hidden">
                            <div className="relative h-12 w-full">
                                <Image
                                    src={image.src}
                                    alt={image.alt}
                                    layout="fill"
                                    objectFit="contain"
                                />
                            </div>
                            {/* <div className="p-4">
              <h2 className="text-xl font-semibold mb-2">{image.title}</h2>
              {/* <p className="text-gray-600">Description for {image.title}</p> */}
                            {/* </div> */}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default ImageGallery