package lagrange;

import java.util.Scanner;

public class Lagrange {
	public static void main(String[] args) {
		Scanner scan = new Scanner(System.in);
		int n; //Number of terms
        int count, count2; 
        float [] arrayx = new float[200]; 
        float [] arrayy = new float[200];
        float x = 0;
        float y = 0; //The corresponding value, f(x)=y
        float numerator; 
        float denominator;  
        
        System.out.println("Enter the number of terms n: ");
        n = scan.nextInt(); 
        
        System.out.println("Enter the values that are in xi and yi.");
            
            for(count = 0; count<n; count++) {
                System.out.print("Enter the value for x" + count + ": ");
                arrayx[count] = scan.nextFloat();
                System.out.print("Enter the value for y" + count + ": ");
                arrayy[count] = scan.nextFloat();
            }
          //value x to get the corresponding value of y
            System.out.print("Enter the arbitrary value x for which you want the value y: ");
            x = scan.nextFloat();  
        
            //Calculation
            for(count = 0; count<n; count++){
                 //Initialization of variable
                numerator = 1; denominator = 1;
                 
                //second Loop for the polynomial calculation
                for(count2 = 0; count2<n; count2++) {
                    if (count2 != count)
                    {
                      numerator = numerator * (x - arrayx[count2]);
                      denominator = denominator * (arrayx[count] - arrayx[count2]);
                    } 
                }
                y = y + (numerator/denominator) * arrayy[count];
            }
            System.out.println("When x = " + x + "," + " y = " +  y);
	}

}
