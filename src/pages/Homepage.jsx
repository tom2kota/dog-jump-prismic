import React, {useEffect, useState} from "react"
import {client} from "../prismic-configuration";
import {NotFound} from "./NotFound";
import {DefaultLayout} from "../components/layout/DefaultLayout";
import {SliceZone} from "../components/SliceZone";

export const Homepage = () => {
    const [prismicData, setPrismicData] = useState({homeDoc: null, menuDoc: null});
    const [notFound, toggleNotFound] = useState(false);

    useEffect(() => {
        const fetchPrismicData = async () => {
            try {
                const homeDoc = await client.getSingle('homepage', {});
                const menuDoc = await client.getSingle('menu', {});

                if (homeDoc) {
                    setPrismicData({homeDoc, menuDoc});
                } else {
                    console.warn('Homepage document was not found. Make sure it exists in your Prismic repository.');
                    toggleNotFound(true);
                }
            } catch (error) {
                console.error(error);
                toggleNotFound(true);
            }
        }

        fetchPrismicData();
    }, []);

    if (prismicData.homeDoc) {
        const homeDoc = prismicData.homeDoc;
        const menuDoc = prismicData.menuDoc;

        return (
            <>
                <DefaultLayout
                    wrapperClass="homepage"
                    menuDoc={menuDoc}
                >
                    <SliceZone sliceZone={homeDoc.data.page_content}/>

                    {/*<div> homeDoc*/}
                    {/*    <div>{console.log('homeDoc: ', homeDoc)}</div>*/}
                    {/*</div>*/}
                    {/*<div> menuDoc*/}
                    {/*    <div>{console.log('menuDoc: ', menuDoc)}</div>*/}
                    {/*</div>*/}

                </DefaultLayout>
            </>
        )
    } else if (notFound) {
        return <NotFound/>
    }

    return null
}
