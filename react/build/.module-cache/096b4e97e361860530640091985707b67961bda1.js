var Board = React.createClass({displayName: 'Board',
  
  cellStyle: {
    backgroundColor: '#eee',
    border: '1px solid #ccc'
  },
  
  render: function() {
    return (
      React.createElement(Col, {xs: 2, style: cellStyle})
    );
  }
});
