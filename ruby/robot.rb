class Robot
  attr_reader :on_board

  # create a robot
  def initialize
    @on_board = false
    @board = Board.new
    @directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']
  end

  # place the robot on the board
  def place(x, y, facing)
    @on_board = @board.is_within_board(x, y) && @directions.include?(facing)
  end

  # move the robot 1 space in its current direction
  def move
  end

  # rotate the robot 90 deg counter clockwise
  def left
  end

  # rotate the robot 90 deg clockwise
  def right
  end

  # announce the robots current coordinates and facing direction
  def report
  end

end
