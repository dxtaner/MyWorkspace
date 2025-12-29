from tkinter import *
from tkinter import filedialog, ttk
import numpy as np
from PIL import Image
import webcolors
import math

# ---------------- CONFIG ----------------
NUMBER_OF_COLORS = 15

BG_COLOR = "#1e1e2e"
CARD_COLOR = "#2a2a3c"
BTN_COLOR = "#3a3a5c"
TEXT_COLOR = "#f8f8f2"
ACCENT_COLOR = "#89b4fa"

FONT_TITLE = ("Arial", 28, "bold")
FONT_BTN = ("Segoe UI", 14)
FONT_TEXT = ("Consolas", 12)
# ---------------------------------------


def get_img_colors():
    file_path = filedialog.askopenfilename(
        title="Select Image",
        filetypes=(("Image Files", "*.jpg *.jpeg *.png"),)
    )
    if not file_path:
        return

    clear_colors()

    img = Image.open(file_path).convert("RGB")
    colors = extract_palette(img)

    used_names = []

    for rgb in colors:
        name = convert_rgb_to_name(rgb)
        if name not in used_names and len(used_names) < NUMBER_OF_COLORS:
            used_names.append(name)
            add_color_row(name, rgb)


def extract_palette(img):
    arr = np.asarray(img)
    palette, index = np.unique(asvoid(arr).ravel(), return_inverse=True)
    palette = palette.view(arr.dtype).reshape(-1, arr.shape[-1])
    counts = np.bincount(index)
    order = np.argsort(counts)[::-1]
    return palette[order]


def asvoid(arr):
    arr = np.ascontiguousarray(arr)
    return arr.view(np.dtype((np.void, arr.dtype.itemsize * arr.shape[-1])))


def convert_rgb_to_name(rgb):
    min_distance = float("inf")
    closest_name = ""

    for name in webcolors.names("css3"):
        r, g, b = webcolors.name_to_rgb(name)
        distance = math.sqrt(
            (r - rgb[0]) ** 2 +
            (g - rgb[1]) ** 2 +
            (b - rgb[2]) ** 2
        )

        if distance < min_distance:
            min_distance = distance
            closest_name = name

    return closest_name.title()


def add_color_row(name, rgb):
    hex_color = '#%02x%02x%02x' % tuple(rgb)

    row = Frame(color_frame, bg=CARD_COLOR, pady=5)
    row.pack(fill=X, padx=8, pady=4)

    swatch = Canvas(row, width=30, height=30,
                    bg=hex_color, highlightthickness=0)
    swatch.pack(side=LEFT, padx=6)

    label = Label(
        row,
        text=f"{name}   |   RGB{tuple(rgb)}   |   {hex_color}",
        font=FONT_TEXT,
        fg=TEXT_COLOR,
        bg=CARD_COLOR
    )
    label.pack(side=LEFT, padx=10)


def copy_to_clipboard():
    root.clipboard_clear()
    text = ""
    for child in color_frame.winfo_children():
        label = child.winfo_children()[1]
        text += label.cget("text") + "\n"
    root.clipboard_append(text)


def clear_colors():
    for widget in color_frame.winfo_children():
        widget.destroy()


# ---------------- UI ----------------
root = Tk()
root.title("Image to Color List")
root.config(bg=BG_COLOR, padx=20, pady=20)

Label(
    root,
    text="🎨 Image to Color List",
    font=FONT_TITLE,
    fg=ACCENT_COLOR,
    bg=BG_COLOR
).pack(pady=10)

container = Frame(root, bg=BG_COLOR)
container.pack()

canvas = Canvas(container, bg=BG_COLOR,
                highlightthickness=0, width=520, height=400)
scrollbar = ttk.Scrollbar(container, orient=VERTICAL,
                          command=canvas.yview)
scrollable_frame = Frame(canvas, bg=BG_COLOR)

scrollable_frame.bind(
    "<Configure>",
    lambda e: canvas.configure(scrollregion=canvas.bbox("all"))
)

canvas.create_window((0, 0), window=scrollable_frame, anchor="nw")
canvas.configure(yscrollcommand=scrollbar.set)

canvas.pack(side=LEFT)
scrollbar.pack(side=RIGHT, fill=Y)

color_frame = scrollable_frame

btn_frame = Frame(root, bg=BG_COLOR)
btn_frame.pack(pady=15)

Button(
    btn_frame, text="Select Image",
    font=FONT_BTN, bg=BTN_COLOR, fg=TEXT_COLOR,
    width=15, command=get_img_colors
).grid(row=0, column=0, padx=6)

Button(
    btn_frame, text="Copy",
    font=FONT_BTN, bg=BTN_COLOR, fg=TEXT_COLOR,
    width=15, command=copy_to_clipboard
).grid(row=0, column=1, padx=6)

Button(
    btn_frame, text="Clear",
    font=FONT_BTN, bg=BTN_COLOR, fg=TEXT_COLOR,
    width=15, command=clear_colors
).grid(row=0, column=2, padx=6)

root.mainloop()
