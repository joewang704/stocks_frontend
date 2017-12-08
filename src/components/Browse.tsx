import * as React from 'react'
import { artistData } from './Landing'
import Artist from './Artist'
import './Browse.css'
import { getBrowseData, BrowseState } from '../redux/browse'
import { connect } from 'react-redux'
import { Store } from '../redux'

interface Props {
  getBrowseData: () => any,
  browse: BrowseState,
  dispatch?: (action: any) => void,
}

class Browse extends React.Component<Props, {}> {
  componentWillMount() {
    this.props.getBrowseData()
  }

  render() {
    const { browse } = this.props
    let data = artistData
    if (browse && browse.popular && browse.popular.length > 0) {
      const { popular } = browse
      data = popular.map(obj => Object.assign(obj, {
        price: Math.random() * 150,
        perc_change: Math.random() * 2 - 1,
        change: Math.random() * 10 - 5,
      }))
    }
    return (
      <div className="full-screen">
        <div className="Browse-section-title">Featured</div>
        <div className="Browse-section-title">Popular</div>
        <div className="Browse-section">
          {data.map((item) => <Artist {...item} key={item.title} />)}
        </div>
        <div className="Browse-section-title">Trending</div>
        <div className="Browse-section">
          {data.reverse().map((item) => <Artist {...item} key={item.title} />)}
        </div>
      </div>
    )
  }
}

const mapStateToProps = (state: Store) => {
  return {
    browse: state.browse,
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return {
    getBrowseData: () => dispatch(getBrowseData()),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Browse)
