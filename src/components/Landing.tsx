import * as React from 'react'
import './Landing.css'
import Artist from './Artist'

export interface ArtistData {
  title?: string,
  name: string,
  price: number,
  change: number,
  perc_change: number,
  image?: string,
}

export const artistData: ArtistData[] = [
  {
    title: 'chance',
    name: 'Chance the Rapper',
    price: 1172.10,
    change: 1.25,
    perc_change: 0.32,
  },
  {
    title: 'coldplay',
    name: 'Coldplay',
    price: 72.10,
    change: -2.35,
    perc_change: -0.62,
  },
  {
    title: 'halsey',
    name: 'Halsey',
    price: 65.10,
    change: 1.10,
    perc_change: 0.12,
  },
  {
    title: 'owlcity',
    name: 'Owl City',
    price: 5.93,
    change: -0.11,
    perc_change: -0.02,
  },
  {
    title: 'pinkfloyd',
    name: 'Pink Floyd',
    price: 30.39,
    change: -0.04,
    perc_change: -0.01,
  },
  {
    title: 'watsky',
    name: 'Watsky',
    price: 52.30,
    change: 7.04,
    perc_change: 4.01,
  },
  {
    title: 'weeknd',
    name: 'The Weeknd',
    price: 108.91,
    change: 10.01,
    perc_change: 2.52,
  },
]

/*export const artistData: ArtistData[] = [
  {
    title: 'chance',
    name: 'Chance the Rapper',
    price: 1172.10,
    change: 1.25,
    perc_change: 0.32,
  },
  {
    title: 'coldplay',
    name: 'Coldplay',
    price: 72.10,
    change: -2.35,
    perc_change: -0.62,
  },
  {
    title: 'halsey',
    name: 'Halsey',
    price: 65.10,
    change: 1.10,
    perc_change: 0.12,
  },
  {
    title: 'owlcity',
    name: 'Owl City',
    price: 5.93,
    change: -0.11,
    perc_change: -0.02,
  },
  {
    title: 'pinkfloyd',
    name: 'Pink Floyd',
    price: 30.39,
    change: -0.04,
    perc_change: -0.01,
  },
  {
    title: 'watsky',
    name: 'Watsky',
    price: 52.30,
    change: 7.04,
    perc_change: 4.01,
  },
  {
    title: 'weeknd',
    name: 'The Weeknd',
    price: 108.91,
    change: 10.01,
    perc_change: 2.52,
  },
]*/

class Landing extends React.Component {
  render() {
    return (
      <div className="container">
        <div className="jumbotron">
          <div className="jumbotron-content">
            <div className="h1">Buy and sell shares of your favorite artists.</div>
            <br/><br/>
            <button type="button">Sign Up</button>
          </div>
        </div>
        <div className="artists">
          {artistData.map(data => <Artist {...data} key={data.title} />)}
        </div>
      </div>
    )
  }
}

export default Landing
