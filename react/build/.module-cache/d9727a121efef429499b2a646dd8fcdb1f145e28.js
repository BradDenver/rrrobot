var Board = React.createClass({displayName: 'Board',
  render: function() {
    return (
      React.createElement("div", {className: "container"}, 
        React.createElement("h1", null, "React RRRobot"), 
        React.createElement("div", {className: "row"}, 
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
