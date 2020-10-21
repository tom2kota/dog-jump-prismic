import React from 'react';
import {RichTextField} from "../prismic-elements/RichTextField";

export const TextSection = ({ slice }) => {
    const sectionClass = slice.slice_label ? `text-section-${slice.slice_label}` : 'text-section-1col';
    return (
        <section className={`content-section ${sectionClass}`}>
            <RichTextField field={slice.primary.rich_text} />
        </section>
    );
}
