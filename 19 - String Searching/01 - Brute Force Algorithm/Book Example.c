//
//  BruteSearch.c
//  Algorithms in C
//
//  Created by Shaheen Ghiassy on 3/10/13.
//  Copyright (c) 2013 Shaheen Ghiassy. All rights reserved.
//

#include <stdio.h>
#include <string.h>

//This function returns back the beginning index number of where the pattern was found.
int brutesearch(char *pattern, char *string) {
	
	int i, j;
	unsigned long patternLength = strlen(pattern);
	unsigned long stringLength = strlen(string);
	
	for(i = 0, j = 0; j < patternLength && i < stringLength; i++, j++) {
		printf("i: %i\n", i);
		printf("j: %i\n", j);
		while(string[i] != pattern[j]) {
			i -= j - 1;
			j = 0;
			printf("no pattern match, skipping: %i\n", i);
		}
	}
    
	if(j == patternLength) {
		return i - (int) patternLength;
	} else {
		return i;
	}
}

int main(int argc, char *argv[]) {
	char pattern[] = "STING";
	char string[] = "A STINNG SEARCHING EXAMPLE CONSISTING OF";
	printf("Pattern Found at: %i", brutesearch(pattern, string));
}
