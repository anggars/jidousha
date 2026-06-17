import os
from PIL import Image

def make_white_transparent(img_path):
    img = Image.open(img_path)
    img = img.convert("RGBA")
    datas = img.getdata()
    
    newData = []
    # threshold for white
    for item in datas:
        # Check if the pixel is white or very close to white
        if item[0] > 230 and item[1] > 230 and item[2] > 230:
            newData.append((255, 255, 255, 0)) # transparent
        else:
            newData.append(item)
            
    img.putdata(newData)
    
    # Save as png
    base = os.path.splitext(img_path)[0]
    img.save(base + ".png", "PNG")

directory = "public/images"
for filename in os.listdir(directory):
    if filename.endswith(".jpg") or filename.endswith(".jpeg") or filename.endswith(".png"):
        img_path = os.path.join(directory, filename)
        try:
            make_white_transparent(img_path)
            # If it was a jpg, remove the old jpg
            if not filename.endswith(".png"):
                os.remove(img_path)
        except Exception as e:
            print(f"Failed to process {filename}: {e}")

print("Done processing images.")
