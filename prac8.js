1)
function same(a,b)
{
    if(a==b)
    {
        print("Same Value and Value Is " + a);
    }
    else{
            print("Not Same Value");
        }
   
 }
 same(10,10)
 
 2)
 function add(a,b)
 {
     var c = a+b;
     print("Addition Of "+a+" And "+b+" Is = "+c);
 }
 add(10,20)
     
 3)
 function factorial(num)
 {
     var i;
     var ans = 1;
     for(i=num;i>=1;i--)
     {
            ans = ans*i;
      }
      print(ans);
 }
 factorial(5)
 
 
 function fact(n)
{
 	 if (n ==1 || n==0)
           		 return 1;
 	 else
           		 return n*fact(n-1);
}

var n=fact(5); 
print("factorial : "+n)

 
 4)
 function arm(n)
 {
     var temp=n;
     var ans=0;
     var b=0;
     var a=n;
     var str = a.toString();
     while(n>0)
     {
         a=n%10;
         b=Math.pow(a,str.length);
         ans=ans+b;
         n=parseInt(n/10);
         
         }
         print(temp+" " + ans);
         if(temp==ans)
         {
             print("Arm");}
    else
    {
        print("No");}        
 }
 arm(153)
 
 
 5)
 function fib(num)
{
var a=0,b=1,c,i;
 print(a);    
 print(b);   
   for(i=2;i<num;i++)   
    {    
        c=a+b; 
        if(c<=100)
        {    
            print(c);    
            a=b;    
            b=c;
        }
    }
}
fib(15)
