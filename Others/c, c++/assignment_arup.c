#include<stdio.h>
#include<string.h>

int month(void){
    int n,c;
    printf("Select month from below:\n");
    printf("\t\t 1.January\n");
    printf("\t\t 2.February\n");
    printf("\t\t 3.March\n");
    printf("\t\t 4.April\n");
    printf("\t\t 5.May\n");
    printf("\t\t 6.June\n");
    printf("\t\t 7.July\n");
    printf("\t\t 8.August\n");
    printf("\t\t 9.September\n");
    printf("\t\t10.October\n");
    printf("\t\t11.November\n");
    printf("\t\t12.December\n");
    printf("Enter equivalent neumerical digit of month:");
    scanf("%d",&n);
    switch(n){
    case 1: c=31;
            break;
    case 2: c= 28;
            break;
    case 3: c= 31;
            break;
    case 4: c= 30;
            break;
    case 5: c= 31;
            break;
    case 6: c= 30;
            break;
    case 7: c= 31;
            break;
    case 8: c= 31;
            break;
    case 9: c= 30;
            break;
    case 10: c= 31;
            break;
    case 11: c= 30;
            break;
    case 12: c= 31;
            break;
    }
    return c;
}
double tax_count(int x){
    double y;
    if(x>50000){
            y=0.6*x;
        }
        if(x>20000 && x<50000){
            y=0.5*x;
        }
        if(x>10000 && x<20000){
            y=0.4*x;
        }
        if(x>5000 && x<10000){
            y=0.3*x;
        }
        if(x<5000){
            y=0.2*x;
        }
        return y;
}

struct customs{
    int quantity;
    int price_per_piece;
    double tax_per_piece;
    double total_tax;
};
int main(){

    int i,n;
    n=month();
    struct customs custom[n+1];
    FILE *fp;
    fp=fopen("tax.text","w");
    fprintf(fp,"Day   Quantity   Price_Per_Piece    Tax_Per_Piece\tTotal_Tax\n");
    for(i=1;i<n+1;i++){
        printf("Enter quantity:");
        scanf("%d",&custom[i].quantity);
        printf("Enter price per piece:");
        scanf("%d",&custom[i].price_per_piece);

        custom[i].tax_per_piece = tax_count(custom[i].price_per_piece);
        custom[i].total_tax = custom[i].tax_per_piece*custom[i].quantity;

        fprintf(fp,"%.2d   \t %.3d  \t\t %.5d  \t %.2lf  \t\t %.2lf\n",i,custom[i].quantity,custom[i].price_per_piece,custom[i].tax_per_piece,custom[i].total_tax);
    }
    fclose(fp);

}
