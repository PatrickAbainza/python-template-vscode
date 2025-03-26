"""Tests for the example module."""
from typing import List

import pytest

from src.project_template.example import (
    add_numbers,
    get_greeting,
    filter_positive_numbers,
)

def test_add_numbers() -> None:
    """Test the add_numbers function."""
    # Test positive numbers
    assert add_numbers(1, 2) == 3

    # Test negative numbers
    assert add_numbers(-1, -2) == -3

    # Test zero
    assert add_numbers(0, 0) == 0

def test_get_greeting() -> None:
    """Test the get_greeting function."""
    # Test default greeting
    assert get_greeting() == "Hello, World!"

    # Test personalized greeting
    assert get_greeting("Alice") == "Hello, Alice!"

    # Test with empty string
    assert get_greeting("") == "Hello, !"

@pytest.mark.parametrize(
    "input_numbers,expected",
    [
        ([1, -2, 3, -4, 5], [1, 3, 5]),
        ([], []),
        ([-1, -2, -3], []),
        ([0, 1, 2], [1, 2]),
    ],
)
def test_filter_positive_numbers(input_numbers: List[int], expected: List[int]) -> None:
    """Test the filter_positive_numbers function with various inputs."""
    assert filter_positive_numbers(input_numbers) == expected