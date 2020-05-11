package stringDemo;

public class TrimMethod {

	public static void main(String[] args) {
		String s1 = new String("    My name is Bepul  ");
		String s2 = "bepul hossain";
		System.out.println("s1 = "+s1);
		System.out.println("s1.trim() = "+s1.trim());
		System.out.println("s2.charAt(3) ="+s2.charAt(3));
		System.out.println("s2.codePointAt(2) ="+s2.codePointAt(2));
		System.out.println("s2.indexOf(p) = "+s2.indexOf("p"));
		System.out.println("s2.indexOf(\"ul\") = "+s2.indexOf("ul"));
		System.out.println("s2.lastIndexOf(\"s\") = "+s2.lastIndexOf("s"));

	}

}
