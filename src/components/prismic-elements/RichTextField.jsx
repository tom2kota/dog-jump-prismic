import React from 'react';
import {RichText} from 'prismic-reactjs';
import {linkResolver} from '../../prismic-configuration';
import {customLink} from '../../utils/prismicHelpers';

export const RichTextField = ({field}) => (
    <RichText
        render={field}
        linkResolver={linkResolver}
        serializeHyperlink={customLink}
    />
)
