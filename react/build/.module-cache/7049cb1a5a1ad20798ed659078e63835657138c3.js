var Board = React.createClass({displayName: 'Board',
  render: function() {
    return (
      React.createElement("div", {className: "container-fluid"}, 
        React.createElement("div", {className: "row"}, 
         React.createElement(Cell, {key: 1}), 
         React.createElement(Cell, {key: 2}), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null)
        )
      )
    );
  }
});
