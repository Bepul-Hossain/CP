package basic;

import java.util.ArrayList;
import java.util.Collections;

public class ArrayListSort {

	public static void main(String[] args) {
				ArrayList<Integer> number1 = new ArrayList<>();
				number1.add(5);
				number1.add(-6);
				number1.add(0);
				number1.add(80);
				System.out.print("ok = "+number1.isEmpty());
				Collections.sort(number1);
				System.out.println("Ascending order after sort"+number1);
				Collections.sort(number1,Collections.reverseOrder());
				System.out.println("Discending order after sort"+number1);
				
	}
}