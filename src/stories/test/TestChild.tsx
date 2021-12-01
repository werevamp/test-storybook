interface TestProps {
  test?: string
}

const TestChild = ({ test }: TestProps) => {
  return <div>TestChild {test}</div>
}

export default TestChild
