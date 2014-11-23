var Board = React.createClass({displayName: 'Board',
  render: function() {
    return (
      React.createElement("div", {class: "container-fluid"}, 
        React.createElement("div", {class: "row"}, 
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
