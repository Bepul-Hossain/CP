package demoForBeginner;

import java.util.ArrayList;
import java.util.Collections;

public class Sort_Function {

	public static void main(String[] args) {
		ArrayList<Integer> number = new ArrayList<Integer>();
		
		number.add(-3);
		number.add(-100);
		number.add(0);
		number.add(200);
		
		Collections.sort(number);
		System.out.println("after acending order sorting = "+number);
		Collections.sort(number, Collections.reverseOrder());
		System.out.println("after decending ordernsorting = "+number);

	}

}
