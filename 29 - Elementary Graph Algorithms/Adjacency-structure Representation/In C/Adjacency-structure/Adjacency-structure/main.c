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
    int directed;
} graph;

initialize_graph(graph *g, int directed)
{
    int i;                          /* counter */
    g -> nvertices = 0;
    g -> nedges = 0;
    g -> directed = directed;
    for (i=1; i<=MAXV; i++) g->degree[i] = 0;
    for (i=1; i<=MAXV; i++) g->edges[i] = NULL;
}

read_graph(graph *g, bool directed)
{
    int i;
    int m;
    int x, y;
    initialize_graph(g, directed);
    /* counter */
    /* number of edges */
    /* vertices in edge (x,y) */
    scanf("%d %d",&(g->nvertices),&m);
    for (i=1; i<=m; i++) {
        scanf("%d %d",&x,&y);
        insert_edge(g,x,y,directed);
    }
}



int main(int argc, const char * argv[])
{
    
}

