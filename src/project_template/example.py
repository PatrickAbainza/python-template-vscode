"""Example module to demonstrate project structure and type hints."""
from typing import List, Optional

def add_numbers(a: int, b: int) -> int:
    """Add two numbers together.

    Args:
        a: First number
        b: Second number

    Returns:
        Sum of the two numbers
    """
    return a + b

def get_greeting(name: Optional[str] = None) -> str:
    """Generate a greeting message.

    Args:
        name: Name of the person to greet (optional)

    Returns:
        Greeting message
    """
    if name is None:
        return "Hello, World!"
    return f"Hello, {name}!"

def filter_positive_numbers(numbers: List[int]) -> List[int]:
    """Filter a list to only include positive numbers.

    Args:
        numbers: List of integers to filter

    Returns:
        List containing only positive numbers
    """
    return [num for num in numbers if num > 0]