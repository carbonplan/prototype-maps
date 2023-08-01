import { Column, Row, Select } from '@carbonplan/components'
import { useAppContext } from './app-context'

const Version = () => {
  const { approach, version, setVersion } = useAppContext()

  if (approach !== 'direct-client') return null

  return (
    <Row columns={3}>
      <Column start={1} width={2}>
        Zarr version
      </Column>
      <Column start={3} width={1}>
        <Select onChange={(e) => setVersion(e.target.value)} value={version}>
          <option value={'v2'}>v2</option>
          <option value={'v3'}>v3</option>
        </Select>
      </Column>
    </Row>
  )
}

export default Version
