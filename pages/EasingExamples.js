import React from 'react';
import { AnimatedComponent, Eases } from 'react-set-animate'
import Header from './components/Header'
import Footer from './components/Footer'

export default class EasingExamples extends AnimatedComponent {
  constructor(props) {
    super(props)
    this.state = {
      left: 0,
      checked: false,
      isAnimating: false,
      easeIn: 'bounce-in-out',
      easeOut: 'bounce-in-out'
    }
    this.handleHeadingClick = this.handleHeadingClick.bind(this)
  }

  handleHeadingClick(event) {
    if (this.state.isAnimating) { return; }
    this.state.isAnimating = true
    var cmp = this;
    this.setState({ code: `this.setState( 'left', ${+this.refs.distance.clientWidth - 50}, ${+this.refs.timeOut.value}, '${this.state.easeOut}')
.then( () => setState( 'left', 0, ${+this.refs.timeIn.value}, '${this.state.easeIn}') )
`})
    cmp.setAnimate( 'left', +this.refs.distance.clientWidth - 50, +this.refs.timeOut.value, this.state.easeOut)
    .then( () => this.setAnimate( 'left', 0, +this.refs.timeIn.value, this.state.easeIn) )
    .then( () => this.setState({ isAnimating: false }))
  }

  render() {
    var cmp = this;
    return (
      <div className="wrapper">
        <Header />
        <div className="content" style={{ zIndex: 999, top: 50 }}>
          <p>
            <label>Milliseconds to move out:</label>
            <input ref="timeOut" defaultValue={1000} />

            <label>Time move back:</label>
            <input ref="timeIn" defaultValue={500} />

            <label>Ease out:</label>
            <select value={cmp.state.easeOut} onChange={(e) => this.setState({ easeOut: e.target.value }) }>
              {Eases.map(n => <option key={n}>{n}</option>)}
            </select>

            <label>Ease in:</label>
            <select value={cmp.state.easeIn} onChange={(e) => this.setState({ easeIn: e.target.value }) }>
              {Eases.map(n => <option key={n}>{n}</option>)}
            </select>

            {'  '}
            <button onClick={cmp.handleHeadingClick} disabled={this.state.isAnimating}>Start</button>

          </p>
          <div ref="distance" style={{zIndex: 3, backgroundColor: '#eef', marginTop: 12 }}>
            <img src="/img/ball.jpeg" style={{
                zIndex: 2,
                backgroundColor: '#000',
                borderRadius: 25, width: 50,
                textAlign: 'center', color: '#FFF',
                transform: `translate3d(${this.state.left}px,0px,0px)` }} />
          </div>
          {
            this.state.code ? (
              <div>
                <hr />
                <label>Code:</label>
                <pre>
                {this.state.code}
                </pre>
              </div>
            ) : ''
          }
        </div>
        <Footer />
      </div>
      )
    }
  }
