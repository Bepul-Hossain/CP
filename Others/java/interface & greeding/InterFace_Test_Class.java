package main;

public class InterFace_Test_Class {

	public static void main(String[] args) {
		//Interface h = new Interface;
		
	    NumericalTestRun isEven = (n) -> (n%2) == 0;
	    
//		NumericalTestRun isNegative = (n) -> (n%2) == 0;
		System.out.println(isEven.computTest(5));
		My_Gredding hw = (name) -> "hello "+name;
		//System.out.println(hw);
		String h = hw.sayHello("world");
		System.out.println(h);
		My_Gredding hw1 = (name) -> "How "+name;
		String h1 = hw1.sayHello("  are you.");
		System.out.println(h1);
		 
//
	}

}
