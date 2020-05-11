package demoForBeginner;

import java.util.Scanner;

public class Temperature {

	public static void main(String[] args) {
		System.out.print("Enter temperature in celsius ");
		Scanner celsius = new Scanner(System.in);
		double degree = celsius.nextDouble();
		double farhenhite = ((9*degree)/5)+32;
		System.out.println(farhenhite);
		
	
	}

}
