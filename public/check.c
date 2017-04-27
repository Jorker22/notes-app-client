#include<stdio.h>
#include<stdlib.h>
#include<string.h>


int check_Name(char first[][32],char last[][32], char searchname_1,char searchname_2,int count)
{
  int found = -1;  /* return value */
  int i;
  for (i=0; (i < count) && (found < 0); i++)
    {
    if ((strcasecmp(searchname_1,first[i]) == 0|| strcasecmp(searchname_1,last[i])== 0) && (strcasecmp(searchname_2,first[i]) == 0 || strcasecmp(searchname_2,last[i]) == 0))
        found = i;
    }
  return found;
}

char check_Relation(int count)
{
	int i = 0;
	int j;
	int flag=0;
	do
	{
	for(i=0;i<count;i++)
	    {

		for(j=i+1;j<count;j++)
		    { 

		    if(strcmp(last[i],first[j])==0)
			    {
               
				if(((last[i] -> father == first[i] && (last[j] -> father == first[j] || last[j] -> mother == first[j] || last[j] -> aunt == first[j] || last[j] -> uncle == first[j]))
					                                       ||
                   (last[i] -> grandfather == first[i] && (last[j] -> brother == first[j] || last[j] -> sister == first[j]))
				                                           ||
                   (last[i] -> husband == first[i] && (last[j] -> grandmother == first[j])))
				   {
				   printf(" %s is an Grandfather of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }
				
				if(((last[i] -> mother == first[i] && (last[j] -> father == first[j] || last [j] -> mother == first[j] || last[j] -> aunt == first[j] || last[j] -> uncle == first[j]))
					                                       ||
				   (last[i] -> grandmother == first[i] && (last[j] -> brother == first[j] || last[j] -> sister == first[j]))
				                                           ||
                   (last[i] -> wife == first[i] && (last[j] -> grandfather == first[j])))
				   {
				   printf(" %s is Grandmother of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }
                
				if(((last[i] -> father == first[i] && (last[j] -> brother == first[j] || last[j] -> sister == first[j]))
					                                       ||
			       (last[i] -> son == first[i] && (last[j] -> grandmother == first[j] || last[j] -> grandfather == first[j]))
				                                           ||
			       (last[i] -> husband == first[i] && (last[j] -> mother == first[j]))
				                                           ||
			       (last[i] -> grandfather == first[i] &&(last[j] -> son == first[j] || last[j] -> daughter == first[j])))
				   {
				   printf(" %s is Father of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }

				if(((last[i] -> mother == first[i] && (last[j] -> brother == first[j] || last[j] -> sister == first[j]))
					                                       ||
				   (last[i] -> daughter == first[i] && (last[j] -> grandmother == first[j] || last[j] -> grandfather == first[j]))
				                                           ||
				   (last[i] -> wife == first[i] && (last[j] -> father == first[j]))
				                                           ||
				   (last[i] -> grandmother == first[i] &&(last[j] -> son == first[j] || last[j] -> daughter == first[j])))
				   {
				   printf(" %s is an Mother of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }

				if(((last[i] -> brother == first[i] && (last[j] -> brother == first[j] || last[j] -> sister == first[j]))
					                                       ||
				   (last[i] -> uncle == first[i] && (last[j] -> son == first[j] || last[j] -> daughter == first[j])))
				   {
				   printf(" %s is Brother of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }
				
				if(((last[i] -> sister == first[i] && (last[j] -> brother == first[j] || last[j] -> sister == first[j]))
					                                       ||
				   (last[i] -> aunt == first[i] && (last[j] -> son == first[j] || last[j] -> daughter == first[j])))
				   {
				   printf(" %s is Sister of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }
				
				if(((last[i] -> husband == first[i] && (last[j] -> aunt == first[j]))
					                              ||
				   (last[i] -> uncle == first[i] && (last[j] -> brother == first[j] || last[j] -> sister == first[j]))
				                                  ||
				   (last[i] -> brother ==first[i] && (last[j] -> father == first[j] || last[j] -> mother == first[j] || last[j] -> aunt == first[j] || last[j] -> uncle == first[j]))
				   {
				   printf(" %s is an Uncle of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }
				
				if(((last[i] -> wife == first[i] && (last[j] -> uncle == first[j]))
					                              ||
	               (last[i] -> aunt == first[i] && (last[j] -> brother == first[j] || last[j] -> sister == first[j]))
				                                  ||
				   (last[i] -> sister == first[i] && && (last[j] -> father == first[j] || last[j] -> mother == first[j] || last[j] -> aunt == first[j] || last[j] -> uncle == first[j]))
				   {
				   printf(" %s is an Aunt of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }

				if(((last[i] -> son == first[i] && (last[j] -> wife == first[j] || last[j] -> husband == first[j]))
					                             ||
				   (last[i] -> brother == first[i] && (last[j] ->  son == first[j] || last[j] -> daughter == first[j]))
				   {
				   printf(" %s is Son of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }

				if(((last[i] -> daughter == first[i] && (last[j] -> wife == first[j] || last[j] -> husband == first[j]))
					                             ||
				   (last[i] -> sister == first[i] && (last[j] ->  son == first[j] || last[j] -> daughter == first[j]))
				   {
				   printf(" %s is daughter of %s \n",first[i],last[j]);
				   flag=1;
				   break;
				   }
				else
				   {
				   printf(" There is no relation between %s and %s\n", first[i],last[j]);
				   flag=1;
				   break;
				   }
			    }
			}
		}
	}while(flag!=1);
}

				                                  
                

       
				


				