package basic;

import java.util.Arrays;

public class ArraysSortingMethod {

	public static void main(String[] args) {
		
		int [] arraySizeDeclare=new int[20];
			arraySizeDeclare[5]=40;
			System.out.println("value of index 5 = "+arraySizeDeclare[5]);
			
		int[] number = {0,-55, 56, 45,45};
		Arrays.sort(number);
		for(int i=0; i<number.length; i++) {
			System.out.print(number[i]+"  ");
		}
		System.out.printf("\n");
		String[] names= {"rakib", "shohan", "Arup","arup","bepul","Bepul"};
		Arrays.sort(names);
		for(int i=0; i<names.length; i++) {
			System.out.print(names[i]+"  ");
		}
	}

}
