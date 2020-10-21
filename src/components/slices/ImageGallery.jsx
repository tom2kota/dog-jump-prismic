import React from 'react';
import { RichText } from 'prismic-reactjs';
import {RichTextField} from "../prismic-elements/RichTextField";
import {PrismicLink} from "../prismic-elements/PrismicLink";


export const ImageGallery = ({ slice }) => {
    return (
        <section className="image-gallery content-section">
            <RichTextField field={slice.primary.gallery_title} />
            <div className="gallery">
                {slice.items.map((item, index) => (
                    <GalleryItem item={item} key={index} />
                ))}
            </div>
        </section>
    );
};

 const GalleryItem = ({ item }) => {
    return (
        <div className="gallery-item">
            <img src={item.image.url} alt={item.image.alt} />
            <RichTextField field={item.image_description} />
            <p className="gallery-link">
                <PrismicLink link={item.link}>
                    {RichText.asText(item.link_label)}
                </PrismicLink>
            </p>
        </div>
    );
}
