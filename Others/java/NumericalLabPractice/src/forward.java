import java.util.Scanner;

public class forward {
public static void main(String[] args) {
		
		System.out.println("Enter number of data:");
		Scanner in= new Scanner(System.in);
		int n=in.nextInt();
		double[] x= new double[n];
		double[][] y= new double[n][n];
		System.out.println("Enter your data:");
		for(int i=0;i<n;i++) {
			x[i]=in.nextDouble();
			y[i][0]=in.nextDouble();
		}
		
		//Calculating forward difference table
		for (int i = 1; i < n; i++) {
			for (int j = 0; j < n - i; j++)
				y[j][i] = y[j + 1][i - 1] - y[j][i - 1];
		}
		//Scanning value of x for which need to calculate y
		System.out.println("Enter Value :");
		double value = in.nextDouble();
		//calculating value
		double sum = y[0][0];
		double u = (value - x[0]) / (x[1] - x[0]);
		for (int i = 1; i5 < n; i++) {
			sum = sum + (u_cal(u, i) * y[0][i]) /
									fact(i);
		}
		System.out.println("Value at "+value + " is"+sum);
		
		
		
	}
	
	
	static double u_cal(double u, int n){
		double temp = u;
		for (int i = 1; i < n; i++)
			temp = temp * (u - i);
		return temp;
	}
	static int fact(int n){
		int f = 1;
		for (int i = 2; i <= n; i++)
			f *= i;
		return f;
	}

}
