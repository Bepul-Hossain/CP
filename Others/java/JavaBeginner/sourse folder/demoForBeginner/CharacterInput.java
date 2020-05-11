package demoForBeginner;

import java.util.Scanner;

public class CharacterInput {

	public static void main(String[] args) {
		System.out.print("Enter character = ");
		Scanner input = new Scanner(System.in);
		char character;
		character = input.next().charAt(0);
		
		if(character =='a' || character == 'e') {
			System.out.println("vowel");
		}
		else {
			System.out.println("consonant");
			
		}

	}

}
