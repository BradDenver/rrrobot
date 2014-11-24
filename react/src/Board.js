var Board = React.createClass({
  propTypes: {
    gridSize: React.PropTypes.number.isRequired
  },

  getDefaultProps: function() {
    return {
      gridSize: 5,
    };
  },

  getInitialState: function() {
    return {
      robotOnBoard: false,
      robotX: null,
      robotY: null,
      robotFacing: 'NORTH'
    }
  },
  
  render: function() {
    var rows = [];
    for(r=this.props.gridSize-1; r>=0; r--) {
      var cols = [];
      for(c=0; c<this.props.gridSize; c++) {
        cols.push(<Cell key={c+'.'+r} x={c} y={r} >{ c===0 && r===0 ? <Robot facing={this.state.robotFacing} /> : '' }</Cell>);
      }
      rows.push(<div className="row" key={r}>{cols}</div>);
    }
    
    return (
      <div className="container">
        <h1>React RRRobot</h1>
        {rows}
        <div className="row" style={{margin: '2em 0'}}>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default">Left</button>
            <button type="button" className="btn btn-default">Move</button>
            <button type="button" className="btn btn-default">Right</button>
          </div>
        </div>
        <div className="row">
          <div className="well well-lg">Click a square to place the robot.</div>
        </div>
      </div>
    );
  }
});
