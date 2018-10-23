import React, {Component} from 'react'
import ReactCSSTransitionGroup from 'react-addons-css-transition-group'

class Carousel extends Component {

    constructor(props) {
        super(props)
        this.state = {
            items: this.props.items,
            active: this.props.active,
            direction: ''
        }
        this.rightClick = this.moveRight.bind(this)
        this.leftClick = this.moveLeft.bind(this)
    }

    // componentDidUpdate() {
    //   console.log(this.props.items);
    //   this.setState((state, props) => {
    //     return {
    //       items: this.props.items,
    //       active: this.props.active,
    //       direction: ''
    //     }
    //   })
    //
    // }

    // generateItems() {
    //     var items = []
    //     var level
    //     var item
    //
    //     console.log(this.state.active)
    //     for (var i = this.state.active - 2; i < this.state.active + 3; i++) {
    //         var index = i
    //         if (i < 0) {
    //             index = this.state.items.length + i
    //         } else if (i >= this.state.items.length) {
    //             index = i % this.state.items.length
    //         }
    //         level = this.state.active - i
    //         item = this.state.items[index]
    //         console.log(item);
    //         items.push(<Item key={index} id={item.title} level={level} />)
    //     }
    //     return items
    // }

    // moveLeft() {
    //     var newActive = this.state.active
    //     newActive--
    //     this.setState({
    //         active: newActive < 0 ? this.state.items.length - 1 : newActive,
    //         direction: 'left'
    //     })
    // }
    //
    // moveRight() {
    //     var newActive = this.state.active
    //     this.setState({
    //         active: (newActive + 1) % this.state.items.length,
    //         direction: 'right'
    //     })
    // }

    render() {

      if (!this.state.items) {
        return(
            <div id="carousel" className="noselect">
                <div className="arrow arrow-left" onClick={this.leftClick}><i className="fi-arrow-left"></i></div>
                <ReactCSSTransitionGroup
                    transitionName={this.state.direction}>
                    {this.generateItems()}
                </ReactCSSTransitionGroup>
                <div className="arrow arrow-right" onClick={this.rightClick}><i className="fi-arrow-right"></i></div>
            </div>
        )
      }

      return (
        <div></div>
      )

    }
}

class Item extends React.Component {

    constructor(props) {
        super(props)
        this.state = {
            level: this.props.level
        }
    }

    render() {
        const className = 'item level' + this.props.level
        return(
            <div className={className}>
                {this.props.id}
            </div>
        )
    }
}

// var items = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

export default Carousel
