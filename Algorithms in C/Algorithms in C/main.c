//
//  main.c
//  Algorithms in C
//
//  Created by Shaheen Ghiassy on 1/19/13.
//  Copyright (c) 2013 Shaheen Ghiassy. All rights reserved.
//

#include <stdio.h>

int main(int argc, const char * argv[])
{

    struct node {
        char info;
        struct node *l, *r;
    };
    
    struct node *x, *z;
    
    char c;
    
    z = (struct node *) malloc (sizeof *z);
    
    z->l = z;
    z->r = z;
    
    for(stackinit(); scanf("%1s", &c) != EOF)
    {
        x = (struct node *) malloc (sizeof *x);
        x->info = c;
        x->l = z;
        x->r = z;
        if(c == '+' || c == '*') {
            x->r = pop();
            x->l = pop();
        }
        
        push(x);
    }
}

