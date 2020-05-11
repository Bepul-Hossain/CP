package demoForBeginner;

import java.util.Scanner;

public class Array_input {
	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		System.out.println("Enter five integer number");
		int[] array = new int[5];
		for(int i=0; i<5; i++) {
			int value = input.nextInt();
			array[i] =value;
			System.out.println(array[i]);
		}
		
	}
}
