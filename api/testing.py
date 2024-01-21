import sys
from random import randint
import time

def test(image_path):
    return randint(1, 12)

if __name__ == "__main__":
    try:
        if len(sys.argv) != 2:
            raise ValueError('Invalid number of arguments.')

        image_path = sys.argv[1]
        result = test(image_path)
        print(result)
    except Exception as e:
        print(f"Error: {str(e)}")
