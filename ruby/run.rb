#!/usr/bin/env ruby

require_relative './robot.rb'

puts "Your robot is ready"
puts "Type `irb Robot.new` to start a new robot session"
puts "Then try one of the following commands:"
puts "place(x, y, NORTH|EAST|SOUTH|WEST)"
puts "move"
puts "left"
puts "right"
puts "report"

# these costants can be used inplace of quoted strings
NORTH = 'NORTH'
EAST = 'EAST'
SOUTH = 'SOUTH'
WEST = 'WEST'
