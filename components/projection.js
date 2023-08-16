import { Column, Row, Select } from '@carbonplan/components'
import { useAppContext } from './app-context'
import { DATASETS } from '../data/dynamic-client'
import { useEffect, useMemo } from 'react'

const Projection = () => {
  const { version, projection, setProjection } = useAppContext()

  const projections = useMemo(() => {
    return Array.from(
      DATASETS.filter((d) => d.version === version).reduce(
        (a, d) => a.add(d.projection),
        new Set()
      )
    )
  }, [version])

  useEffect(() => {
    if (projections.length === 1 && projections[0] !== projection) {
      setProjection(projections[0])
    }
  }, [projections, projection, setProjection])

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Projection
      </Column>
      <Column start={2} width={2}>
        <Select
          onChange={(e) => setProjection(e.target.value)}
          value={projection}
        >
          {projections.map((p) => (
            <option key={p} value={p}>
              {p}
            </option>
          ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Projection
