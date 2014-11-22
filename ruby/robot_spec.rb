require_relative './robot.rb'

RSpec.describe Robot do
  
  describe "#new" do
    before :all do
      @robot = Robot.new
    end
    subject { @robot }
    it { is_expected.to be_an_instance_of Robot }
    it { is_expected.to respond_to :place }
    it { is_expected.to respond_to :move }
    it { is_expected.to respond_to :left }
    it { is_expected.to respond_to :right }
    it { is_expected.to respond_to :report }
  end
  
  describe "#place(x, y, facing)" do
    before :all do
      @robot = Robot.new
    end
    context "when given valid placement" do
      before :all do
        @robot.place(0, 2, 'NORTH')
      end
      it "should be on the board" do
        expect(@robot.on_board).to be true
      end
    end
  end    


end
