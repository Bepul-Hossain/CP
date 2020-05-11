package secant;

public class SecantMethod { 
   
 static float f(double x) { 
       
     float f = (float) (x*x*x-2*x-5);
                              
     return f; 
 } 
   
 static void secant(double x1, double x2, 
                             double E) { 
       
     float n = 0, xm, x0, c; 
     if (f(x1) * f(x2) < 0)  
     { 
         do {  
             x0 = (float) ((x1 * f(x2) - x2 * f(x1)) 
                         / (f(x2) - f(x1))); 
       
             c = f(x1) * f(x0); 
        
             x1 = x2; 
             x2 = x0;  
             n++; 
             //System.out.println("x2 : "+x1);
             //System.out.println("x0 : "+x2);
             //System.out.println("x1 : "+x0);
        
             if (c == 0) 
                 break; 
             xm = (float) ((x1 * f(x2) - x2 * f(x1))  
                         / (f(x2) - f(x1))); 
                           
         } while (Math.abs(xm - x0) >= E);  
                                               
         System.out.println("Root of the" + 
                 " given equation=" + x0); 
                   
         System.out.println("No. of "
                   + "iterations = " + n); 
     }  
       
     else
         System.out.print("Can not find a"
           + " root in the given inteval"); 
 } 
 
 static double randomGeneratorA() {
		double a = (Math.random()*5+1);
		return -a;
	}
	
	static double randomGeneratorB() {
		return (Math.random()*5+1);
	}
   
 public static void main(String[] args) { 
        
     double x1 , x2, E = 0.0001f; 
     x1 = randomGeneratorA();
     x2 = randomGeneratorB();
     secant(x1, x2, E); 
 } 
} 