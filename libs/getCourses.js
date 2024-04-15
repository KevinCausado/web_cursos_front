export async function getCourses() {
  const res = await fetch("http://localhost:4000/courses", { cache: "no-store" });
  const { data: courses } = await res.json();
  return courses;
}
