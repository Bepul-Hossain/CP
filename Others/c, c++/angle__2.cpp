#include <stdio.h>
#include <math.h>

#define RAD_2_DEG  (57.2958)
#define TOTAL_DEG  (180.0)

int main( void )
{

    int  a, b, c;   // user entered lengths of sides of triangle
    double A, B, C; // calculated angle values in degrees

    scanf( "%d %d %d", &a, &b, &c );


    // note: acos returns the angle in radians
    //       and one radian is (approx) 57.2958 degrees
    A = RAD_2_DEG *acos((b*b + c*c - a*a)/(2.0*b*c));

    B = RAD_2_DEG * acos((double)(c*c + a*a - b*b)/(2.0*a*c));

    // third angle done this way to absorb fractional degree errors
    C = TOTAL_DEG -(A + B);

    printf("%.9lf %.9lf %.9lf", A, B, C);
    return 0;
}

