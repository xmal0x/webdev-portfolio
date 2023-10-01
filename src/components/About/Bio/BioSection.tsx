import React, {useState} from "react"
import {Gallery} from "react-grid-gallery"
import Lightbox from "yet-another-react-lightbox"

import {Textarea} from "../../index"

import {aboutBio, images} from "../../../data"

const slides = images.map(({original}) => ({
    src: original
}));

const BioSection = () => {
    const [selectedImageIndex, setSelectedImageIndex] = useState(-1);

    const handleClick = (index: number) => setSelectedImageIndex(index);

    return (
        <section className="flex lg:flex-row flex-col gap-8">
            <div className="flex-1">
                <Textarea content={aboutBio}/>
            </div>
            <div className="2xl:flex-1 flex-[0.75] my-auto">
                <Gallery
                    images={images}
                    onClick={handleClick}
                    enableImageSelection={false}
                    margin={5}
                    rowHeight={220}
                />
                <Lightbox
                    slides={slides}
                    open={selectedImageIndex >= 0}
                    index={selectedImageIndex}
                    close={() => setSelectedImageIndex(-1)}
                />
            </div>
        </section>
    )
}

export default BioSection
