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

end
