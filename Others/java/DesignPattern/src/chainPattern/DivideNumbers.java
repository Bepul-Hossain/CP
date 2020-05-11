package chainPattern;

public class DivideNumbers implements Chain {

	private Chain nextInChain;

	@Override
	public void setNextChain(Chain nextChain) {
		this.nextInChain = nextChain;
	}

	@Override
	public double calculate(Numbers requests) {
		if(requests.getCalculationWanted()=="divide") {
			
				return	(requests.getNumber1()/requests.getNumber2());
		}
		else {
			System.out.println("ok");
		}
		return -1;
	}

}
