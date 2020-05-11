package stringDemo;

public class StringConcat {

	public static void main(String[] args) {
		String s1 = new String("Md Bepul ");
		String s2 = new String("hossain");
		System.out.println("s1+s2 = "+s1+s2);
		System.out.println("s1.concat(s2) = "+s1.concat(s2));
		System.out.println("s1.toUpperCase() = "+s1.toUpperCase());
		System.out.println("s1.startsWith(\"M\") = "+s1.startsWith("M"));
		System.out.println("s1.endWith(\" \") = "+s1.endsWith(" "));
		System.out.println("s1.endWith(\"l\") = "+s1.endsWith("l"));
		System.out.println("s2.endWith(\"ain\") = "+s2.endsWith("ain"));

		String[] names= {"bepul hossain","shohan","Arup sarkar"};
		for(String x : names) {
			System.out.println(x);
		}
	}
}
