package newtonRaphson;

public class NewtonRaphsonMethod {

  public static double f (double x){

      return (3*x-(Math.pow(Math.E, x))+Math.sin(x));
  }
public static double g (double x){

      return (3-(Math.pow(Math.E, x))+Math.cos(x));
  }
    public static double NewtonRaphsonMethod(){
        int iterations_number=0;
        boolean cont = true;
        double x0 , x1, Error=5000;
        	x0 =2;
        	x1=0;

      while (cont){
	      x1 = x0 - (f(x0)/g(x0));
	      Error = (Math.abs(x1-x0)/x1)*100;
	      iterations_number++;
	      if (f(x1)<=0.05){
		      cont = false;
		      System.out.println("The Program did it in "+iterations_number+" Step(s)");
		      System.out.println("The root is: "+ x1);
		      System.out.println("The Error is: "+(Math.abs(x1-x0)/x1)*100+"%");
	      }
      }

      return x1;
  }
    public static void main(String[] args) {
    		NewtonRaphsonMethod();
    }
}



