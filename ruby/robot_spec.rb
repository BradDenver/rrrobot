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
    context "when given valid placement" do
      before :all do
        @robot = Robot.new
        @robot.place(0, 2, 'NORTH')
      end
      it "should be on the board" do
        expect(@robot.on_board).to be true
      end
      it "should be report the correct placement" do
        expect{@robot.report}.to output("I am at 0:2, facing NORTH\n").to_stdout
      end
    end
    context "when given an invalid placement" do
      before :all do
        @robot = Robot.new
        @robot.place(0, 2, 'NORTHWEST')
      end
      it "should not be on the board" do
        expect(@robot.on_board).to be false
      end
      it "should be report no placement" do
        expect{@robot.report}.to output("I am not on the board yet Dave\n").to_stdout
      end

    end

  end    


end
