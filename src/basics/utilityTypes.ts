/**
 * TypeScript provides several utility types to facilitate common type transformations.
 * These utilities are available globally.
 */

// -- Pick ----------------------------------------------------------------------------
interface Todo {
  title: string;
  description: string;
  completed: boolean;
}

type TodoPreview = Pick<Todo, "title" | "completed">; // TodoPreview only picks "title" and "completed" properties.
const todo: TodoPreview = { title: "Clean room", completed: false };

// -- Exclude --------------------------------------------------------------------------
type MovieTypes = "novel" | "suspense" | "comedy";
type AllowedMovieTypes = Exclude<MovieTypes, "comedy">; // only "novel" and "suspense"

// -- Omit ----------------------------------------------------------------------------
interface Book {
  title: string;
  description: string;
  completed: boolean;
  author: string;
}

type BookNoAuthor = Omit<Book, "author">; // removes "author".

// --

interface CourseGoal {
  title: string;
  description: string;
  completeUntil: Date;
}

const courseGoal: Partial<CourseGoal> = {
  // Partial make all properties optional
  title: "Master JavaScript",
};

const names: Readonly<string[]> = ["Max", "Anna"];
// names.push(""); // cant push to a readonly array
