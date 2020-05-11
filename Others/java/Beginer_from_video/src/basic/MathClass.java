package basic;

public class MathClass {

	public static void main(String[] args) {
		int a = 10;
		double b = -13.6;
		System.out.println("Absolute b = "+Math.abs(b));
		System.out.println("Minumum = "+Math.min(a, b));
		System.out.println("Round = "+Math.round(b));
		System.out.println("pi = "+Math.PI);
		double pi = Math.PI;
		System.out.printf("pi = %.3f\n",pi);
		
		int i=5;
		do {
			System.out.println("bepul");
			i++;
			
		}while(i<3);

	}

}
