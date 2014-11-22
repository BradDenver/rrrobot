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
    else
      puts "I'm sorry, Dave. I'm afraid I can't do that"
    end
  end

  # move the robot 1 space in its current direction
  def move
    if !@on_board
      puts 'I am not on the board yet Dave'
      return
    end
    
    @new_x = @x
    @new_y = @y
    
    case @facing
    when 'NORTH'
      @new_y += 1
    when 'EAST'
      @new_x += 1
    when 'SOUTH'
      @new_y -= 1
    when 'WEST'
      @new_x -= 1
    end

    if @board.is_within_board(@new_x, @new_y)
      @x = @new_x
      @y = @new_y
      puts "Moved to #{@x}:#{@y}"
    else
      puts "I'm sorry, Dave. I'm afraid I can't do that"
    end
  end

  # rotate the robot 90 deg counter clockwise
  def left
    rotate(-1)
  end

  # rotate the robot 90 deg clockwise
  def right
    rotate(1)
  end

  def rotate(amount)
    if !@on_board
      puts 'I am not on the board yet Dave'
    else
      current_direction_index = @directions.index(@facing)
      new_direction_index = current_direction_index + amount
      if new_direction_index.nil?
        # return to start of directions list
        new_direction_index = 0
      end
      @facing = @directions[new_direction_index]
      puts "Facing #{@facing}"
    end
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
