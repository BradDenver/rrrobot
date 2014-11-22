class Robot
  attr_reader :on_board

  # create a robot
  def initialize
    @on_board = false
    @board = Board.new
    @directions = ['NORTH', 'EAST', 'SOUTH', 'WEST']
    @x = nil
    @y = nil
    @facing = 'NORTH'
  end

  # place the robot on the board
  def place(x, y, facing)
    if @board.is_within_board(x, y) && @directions.include?(facing)
      @on_board = true
      @x = x
      @y = y
      @facing = facing
    end
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
    if !@on_board
      puts 'I am not on the board yet Dave'
    else
      puts "I am at #{@x}:#{@y}, facing #{@facing}"
    end
  end

end
