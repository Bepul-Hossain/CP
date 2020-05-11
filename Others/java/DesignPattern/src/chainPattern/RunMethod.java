package chainPattern;

public class RunMethod {

	public static void main(String[] args) {
		Chain chainCalculation1 = new AddNumbers();
		Chain chainCalculation2 = new SubNumbers();
		Chain chainCalculation3 = new MultiplyNumber();
		Chain chainCalculation4 = new DivideNumbers();
		
		chainCalculation1.setNextChain(chainCalculation2);
		chainCalculation2.setNextChain(chainCalculation3);
		chainCalculation3.setNextChain(chainCalculation4);
		
		Numbers request = new Numbers(3, 6, "divide");
		chainCalculation1.calculate(request);
	}
}
