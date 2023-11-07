#include <iostream>

int main() {
    std::cout << "Even numbers between 1 and 50:" << std::endl;

    for (int i = 2; i <= 50; i += 2) {
        std::cout << i << " ";
    }

    std::cout << std::endl;

    return 0;
}
