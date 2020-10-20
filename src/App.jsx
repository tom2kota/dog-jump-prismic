import React, {Fragment} from 'react'
import {Helmet} from 'react-helmet'
import {
    BrowserRouter,
    Route,
    Switch,
    Redirect
} from 'react-router-dom'
import {apiEndpoint} from './prismic-configuration'
import {Help, Preview, NotFound} from './pages'
import {Page} from "./pages/Page";

const App = (props) => {
    const repoNameArray = /([^/]+)\.cdn.prismic\.io\/api/.exec(apiEndpoint)
    const repoName = repoNameArray[1]

    return (
        <Fragment>
            <Helmet>
                <script async defer src={`//static.cdn.prismic.io/prismic.js?repo=${repoName}&new=true`}/>
            </Helmet>
            <BrowserRouter>
                <Switch>
                    <Redirect exact from='/' to='/page/dog'/>
                    <Route exact path='/help' component={Help}/>
                    <Route exact path='/preview' component={Preview}/>
                    <Route exact path='/page/:uid' component={Page}/>
                    <Route component={NotFound}/>
                </Switch>
            </BrowserRouter>
        </Fragment>
    )
}

export default App
