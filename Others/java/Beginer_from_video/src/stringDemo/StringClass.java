package stringDemo;

public class StringClass {

	public static void main(String[] args) {
		String s3 = "Md Bepul hossain";
		String s1 = "Md Bepul hossain";
		String s2 = new String("Md Bepul hossain");
		
		System.out.println("s1 = "+s1);
		System.out.println("s1.isEmpty() = "+s1.isEmpty());
		System.out.println("s1 length = "+s1.length());
		System.out.println("s1==s2 = "+(s1==s2));
		System.out.println("s1==s3 = "+(s1 ==s3));
		System.out.println("s1.equals(s2) = "+(s1.equals(s2)));
		System.out.println("s1.contains(s2) = "+(s1.contains(s2)));
		System.out.println("s1.contains(Bepul) = "+ (s1.contains("Bepul")));
		System.out.println("s1.contains(bepul) = "+ (s1.contains("bepul") ? true : false));
		System.out.println("s1.equalsignoreCase(md bepul hossain) = "
					   + (s1.equalsIgnoreCase("md bepul hossain") ? "1/true" : "0/false"));
	}
}
