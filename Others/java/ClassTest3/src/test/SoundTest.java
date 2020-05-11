package test;

import static org.junit.jupiter.api.Assertions.assertEquals;

import org.junit.jupiter.api.Test;

import main.Sound;

public class SoundTest {
	private final double TIME = 7.2;
	private final double VELOCITY = 1100;
	Sound sound = new Sound();
	
	@Test
	void test() {
		
		assertEquals(7920.0,sound.calculateDistance(TIME, VELOCITY),"");
	}
}
