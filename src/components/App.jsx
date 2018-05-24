import React from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import Loadable from 'react-loadable'

import { CircularProgress } from 'material-ui/Progress'

const MainPageLoadable = Loadable({
  loader: () => import('./FirstPage/FirstPage'),
  loading() {
    return <CircularProgress />
  }
});

const Header = Loadable({
  loader: () => import('./Header/Header'),
  loading: () => <CircularProgress/>
})

const SouvenirLoadable = Loadable({
  loader: () =>import('./common/PageSouvenir/PageSouvenir'),
  loading(){
    return <CircularProgress />
  }
});

const SanatoriumsLoadable = Loadable({
  loader: () =>import('./Aray/Aray'),
  loading(){
    return <CircularProgress />
  }
});

const SanatoriumLoadable = Loadable({
  loader: () =>import('./common/SanatoriumMore/SanatoriumMore'),
  loading(){
    return <CircularProgress />
  }
});

const TourLoadable = Loadable({
  loader: () =>import('./common/TourPage/TourPage'),
  loading(){
    return <CircularProgress />
  }
});

const Toursloadable = Loadable({
  loader: () =>import('./PageTours/PageTours'),
  loading(){
    return <CircularProgress />
  }
});

const ContactsLoadable = Loadable({
  loader: () =>import('../components/common/Contacts/Contacts'),
  loading(){
    return <CircularProgress />
  }
});

const AboutKZ = Loadable({
  loader: () =>import('./PageAboutQazaqstan/PageAboutQazaqstan'),
  loading(){
    return <CircularProgress />
  }
});

const confirmOrder = Loadable({
  loader: () =>import('./common/OrderConfirmation/OrderConfirmation'),
  loading(){
    return <CircularProgress />
  }
});

const Order = Loadable({
  loader: () =>import('./common/PageOrder/PageOrder'),
  loading(){
    return <CircularProgress />
  }
});


const Gallery = Loadable({
  loader: () =>import('./Gallery/Gallery'),
  loading(){
    return <CircularProgress />
  }
});

class App extends React.Component {
  render() {
    return (
      <Router >
        <Switch >
          <Route exact path="/" component={MainPageLoadable} />
          {/*<Route exact path="/mobile" component={NavMenuSmallScreen}/>*/}
          <Route path="/souveniers" component={SouvenirLoadable} />
          <Route exact path="/sanatoriums" component={SanatoriumsLoadable} />
          <Route path="/sanatoriums/:id" component={SanatoriumLoadable} />
          <Route exact path="/tours" component={TourLoadable} />
          <Route path="/tours/:id" component={Toursloadable} />
          <Route exact path="/contacts" component={ContactsLoadable} />
          <Route exact path="/about" component={AboutKZ} />
          <Route exact path="/orderConfirmation" component={confirmOrder} />
          <Route exact path="/pageOrder" component={Order} />
          <Route exact path="/gallery" component={Gallery} />
        </Switch >
      </Router >
    )
  }
}

export default App


