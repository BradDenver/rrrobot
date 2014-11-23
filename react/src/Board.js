var Board = React.createClass({
  render: function() {
    return (
      <div className="container">
        <h1>React RRRobot</h1>
        <div className="row">
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
        </div>
        <div className="row">
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
        </div>
        <div className="row">
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
        </div>
        <div className="row">
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
        </div>
        <div className="row">
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
         <Cell /> 
        </div>
        <div className="row" style={{margin: '2em 0'}}>
          <div className="btn-group" role="group">
            <button type="button" className="btn btn-default">Left</button>
            <button type="button" className="btn btn-default">Move</button>
            <button type="button" className="btn btn-default">Right</button>
          </div>
        </div>
        <div className="row">
          <div className="well well-lg">Click a square to place the robot.</div>
        </div>
      </div>
    );
  }
});
