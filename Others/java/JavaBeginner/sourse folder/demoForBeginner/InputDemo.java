package demoForBeginner;

import java.util.Scanner;

public class InputDemo {
	public static void main(String[] args) {
		System.out.println("Enter input");
		//@SuppressWarnings("resource")
		Scanner input = new Scanner(System.in);
		int value;
		value = input.nextInt();
		System.out.println(value);
	}

}
