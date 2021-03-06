import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {

  state = {
    front: true
  }

  handleToggle = () => {
    console.log(this.state)
    this.setState({
      front: !this.state.front
    })
  }
  render() {
    const {name, hp, sprites} = this.props.pokemon
    return (
      <Card>
        <div onClick={this.handleToggle}>
          <div className="image">
            <img src={this.state.front ? sprites.front : sprites.back} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{name}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {hp} hp
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
