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
        ), 
        React.createElement("div", {className: "row"}, 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null)
        ), 
        React.createElement("div", {className: "row"}, 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null)
        ), 
        React.createElement("div", {className: "row"}, 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null)
        ), 
        React.createElement("div", {className: "row"}, 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null), 
         React.createElement(Cell, null)
        ), 
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
  }
});
