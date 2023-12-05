// Write a function that takes a string and replaces and underscores with spaces and capitalizes the first letter of each word.
// Example: cleanName("hello_world") => "Hello World"

function cleanName(str) {
  // Check if the string contains underscores
  if (str.includes("_")) {
    return str
      .split("_")
      .map((word) => word[0].toUpperCase() + word.slice(1))
      .join(" ");
  } else {
    // No underscores, return the original string
    return str;
  }
}

// Write a function that takes a string and replaces any spaces with underscores and makes the entire thing lowercase.
// Example: cleanName("Hello World") => "hello_world"

function underscoreName(str) {
   return str.toLowerCase().split(" ").join("_");
}

export { cleanName, underscoreName };