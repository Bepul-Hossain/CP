package main;

import java.util.Random;

public class BisectionMethod {

	public static void main(String[] args) {
		Equation eq = new Equation();
		double a,b,c=0;
		final double episod = 0.0001;
		while(true) {
			Random random = new Random();
			a=(random.nextInt(50000))-30000;
			b=(random.nextInt(60000))-0;
			if(eq.f(a)*eq.f(b)<0) {
				break;
			}		
		}
		
		while(b-a>=episod) {
			c=(a+b)/2.0;
			if(eq.f(a)*eq.f(c)>0) {
				a=c;
			}
			else if(eq.f(a)*eq.f(b)<0){
				b=c;	
			}
			else break;		
		}
		System.out.println("root = "+c);
	}
}

