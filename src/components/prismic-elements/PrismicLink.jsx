import React from 'react';
import {Link as RouterLink} from 'react-router-dom';
import {Link} from 'prismic-reactjs';
import {linkResolver} from '../../prismic-configuration';

export const PrismicLink = ({link, linkClass, children}) => {
    const linkUrl = Link.url(link, linkResolver);

    if (linkUrl && children !== '') {
        return (
            <RouterLink
                className={linkClass}
                to={linkUrl}
            >
                {children}
            </RouterLink>
        );
    }

    return null
}
