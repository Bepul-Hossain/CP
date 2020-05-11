package demoForBeginner;

import java.util.Scanner;

public class BisectionMethod2 {

	public static void main(String[] args) {
	      double a, b, c; 
	      double f_of_a, f_of_b; 
	      int highest_degree;
	      System.out.println("What is the highest degree of your polynomial? ");
	      Scanner input = new Scanner(System.in);
	      highest_degree = input.nextInt();
	      for (int i = highest_degree; i >= 0; i--) {
	         int coeff_deg_i;
	         coeff_deg_i = poly_input(i);
	         // System.out.println(coeff_deg_i);
	      }
	      // The following do-while loop keeps asking the user for a and b until
	      // f(a)f(b) does not become negative
	      do {
	         a = input();
	         b = input();
	         if (f(a) * f(b) >= 0) {
	            System.out
	                  .println("Sorry the two numbers are not bracketing the root.  Please try again ");
	         }
	      } while (f(a) * f(b) >= 0);
	      f_of_a = f(a);
	      f_of_b = f(b);
	      double root = bisectionMethod(f_of_a, f_of_b, a, b);
	      System.out.println("Root is : " + root);
	   }

	   public static double input() { // Reads in the bracketing number i.e a and b
	      Scanner input = new Scanner(System.in);
	      System.out.println("Enter a bracketing number");
	      return (input.nextDouble());
	   }

	   public static double f(double num) { // Calculates f(x) given x and returns
	                                        // f(x)
	      final int COEFF_DEG_3 = 1; // Coefficient of x^3
	      final int COEFF_DEG_2 = 4; // Coefficient of x^2
	      final int COEFF_DEG_0 = -10; // Coefficient of x^0
	      return (COEFF_DEG_3 * Math.pow(num, 3) + COEFF_DEG_2 * Math.pow(num, 2) + COEFF_DEG_0
	            * Math.pow(num, 0));
	   }

	   public static double bisectionMethod(double f_of_a, double f_of_b, double a,
	         double b) { // Does the actual work of evaluating
	      double c; // the root using the method of bisection.
	      double f_of_c;
	      final double TOLERANCE = 0.0001;
	      while (Math.abs(a - b) > TOLERANCE) {
	         c = (a + b) / 2;
	         f_of_c = f(c);
	         if (f_of_c * f(a) == 0 || f_of_c * f(b) == 0) {
	            return c;
	         } else if (f_of_c * f(a) > 0) {
	            a = c;
	         } else {
	            b = c;
	         }
	      }
	      return (a + b) / 2;
	   }

	   public static int poly_input(int degree) {
	      System.out.println("Please enter coefficient for degree " + degree);
	      Scanner input = new Scanner(System.in);
	      int coefficient;
	      coefficient = input.nextInt();
	      return coefficient;
	   }

}
