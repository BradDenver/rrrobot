# a minimal representation of a 5x5 table top
class Board

  def initialize
    @x_range = 0...5
    @y_range = 0...5
  end
  
  def is_within_board(x, y)
    return @x_range.cover?(x) && @y_range.cover?(y)
  end

end
