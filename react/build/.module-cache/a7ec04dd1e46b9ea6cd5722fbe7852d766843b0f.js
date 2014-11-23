var Board = React.createClass({displayName: 'Board',
  render: function() {
    return (
      React.createElement(Grid, null, 
        React.createElement(Row, null, 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null)
        )
      )
    );
  }
});
