package constantDeclaration;

import java.util.Scanner;

public class CashRegisterTester
{
public static void main(String[] args)
{
	String s = "Hello";
	String t = "World";
	System.out.println( s+t );

	System.out.println( s.length() / 2 );

	System.out.println(s.substring(s.length() / 2, s.length()));
	
	Scanner in= new Scanner(System.in);
	String name1=in.nextLine();
	String name2=in.nextLine();
	

	
	
	String f1=name1.substring(0,1), f2=name2.substring(0, 1);
	
	System.out.println( f1+f2 );

	System.out.println(name1.charAt(0));
	System.out.println(name1.charAt(4));

	System.out.println("He said \" \\Hello\\\"");
	
	CashRegister register = new CashRegister();
	
	register.recordPurchase(0.75);
	register.recordPurchase(1.50);
	register.receivePayment(2, 0, 5, 0, 0);
	System.out.print("Change: ");
	System.out.println(register.giveChange());
	System.out.println("Expected: 0.25");
	
	register.recordPurchase(2.25);
	register.recordPurchase(19.25);
	register.receivePayment(23, 2, 0, 0, 0);
	 System.out.print("Change: ");
	 System.out.println(register.giveChange());
	 System.out.println("Expected: 2.0");
	 }
 }
