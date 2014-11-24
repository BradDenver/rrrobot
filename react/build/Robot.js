var direction_icons = {
  'NORTH': 'up',
  'EAST': 'right',
  'SOUTH': 'down',
  'WEST': 'left'
};

var Robot = React.createClass({displayName: 'Robot',
  propTypes: {
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
