#!/usr/bin/env bash

in_filename='og.jpg'
out_basename='bar'

formats=('avif' 'webp' 'jpg')
sizes=(320 500 640 750 1080 1600 1920 2560 1920 2048 3840)
quality=90 # Use 55 for HEIF

for format in "${formats[@]}"; do
	for size in "${sizes[@]}"; do
		magick "$in_filename" -resize "$size"x"$size" -quality "$quality" -define webp:lossless=false -define webp:image-hint=photo "$out_basename"-"$size"w."$format"
	done
done
