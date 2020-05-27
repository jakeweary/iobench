use std::fs;
use std::io::{self, BufRead};

fn main() {
  let file = fs::File::open("data.csv").unwrap();

  let mut x = 0.0;
  let mut y = 0.0;
  let mut z = 0.0;

  for line in io::BufReader::new(file).lines().skip(1) {
    let line = line.unwrap();
    let mut values = line.split(',').skip(1)
      .map(|v| v.parse::<f64>().unwrap());

    x += values.next().unwrap();
    y += values.next().unwrap();
    z += values.next().unwrap();
  }

  println!("{} {} {}", x, y, z);
}
