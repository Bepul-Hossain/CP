package demoForBeginner;

import java.util.ArrayList;

public class ForEachLoop {

	public static void main(String[] args) {
		ArrayList <Integer> number = new ArrayList<>();
		number.add(60);// by default 60 adding with  index
		number.add(50);// by default 50 adding with 1 index
		number.add(2,30);// initialize 30 adding with 2 index
		number.add(3,100);// initialize 100 adding with 3 index
		
		for(int x : number) {
			System.out.print(x+" ");
		}
		System.out.println();
		System.out.println("size = "+number.size());

	}

}
