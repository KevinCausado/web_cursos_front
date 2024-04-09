export async function getCourses() {
  const res = await fetch("http://localhost:4000/courses");
  const { data: courses } = await res.json();
  return courses;
}