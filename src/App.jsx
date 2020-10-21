import React  from 'react'
import {Helmet} from 'react-helmet'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import {apiEndpoint} from './prismic-configuration'
import {Page} from "./pages/Page";
import {Homepage} from "./pages/Homepage";
import {Help} from "./pages/Help";
import {Preview} from "./pages/Preview";
import {NotFound} from "./pages/NotFound";

export const App = () => {
    const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint)
    const repoName = repoNameArray[1]

    return (
        <>
            <Helmet>
                <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}/>
            </Helmet>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from='/' to='/homepage'/>
                    {/*<Redirect exact from='/' to='/page/dog'/>*/}
                    <Route exact component={Homepage}/>
                    <Route exact path='/help' component={Help}/>
                    <Route exact path='/preview' component={Preview}/>
                    <Route exact path='/page/:uid' component={Page}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </>
    )
}
