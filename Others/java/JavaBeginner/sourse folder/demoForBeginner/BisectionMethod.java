package demoForBeginner;

public class BisectionMethod {

	public static void main(String[] args) {
		double a=-100, b=100, c, equationa, equationb, equationc;
		c=(a+b)/2;
		equationa= (a*a*a)-a-1;
		equationb= (b*b*b)-b-1;
		equationc= (c*c*c)-c-1;
		if(equationa < 0 && equationc < 0 ) {
			a=c;
			c=(a+b)/2;
		}
		else if(equationa < 0 && equationc > 0 ) {
			b=c;
			c=(a+b)/2;
		}
		else if(equationa > 0 && equationc < 0 ) {
			b=c;
			c=(a+b)/2;
		}
		else if(equationa > 0 && equationc > 0 ) {
			b=c;
			c=(a+b)/2;
		}

	}

}
