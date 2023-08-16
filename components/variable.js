import { Column, Row, Select } from '@carbonplan/components'

import { useAppContext } from './app-context'

const Variable = () => {
  const { dataset, setVariable, variable } = useAppContext()

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Variable
      </Column>
      <Column start={2} width={2}>
        <Select
          onChange={(e) => setVariable(e.target.value)}
          value={variable ?? ''}
        >
          {!variable && <option />}
          {dataset &&
            dataset.variables.map((v) => (
              <option key={v} value={v}>
                {v}
              </option>
            ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Variable
