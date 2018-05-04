import * as React from "react";
import "./StudentList.css";

interface IStudentFormState {
  title: string;
  studentName: string;
}

interface IStudentFormProps {
  addStudent: (studentName: string) => void;
}

class StudentForm extends React.Component<
  IStudentFormProps,
  IStudentFormState
> {
  constructor(props: IStudentFormProps, context: any) {
    super(props, context);

    this.state = {
      studentName: "",
      title: "Sett en tittel"
    };

    this.submitStudent = this.submitStudent.bind(this);
    this.onChange = this.onChange.bind(this);
  }
  public onChange(e: any) {
    const {
      target: { name, value }
    } = e;

    this.setState({ [name]: value });
  }

  public submitStudent(e: any) {
    const { addStudent } = this.props;
    addStudent(this.state.studentName);
    this.setState({ studentName: "" });
    e.preventDefault();
  }

  public submitTitle(e: any) {
    e.preventDefault();
  }

  public render() {
    const { title } = this.state;

    return (
      <React.Fragment>
        <form className="EditHeadlineTag" onSubmit={this.submitTitle}>
          <input name="title" value={title} onChange={this.onChange} />
        </form>
        <form onSubmit={this.submitStudent} autoComplete="off">
          <input
            name="studentName"
            onChange={this.onChange}
            placeholder="Studentnavn"
            value={this.state.studentName}
            className="AddUserInput"
          />
          <div className="AddUserInput-underline" />
        </form>
      </React.Fragment>
    );
  }
}

export default StudentForm;
