package falsePositionMethod;

public class FalsePositionClass {

static final float EPSILON = (float)0.0001;
	
	static double func(double x) {
		double f= x*x*x-2*x-5;
		return f;
	}
	
	static void bisection(double a, double b) {
		if(func(a)*func(b)>=0) {
			System.out.println("We assume wrong values of a and b");
			return;
		}
		
		double c=a;
		int CON = 1000;
		while(CON>0) {
			c = (a*func(b)-b*func(a))/(func(b)-func(a));
			if(func(c) == 0.0)
				break;
			else if(func(a)*func(c) < 0)
				b=c;
			else
				a=c;
			CON--;
		}
		System.out.printf("Root : %.4f",c);
		
	}
	
	static double randomGeneratorA() {
		double a = (Math.random()*5+1);
		return -a;
	}
	
	static double randomGeneratorB() {
		return (Math.random()*5+1);
	}
	
	public static void main(String args[]) {
		double a,b;
		a = randomGeneratorA();
		b = randomGeneratorB();
		bisection(a,b);
	}

}
