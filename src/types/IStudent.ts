interface IPointType {
  svgId: string;
}

interface IStudent {
  name: string;
  points: number;
  pointType: IPointType[];
}

export default IStudent;
