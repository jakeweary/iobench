#include <fstream>
#include <iomanip>
#include <iostream>
#include <limits>

using namespace std;

int main() {
  if (auto file = ifstream("data.csv")) {
    auto x = 0.0;
    auto y = 0.0;
    auto z = 0.0;

    string value;
    getline(file, value);
    while (getline(file, value, ',')) {
      getline(file, value, ','); x += stod(value);
      getline(file, value, ','); y += stod(value);
      getline(file, value);      z += stod(value);
    }

    cout << setprecision(numeric_limits<double>::max_digits10);
    cout << x << ' ' << y << ' ' << z << '\n';
  }
}
