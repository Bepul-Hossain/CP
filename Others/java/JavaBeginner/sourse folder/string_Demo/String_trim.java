package string_Demo;

public class String_trim {

	public static void main(String[] args) {
		String country = "   My  country        is bangladesh    ";
		System.out.println(country);
		String s = country.trim();
		System.out.println(s);
		
		char ch = country.charAt(3);
		System.out.println("ch = "+ch);
		
		int index = s.indexOf('n');
		System.out.println(index);
		int index2 = country.indexOf('n');
		System.out.println(index2);
		
		
		
		String rep = country.replace('y', 'z');
		System.out.println("rep = "+rep);
		
		String[] slpite = country.split(" ");
		for(String  x: slpite) {
			System.out.println(x);
		}
	}

}
