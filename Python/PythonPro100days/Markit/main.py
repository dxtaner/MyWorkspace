from PIL import Image, ImageDraw, ImageFont
from tkinter import filedialog, Tk
import os

WATERMARK_TEXT = "© Markit"
FONT_SIZE = 36
MARGIN = 20
OPACITY = 120

BASE_DIR = os.path.dirname(os.path.abspath(__file__))
OUTPUT_DIR = os.path.join(BASE_DIR, "output")
os.makedirs(OUTPUT_DIR, exist_ok=True)


def select_image():
    root = Tk()
    root.withdraw()
    return filedialog.askopenfilename(
        title="Resim Seç",
        filetypes=[("Image Files", "*.jpg *.jpeg *.png")]
    )


def load_font(size):
    try:
        return ImageFont.truetype("arial.ttf", size)
    except:
        return ImageFont.load_default()


def add_watermark(image_path, text):
    image = Image.open(image_path).convert("RGBA")
    watermark_layer = Image.new("RGBA", image.size, (255, 255, 255, 0))

    draw = ImageDraw.Draw(watermark_layer)
    font = load_font(FONT_SIZE)

    text_width, text_height = draw.textsize(text, font)
    x = image.width - text_width - MARGIN
    y = image.height - text_height - MARGIN

    draw.text((x, y), text, fill=(255, 255, 255, OPACITY), font=font)

    combined = Image.alpha_composite(image, watermark_layer)
    return combined.convert("RGB")


def save_image(image, original_path):
    filename = os.path.basename(original_path)
    output_path = os.path.join(OUTPUT_DIR, f"watermarked_{filename}")
    image.save(output_path)
    return output_path


def main():
    image_path = select_image()

    if not image_path:
        print("❌ Resim seçilmedi.")
        return

    result = add_watermark(image_path, WATERMARK_TEXT)
    saved_path = save_image(result, image_path)

    print("✅ Watermark başarıyla eklendi:")
    print(saved_path)


if __name__ == "__main__":
    main()
