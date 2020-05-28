time := time -f "%E real, %U user, %S sys, %P cpu, %Mk mem"

run: cpp/main rust/main go/main data.csv
	@echo '- C++'
	@$(time) ./cpp/main
	@echo '- Rust'
	@$(time) ./rust/main
	@echo '- Go'
	@$(time) ./go/main
	@echo '- Python3'
	@$(time) python3 python3/main.py
	@echo '- Node.js'
	@$(time) node nodejs/main.js
	@echo '- Deno'
	@$(time) deno run -A deno/main.js

cpp/%: cpp/%.cpp
	g++ -O3 -o $@ $<

rust/%: rust/%.rs
	rustc -C opt-level=3 -o $@ $<

go/%: go/%.go
	go build -o $@ $<

%.csv: %.py
	python3 $<
