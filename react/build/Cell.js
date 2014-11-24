var Cell = React.createClass({displayName: 'Cell',
  propTypes: {
    x: React.PropTypes.number.isRequired,
    y: React.PropTypes.number.isRequired
  },

  cellStyle: {
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    minHeight: '5em'
  },
  
  render: function() {
    return (
      React.createElement("div", {className: "col-xs-2 text-muted", style: this.cellStyle}, this.props.x, ".", this.props.y, this.props.children)
    );
  }
});
