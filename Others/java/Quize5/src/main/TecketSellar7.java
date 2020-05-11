package main;
import java.util.Scanner;
public class TecketSellar7 {
     public static final int Total_Ticket = 100;
     public static final int MaxTicket_Per_User = 4;
     private static Scanner in;
     public static void main(String[] args) {
         in = new Scanner(System.in);
         int tickets = Total_Ticket;
         int buyers = 0;
         
         while(tickets > 0) {
             int count = in.nextInt();
             if(count < 0 || count > MaxTicket_Per_User) {
                 continue;
             }
             if(count == 0) {
                 continue;
             }
             if(tickets < count) {
                 System.out.println("There are only " + tickets + " ticket(s) left.");
                 continue;
             }
             tickets -= count;
             buyers++;
         }
         System.out.println("All tickets have been sold, to " + buyers + " buyers.");
     }
}