import EmptyState from '../../components/empty-state'

const DATASETS = []

const Tiling = ({ dataset }) => {
  if (!dataset) {
    return <EmptyState />
  }
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
