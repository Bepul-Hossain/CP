package main;

import other.Division;

public class Calculate {

	public static void main(String[] args) {
		Sum sum=new Sum();
		
		System.out.println(sum.add(4, 5));
		Mul multiplication = new Mul();
		System.out.println(multiplication.mul(4, 5));
		Division division = new Division();
		System.out.println(division.div(10, 2));

	}

}
