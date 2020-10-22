import React, {useEffect, useState} from "react"
import {client} from "../prismic-configuration";
import {DefaultLayout} from "../components/layout/DefaultLayout";
import {HomepageBanner} from "../components/HomepageBanner";
import {SliceZone} from "../components/SliceZone";
import {NotFound} from "./NotFound";
import {Loader} from "../components/layout/Loader";

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
                    <HomepageBanner
                        banner={homeDoc.data.homepage_banner[0]}
                    />

                    <SliceZone
                        sliceZone={homeDoc.data.page_content}
                    />
                </DefaultLayout>
            </>
        )
    } else if (notFound) {
        return <NotFound/>
    }

    return null
}
