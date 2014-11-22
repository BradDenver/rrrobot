require_relative './board.rb'

RSpec.describe Board do
  
  before :all do
    @board = Board.new
  end

  describe "#new" do
    subject { @board }
    it { is_expected.to be_an_instance_of Board }
    it { is_expected.to respond_to :is_within_board }
  end

  describe "#is_within_board(x, y)" do
    context "when within board boundary" do
      it { expect( @board.is_within_board(0, 0) ).to be true }
      it { expect( @board.is_within_board(4, 4) ).to be true }
    end
    context "when one axis outside board boundary" do
      it { expect( @board.is_within_board(-1, 0) ).to be false }
      it { expect( @board.is_within_board(4, 5) ).to be false }
    end
    context "when both axis outside board boundary" do
      it { expect( @board.is_within_board(-1, -1) ).to be false }
    end

  end


end
