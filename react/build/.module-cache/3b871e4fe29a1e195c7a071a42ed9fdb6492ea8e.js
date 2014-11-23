var Cell = React.createClass({displayName: 'Cell',
  
  cellStyle: {
    backgroundColor: '#eee',
    border: '1px solid #ccc'
  },
  
  render: function() {
    return (
      React.createElement("div", {className: "col-xs-2", style: this.cellStyle}, "0")
    );
  }
});
