import React, { Component } from 'react';

import Aux from './hoc/Aux';
import './App.scss';
import Header from './components/Header/Header'
import Seperator from './UI/Seperator/Separator'
import Features from './components/Features/Features'
import Footer from './components/Footer/Footer'
import Banner from './assets/background-banner.png'
import Card from './assets/icon-card.png'
import Clock from './assets/icon-clock.png'
import Calendar from './assets/icon-calendar.png'
import Eye from './assets/icon-eye.png'
import Graph from './assets/icon-graph.png'
import Mail from './assets/icon-mail.png'

class App extends Component {
  state = {
    activeKey0: 0,
    activeKey1: 0,
    features0: [
      {
        name: 'Event Booking',
        description: 'Description of this feature will go under this tab',
        icon: Calendar,
      }, {
        name: 'Faster Registration',
        description: 'Description of this feature will go under this tab',
        icon: Clock,
      }, {
        name: 'Any Currency Accepted',
        description: 'Description of this feature will go under this tab',
        icon: Card,
      },
    ],
    features1: [
      {
        name: 'Keep an eye on your events',
        description: 'Description of this feature will go under this tab',
        icon: Eye,
      }, {
        name: 'Minimize registration time',
        description: 'Description of this feature will go under this tab',
        icon: Graph
      }, {
        name: 'Direct Promotion',
        description: 'Description of this feature will go under this tab',
        icon: Mail,
      },
    ]
  }

  render() {
    return (
      <Aux>
        <Header />
        <section style={{ backgroundImage: `url(${Banner})` }} className="app-background"></section>
        <Seperator />
        <Features features={this.state.features0} />
        <Seperator />
        <Features features={this.state.features1} />
        <Footer />
      </Aux>
    );
  }
}

export default App;