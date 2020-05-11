package demoForBeginner;

import java.util.ArrayList;

public class ArraList {

	public static void main(String[] args) {
		ArrayList<String> friends = new ArrayList<String>();
		System.out.println(friends.size()); //initially length 0
		friends.add("shohan means kachu vai");
		System.out.println(friends.size()); //then size 1 because doing add method 1 time
		String name = friends.get(0);
		//friends.set(0, "shohan");
		System.out.println("name "+name+ " size = "+name.length());
		
		
		ArrayList<Integer> number1 = new ArrayList<>();
		ArrayList<Integer> number2= new ArrayList<>();
		ArrayList<Integer> number3 = new ArrayList<>();
		
		number1.add(0,5);
		number1.add(1,10);
		number1.add(2,20);
		
		number2.add(0,4);
		number2.add(1,12);
		number2.add(2,22);
		
		number3.addAll(number1);
		System.out.println("number3 = "+number3);
		boolean result = number1.equals(number2);
		System.out.println("number1 == number2 is "+result);
		
		result = number1.equals(number3);
		System.out.println("number1 == number3 is "+result);
	}

}
