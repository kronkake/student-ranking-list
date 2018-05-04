import * as React from "react";
import "./App.css";
import StudentForm from "./components/StudentForm";
import TestList from "./components/TestList";
import IStudent from "./types/IStudent";

interface IAppState {
  students: IStudent[];
}

class App extends React.Component<{}, IAppState> {
  constructor(props: any, context: any) {
    super(props, context);

    this.state = {
      students: []
    };

    this.addStudent = this.addStudent.bind(this);
  }
  public addStudent(studentName: string) {
    const { students } = this.state;
    this.setState({
      students: [...students, { name: studentName, points: 0, pointType: [] }]
    });
  }

  public render() {
    return (
      <div className="container">
        <StudentForm addStudent={this.addStudent} />
        <TestList students={this.state.students} />
      </div>
    );
  }
}

export default App;
