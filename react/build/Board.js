var Board = React.createClass({displayName: 'Board',
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
        cols.push(
          React.createElement(Cell, {key: c+'.'+r, x: c, y: r, placeRobot: this.placeRobot}, 
             c===this.state.robotX && r===this.state.robotY ? React.createElement(Robot, {facing: this.state.robotFacing}) : ''
          )
        );
      }
      rows.push(React.createElement("div", {className: "row", key: r}, cols));
    }
    
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, "React RRRobot"), 
        rows, 
        React.createElement("div", {className: "row", style: {margin: '2em 0'}}, 
          React.createElement("div", {className: "btn-group", role: "group"}, 
            React.createElement("button", {type: "button", className: "btn btn-default"}, "Left"), 
            React.createElement("button", {type: "button", className: "btn btn-default"}, "Move"), 
            React.createElement("button", {type: "button", className: "btn btn-default"}, "Right")
          )
        ), 
        React.createElement("div", {className: "row"}, 
          React.createElement("div", {className: "well well-lg"}, "Click a square to place the robot.")
        )
      )
    );
  },

  placeRobot: function(x, y) {
    this.setState({
      robotX: x,
      robotY: y,
      robotOnBoard: true
    });
  }
});
