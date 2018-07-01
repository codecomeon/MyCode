#include <stdio.h>
int g_var = 0;
void print_line(char *str)
{
    if (str != NULL)
        printf("%s\r\n", str);
    else
        printf("null string\r\n");
}
int main(int argc, char **argv)
{
    int l_var = 1;
    print_line("hello world!");
    printf("g_var = %d, l_var = %d.\r\n", g_var, l_var);
    return 0;
}