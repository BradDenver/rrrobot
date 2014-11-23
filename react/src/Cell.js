var Cell = React.createClass({
  
  cellStyle: {
    backgroundColor: '#eee',
    border: '1px solid #ccc',
    minHeight: '5em'
  },
  
  render: function() {
    return (
      <div className="col-xs-2" style={this.cellStyle}>0</div>
    );
  }
});
