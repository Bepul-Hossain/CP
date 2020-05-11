package stringDemo;

public class Split {

	public static void main(String[] args) {
		String s1 = "This  is my country";
		System.out.println(s1.replace("is", "bb"));
		String[] s2 = s1.split(" ");
		for(String x : s2) {
			System.out.println(x);
		}
	}

}
