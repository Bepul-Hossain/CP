package demoForBeginner;

import java.util.ArrayList;


public class Iterator{

	public static void main(String[] args) {
		ArrayList <Integer> number = new ArrayList<>();
		number.add(60);// by default 60 adding with  index
		number.add(50);// by default 50 adding with 1 index
		number.add(2,30);// initialize 30 adding with 2 index
		number.add(3,100);// initialize 100 adding with 3 index
		
		java.util.Iterator<Integer> itr = number.iterator();
		while(itr.hasNext()) {
			System.out.print(itr.next()+" ");
			
		}
		System.out.println();
		System.out.print("size = "+number.size());
		number.remove(3);
		System.out.println();
		System.out.print("size = "+number.size());
		number.removeAll(number);
		System.out.println();
		System.out.println("size = "+number.size());
		
		
		number.add(60);// by default 60 adding with  index
		number.add(50);// by default 50 adding with 1 index
		number.add(2,30);// initialize 30 adding with 2 index
		number.add(3,100);// initialize 100 adding with 3 index
		
		boolean check = number.contains(50);
		System.out.println("check = "+check);
		System.out.println("Index is = "+number.indexOf(50));
		boolean check2 = number.isEmpty();
		System.out.println("check2 = "+check2);
		number.clear();
		boolean check3 = number.isEmpty();
		System.out.println("check2 = "+check3);
		
		number.add(60);// by default 60 adding with  index
		number.add(50);// by default 50 adding with 1 index
		number.add(2,30);// initialize 30 adding with 2 index
		number.add(3,100);// initialize 100 adding with 3 index
		
	}

}
