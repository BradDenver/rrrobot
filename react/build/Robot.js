var directions = ['NORTH', 'EAST', 'SOUTH', 'WEST'],
  direction_icons = {
    'NORTH': 'up',
    'EAST': 'right',
    'SOUTH': 'down',
    'WEST': 'left'
  };

var Robot = React.createClass({displayName: 'Robot',
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired,
    facing: React.PropTypes.string.isRequired
  },

  style: {
    position: 'absolute',
    top: '50%',
    left: '50%'
  },
  
  render: function() {
    return (
      React.createElement("span", {className: 'glyphicon glyphicon-chevron-'+direction_icons[this.props.facing], style: this.style})
    );
  }
});
