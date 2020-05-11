package basic;

import java.util.ArrayList;

public class ArrayList_addAll_equals_Method {

	public static void main(String[] args) {
		ArrayList<Integer> number1 = new ArrayList<>();
		ArrayList<Integer> number2 = new ArrayList<>();
		ArrayList<Integer> number3 = new ArrayList<>();
		
		number1.add(5);
		number1.add(6);
		number1.add(7);
		System.out.println(number1);
		
		number2.addAll(number1);
		System.out.println(number2);
		boolean check1, check2;
		check1 = number1.equals(number3);
		System.out.println("check1 = "+check1);
		check2 = number1.equals(number2);
		System.out.println("check2 = "+check2);

		number3.add(12);
		number3.add(15);
		number3.addAll(number1);
		System.out.println(number3);



	}

}
