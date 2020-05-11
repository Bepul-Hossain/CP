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
    fprintf(fp,"Day   Quantity   Price_Per_Piece  \t Tax_Per_Piece \t Total_Tax\n");
    for(i=1;i<n+1;i++){
        printf("Enter quantity:");
        scanf("%d",&custom[i].quantity);
        printf("\nEnter price per piece:");
        scanf("%d",&custom[i].price_per_piece);

        if(custom[i].price_per_piece>50000){
            custom[i].tax_per_piece=0.6*custom[i].price_per_piece;
        }
        if(custom[i].price_per_piece>20000 && custom[i].price_per_piece<50000){
            custom[i].tax_per_piece=0.5*custom[i].price_per_piece;
        }
        if(custom[i].price_per_piece>10000 && custom[i].price_per_piece<20000){
            custom[i].tax_per_piece=0.4*custom[i].price_per_piece;
        }
        if(custom[i].price_per_piece>5000 && custom[i].price_per_piece<10000){
            custom[i].tax_per_piece=0.3*custom[i].price_per_piece;
        }
        if(custom[i].price_per_piece<5000){
            custom[i].tax_per_piece=0.2*custom[i].price_per_piece;
        }
        custom[i].total_tax = custom[i].tax_per_piece*custom[i].quantity;

        fprintf(fp,"%.2d   \t %.3d  \t\t %.5d  \t %.2lf  \t\t %.2lf\n",i,custom[i].quantity,custom[i].price_per_piece,custom[i].tax_per_piece,custom[i].total_tax);
    }
    fclose(fp);

}
