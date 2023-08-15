import EmptyState from '../../components/empty-state'
import TitilerZarr from '../../components/titiler'
import { tileData } from '../../data/tiling'

const DATASETS = tileData

const Tiling = ({ dataset }) => {
  if (!dataset) {
    return <EmptyState />
  } else return <TitilerZarr />
}

export default Tiling

export function getStaticProps() {
  return {
    props: {
      // `id` used as prefix for page title
      id: 'Dynamic tiling',
      // `datasets` for use in sidebar dropdown
      datasets: DATASETS,
    },
  }
}
