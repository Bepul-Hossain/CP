function getGrade(score) {
   
    // Write your code here
    if(0<=score && score<=5) return 'F'
    if(6<=score && score<=10) return 'E'
    if(11<=score && score<=15) return 'D'
    if(16<=score && score<=20) return 'C'
    if(21<=score && score<=25) return 'B'
    if(26<=score && score<=30) return 'A'
 
}