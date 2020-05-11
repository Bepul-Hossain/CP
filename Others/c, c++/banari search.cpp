#include<bits/stdc++.h>
using namespace std;
int f( int arr[] ,int x , int c  , int n)
{
    int i  ,  p = 1  , l = arr[0];
    for( i = 1 ; i < n ; i++)
    {
        if( (arr[i] - l) >= x)
        {
            p++;
            if( p == c )
            {
                return 1;
            }
            l = arr[i] ;
        }
    }
    return 0;
}
int cmp( const void *a , const void *b )
{
    return ( *(int*)a - *(int*)b);
}
int main()
{
    int arr[100010] ,  n , c;
    int t  , start , mid , end , i;
    scanf("%d" , &t);
    while(t--)
    {
        scanf("%d %d" , &n , &c);
        for( i = 0 ; i < n ; i++)
            scanf("%d" , &arr[i] );
        qsort( arr , n  , sizeof(int) , cmp);
        start = 0 ;
        end = arr[n-1] - arr[0] + 1 ;
        while( end - start > 1)
        {
            mid = ( end + start ) / 2;
            if(  f( arr , mid , c , n ))  start = mid;
            else end = mid;
        }
        printf("%d\n" , start );
    }
    return 0;
}

