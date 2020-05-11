package basic;

import java.util.ArrayList;
import java.util.Iterator;



public class ArrayListDemo {

	public static void main(String[] args) {
		ArrayList<Integer> number = new ArrayList<>();
		System.out.println("initial size = "+number.size());
		number.add(5);
		number.add(7);
		number.add(2,8);
		System.out.print("number = "+number+" ");
		System.out.print("\nafter size = "+number.size()+"\nprint number using for Enhance loop ");
		
		for(int x : number) {
			System.out.print(x+" ");
		}	
		number.remove(1);
		System.out.println("\n"+number+" ");
		number.clear();
		System.out.println(number);
	}
}
