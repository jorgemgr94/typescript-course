/**
 * The core of the dependency inversion principle is that high-level
 * modules should not depend on the low-level modules. Instead,
 * both of them should depend on abstractions.
 */

interface ICourse {
  name: string;
  duration: number;
}
interface ICourseService {
  getCourses(): Promise<ICourse[]>;
}

class CourseService implements ICourseService {
  getCourses() {
    return Promise.resolve([
      {
        name: "Angular",
        duration: 120,
      },
    ]);
  }
}

/**
 * CourseController class only refers to an abstraction of the CourseService (interface ICourseService),
 * not to a concrete class.
 */
class CourseController {
  constructor(public service: ICourseService) {}

  async get() {
    const data = await this.service.getCourses();
    console.log(data);
  }
}
