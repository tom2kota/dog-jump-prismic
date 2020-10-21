import React, {useEffect, useState} from 'react'
import {client} from '../prismic-configuration'
import {NotFound} from './NotFound'
import {DefaultLayout} from "../components/layout/DefaultLayout";
import {SliceZone} from "../components/SliceZone";

export const Page = ({match}) => {
    const [prismicData, setPrismicData] = useState({pageDoc: null, menuDoc: null});
    const [notFound, toggleNotFound] = useState(false);

    const uid = match.params.uid;

    useEffect(() => {
        const fetchPrismicData = async () => {
            try {
                const pageDoc = await client.getByUID('page', uid, {});
                const menuDoc = await client.getSingle('menu', {});

                if (pageDoc) {
                    setPrismicData({pageDoc, menuDoc});
                } else {
                    console.warn('Page document was not found. Make sure it exists in your Prismic repository');
                    toggleNotFound(true);
                }
            } catch (error) {
                console.error(error);
                toggleNotFound(true);
            }
        }
        fetchPrismicData();

        // Load new page at the top (when linking from the middle of another page)
        window.scrollTo(0, 0);
    }, [uid]);


    if (prismicData.pageDoc) {
        const pageDoc = prismicData.pageDoc;
        const menuDoc = prismicData.menuDoc;

        return (
            <DefaultLayout
                wrapperClass="page"
                menuDoc={menuDoc}
            >
                <SliceZone sliceZone={pageDoc.data.page_content}/>

                {/*<div> pageDoc*/}
                {/*    <div>{console.log('pageDoc: ', pageDoc)}</div>*/}
                {/*</div>*/}
                {/*<div> menuDoc*/}
                {/*    <div>{console.log('menuDoc: ', menuDoc)}</div>*/}
                {/*</div>*/}

            </DefaultLayout>
        );
    } else if (notFound) {
        return <NotFound/>;
    }
    return null
}
