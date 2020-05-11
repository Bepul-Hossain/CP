package basic;

import java.util.Scanner;

public class Switch {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		int digit = input.nextInt();
	
		switch (digit) {
		case 0:
			System.out.println("Zero");
			break;
		case 1:
			System.out.println("One");
			break;
		default :
			System.out.println("Not Zeor or One");
		}
	}

}
