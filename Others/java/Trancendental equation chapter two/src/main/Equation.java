package main;

import java.util.Scanner;

public class Equation {
	double f(double x) {
		System.out.print("Enter highest  degree of euation  n = ");
		
		Scanner m = new Scanner(System.in);
		int n = m.nextInt();
		for(int i=1; i<=n; i++) {
			x=x*i;
		}
		System.out.print("Enter coeficient of highest  degree of euation  n = ");
		int coeficient = m.nextInt();
		
		
		return (x*x*x)-x-1;
	}
}
