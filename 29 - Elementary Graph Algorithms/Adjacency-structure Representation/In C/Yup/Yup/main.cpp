//
//  main.cpp
//  Yup
//
//  Created by Shaheen Ghiassy on 4/28/13.
//  Copyright (c) 2013 Shaheen Ghiassy. All rights reserved.
//

#include <iostream>
//
//  main.c
//  Adjacency-structure
//
//  Created by Shaheen Ghiassy on 4/28/13.
//  Copyright (c) 2013 Shaheen Ghiassy. All rights reserved.
//

#include <stdio.h>


#define MAXV 1000 /* maximum number of vertices */

typedef struct {
    int y;     /* adjacency info */
    int weight; /* edge weight, if any */
    struct edgenode *next; /* next edge in list */
} edgenode;

typedef struct {
    edgenode *edges[MAXV+1]; /* adjacency info */
    int degree[MAXV+1];
    int nvertices;
    int nedges;
    bool directed;
} graph;



int main(int argc, const char * argv[])
{
    
}


int main(int argc, const char * argv[])
{

    // insert code here...
    std::cout << "Hello, World!\n";
    return 0;
}

