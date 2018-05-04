import * as React from "react";
import IStudent from "../types/IStudent";
import { Transition } from "react-spring";

interface IStudentListProps {
  students: IStudent[];
}

class StudentList extends React.Component<IStudentListProps, {}> {
  public render() {
    const { students } = this.props;
    return (
      <section>
        <Transition
          keys={students.map((student, i) => i)}
          from={{ opacity: 0, height: 0 }}
          enter={{ opacity: 1, height: 60 }}
          leave={{ opacity: 0, height: 0 }}
        >
          {students.map((student, i) => styles => (
            <div style={styles} className="UserCard" key={i}>
              {i + 1}. {student.name}
            </div>
          ))}
        </Transition>
      </section>
    );
  }
}

export default StudentList;
