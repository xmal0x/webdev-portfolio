import {aboutBio, images} from "../../../data";
import React, {useState} from "react";
import {CustomImage} from "../../../types";
import {Textarea} from "../../index";
import {Gallery} from "react-grid-gallery";
import Lightbox from "yet-another-react-lightbox";

const slides = images.map(({original, width, height}) => ({
    src: original,
}));

const Bio = () => {
    const [index, setIndex] = useState(-1);

    const handleClick = (index: number, item: CustomImage) => setIndex(index);

    return (
        <div className="flex lg:flex-row flex-col gap-8">
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
                    open={index >= 0}
                    index={index}
                    close={() => setIndex(-1)}
                />
            </div>
        </div>
    )
}

export default Bio
