import React from 'react';
import { RichText } from 'prismic-reactjs';
import {RichTextField} from "../prismic-elements/RichTextField";
import {PrismicLink} from "../prismic-elements/PrismicLink";

export const ImageHighlight = ({ slice }) => (
    <section className="highlight content-section">
        <div className="highlight-left">
            <RichTextField field={slice.primary.title} />
            <RichTextField field={slice.primary.headline} />
            <p>
                <PrismicLink link={slice.primary.link}>
                    {RichText.asText(slice.primary.link_label)}
                </PrismicLink>
            </p>
        </div>
        <div className="highlight-right">
            <img
                src={slice.primary.featured_image.url}
                alt={slice.primary.featured_image.alt}
            />
        </div>
    </section>
)
