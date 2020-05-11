package basic;

import java.util.Scanner;

public class BitwiseOperator {

	public static void main(String[] args) {
		Scanner input = new Scanner(System.in);
		
		int a, b, c;
		a = input.nextInt();
		b = input.nextInt();
		
		System.out.println("a&b = "+ (a&b)+", a|b = "+ (a|b)+", a^b = "+ (a^b)
				+", a>>b = "+ (a>>3)+", a<<b = "+ (a<<2));



	}

}
