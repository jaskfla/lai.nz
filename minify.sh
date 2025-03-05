#!/usr/bin/env bash
set -e

for file_name in _site/scripts/*.js; do
	terser --compress --comments=false --ecma=2024 --output "$file_name" -- "$file_name"
done
