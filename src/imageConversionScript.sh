# png, PNG, jpg, jpeg

for f in *.jpeg; do
  echo "Converting $f"
  ff=${f%????}  
  echo "no ext ${ff}"
  cwebp "$(pwd)/${f}" -lossless -o "${ff}.webp"
done