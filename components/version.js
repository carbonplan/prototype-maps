import { Column, Row, Select } from '@carbonplan/components'

const Version = ({ version, setVersion }) => {
  return (
    <Row columns={3}>
      <Column start={1} width={2}>
        Zarr version
      </Column>
      <Column start={3} width={1}>
        <Select onChange={setVersion} value={version}>
          <option value={'v2'}>v2</option>
          <option value={'v3'}>v3</option>
        </Select>
      </Column>
    </Row>
  )
}

export default Version
