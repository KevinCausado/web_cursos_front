// import Image from "next/image";
// import styles from "./page.module.css";

import { getCourses } from "@/libs/getCourses";


export default async function Home() {
  const courses = await getCourses();

  return (
    <div className="{styles.container}">
      <h1>Mi web de cursos</h1>
      <div>
        {courses.map((course) => <p key={course.id}>{course.name}</p> )}
      </div>
    </div>
  );
}
