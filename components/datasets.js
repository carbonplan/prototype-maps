import { Column, Row, Select } from '@carbonplan/components'
import { useRouter } from 'next/router'
import DATASETS from '../data/datasets'

const Datasets = () => {
  const router = useRouter()

  return (
    <Row columns={3}>
      <Column start={1} width={1}>
        Dataset
      </Column>
      <Column start={2} width={2}>
        <Select
          onChange={(e) =>
            router.query.dataset
              ? router.push({
                  pathname: router.pathname,
                  query: { dataset: e.target.value },
                })
              : router.push({
                  pathname: `${router.pathname}/[dataset]`,
                  query: { dataset: e.target.value },
                })
          }
          value={router.query.dataset ?? DATASETS[0]}
        >
          {DATASETS.map((d) => (
            <option key={d} value={d}>
              {d}
            </option>
          ))}
        </Select>
      </Column>
    </Row>
  )
}

export default Datasets
