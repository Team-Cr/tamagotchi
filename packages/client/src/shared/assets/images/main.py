from pathlib import Path
from PIL import Image
import os


def convert_to_webp(source):
    destination = source.with_suffix(".webp")
    image = Image.open(source)
    image.save(destination, format="webp")
    return destination


def convert_files_to_webp(paths):
    for path in paths:
        webp_path = convert_to_webp(path)
        print(webp_path, 'SUCCESS')


def delete_files(paths):
    message = 'delete png files? (y, N): '
    if input(message).strip().lower() in ['y', 'yes']:
        for path in paths:
            os.remove(path)
            print(path, 'REMOVED')

def main():
    paths = list(Path().glob("**/*.png"))
    convert_files_to_webp(paths)
    delete_files(paths)


if __name__ == '__main__':
    main()
