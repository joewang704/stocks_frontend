import * as React from 'react'
import * as classNames from 'classnames'
import './Artist.css'
import { ArtistData } from './Landing'

class Artist extends React.Component<ArtistData, {}> {
  render() {
    const { name, price, change, perc_change, image } = this.props
    const isPositive = change >= 0

    const colorClass = { green: isPositive, red: !isPositive }

    return (
      <div className="Artist-content">
        <img className="Artist-image" src={image || 'http://via.placeholder.com/200/eee/eee'} />
        <div className="Artist-name">{name}</div>
        <div className="Artist-info">
          <span className={classNames('Artist-price', colorClass)}>${price.toFixed(2)}</span>
          <span className={classNames('Artist-perc', colorClass)}>{isPositive && '+'}
            {change.toFixed(2)}<br/>{isPositive && '+'}{perc_change.toFixed(2)}%
          </span>
        </div>
      </div>
    )
  }
}

export default Artist
