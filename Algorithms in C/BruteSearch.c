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
	int patternLength = strlen(pattern);
	int stringLength = strlen(string);
	
	for(i = 0, j = 0; j < patternLength && i < stringLength; i++, j++) {
		while(string[i] != pattern[j]) {
			i -= j - 1;
			j = 0;
		}
	}
    
	if(j == patternLength) {
		return i - patternLength;
	} else {
		return i;
	}
}

int main(int argc, char *argv[]) {
	char pattern[] = "STING";
	char string[] = "A STRING SEARCHING EXAMPLE CONSISTING OF";
	printf("%i", brutesearch(pattern, string));
}
