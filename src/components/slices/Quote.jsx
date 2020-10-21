import React from 'react';
import {RichText} from "prismic-reactjs";

export const Quote = ({slice}) => (
    <section className="content-section quote">
        <blockquote>
            {RichText.asText(slice.primary.quote_text)}
        </blockquote>
    </section>
)
