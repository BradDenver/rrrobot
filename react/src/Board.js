var directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'];

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
        cols.push(
          <Cell key={c+'.'+r} x={c} y={r} placeRobot={this.placeRobot} >
            { c===this.state.robotX && r===this.state.robotY ? <Robot facing={this.state.robotFacing} /> : '' }
          </Cell>
        );
      }
      rows.push(<div className="row" key={r}>{cols}</div>);
    }
    var err = (this.state.error) ? <div className="alert alert-danger">{this.state.error}</div> : '';
    
    return (
      <div className="container">
        <h1>React RRRobot</h1>
        {rows}
        <div className="row" style={{margin: '2em 0'}}>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default" onClick={this.left}>Left</button>
            <button type="button" className="btn btn-default" onClick={this.move}>Move</button>
            <button type="button" className="btn btn-default" onClick={this.right}>Right</button>
          </div>
        </div>
        <div className="row">
          <div className="well well-lg">Click a square to place the robot.</div>
        </div>
        {err}
      </div>
    );
  },

  placeRobot: function(x, y) {
    this.setState({
      robotX: x,
      robotY: y,
      robotOnBoard: true,
      error: null
    });
  },

  left: function() {
    this._rotate(-1);
  },

  right: function() {
    this._rotate(1);
  },

  _rotate: function(amount) {
    if(!this.state.robotOnBoard) {
      this.setState({error: 'I am not on the board yet Dave'});
    } else {
      var current_direction_index = directions.indexOf(this.state.robotFacing);
      var new_direction_index = current_direction_index + amount;
      if(new_direction_index >= directions.length) {
        // return to start of directions list
        new_direction_index = 0;
      }
      if(new_direction_index < 0) {
        // return to end of directions list
        new_direction_index = directions.length -1;
      }
      this.setState({
        robotFacing: directions[new_direction_index],
        error: null
      });
    }
  },

  move: function() {
    if(!this.state.robotOnBoard) {
      this.setState({error: 'I am not on the board yet Dave'});
    } else {
      var newX = this.state.robotX,
      newY = this.state.robotY;

      switch(this.state.robotFacing) {
        case 'NORTH':
          newY++;
        break
        case 'EAST':
          newX++;
        break
        case 'SOUTH':
          newY--;
        break
        case 'WEST':
          newX--;
        break;
      }
    
      if(newX >= 0 && newX < this.props.gridSize && newY >= 0 && newY < this.props.gridSize) {
        this.setState({
          robotX: newX,
          robotY: newY,
          error: null
        });
      } else {
        this.setState({error: "I'm sorry, Dave. I'm afraid I can't do that"});
      }
    }
  }

});
