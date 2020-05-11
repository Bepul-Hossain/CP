package chainPattern;

import static org.junit.jupiter.api.Assertions.*;

import org.junit.jupiter.api.Test;

class CalculateByJUnitTest {

	@Test
	void test() {
		Chain chainCalculation1 = new AddNumbers();
		Chain chainCalculation2 = new SubNumbers();
		Chain chainCalculation3 = new MultiplyNumber();
		Chain chainCalculation4 = new DivideNumbers();
		
		chainCalculation1.setNextChain(chainCalculation2);
		chainCalculation2.setNextChain(chainCalculation3);
		chainCalculation3.setNextChain(chainCalculation4);
		
		assertEquals(5.0, chainCalculation1.calculate(new Numbers(3.0, 2.0,"add"))," " );
		assertEquals(1.0, chainCalculation1.calculate(new Numbers(3.0, 2.0,"sub"))," " );
		assertEquals(6.0, chainCalculation1.calculate(new Numbers(3.0, 2.0,"multiply"))," " );
		assertEquals(1.5, chainCalculation1.calculate(new Numbers(3.0, 2.0,"divide"))," " );
		
		
		
	}

}
