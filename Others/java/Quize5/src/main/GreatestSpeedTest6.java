package main;

import java.util.Scanner;

public class GreatestSpeedTest6 {

	public static void main(String[] args) {
		final int R = 3;
        final int T = 60;
        int[] speed = {1,10,20,40}; 
        double mass;
        double maxVelocity = 0;
        Scanner in = new Scanner(System.in);
        while(true){
            int i = 0;
            System.out.println("1.Enter mass?\n2.Enter 0 to terminate the program\n");
            mass = in.nextDouble();
            if(mass == 0) break;
            while(T>mass*speed[i]*speed[i]*R){
                maxVelocity = mass*speed[i]*speed[i]*R;
                i++;
            }
            System.out.println("Max Velocity is: " + maxVelocity);
        }
	}
}
