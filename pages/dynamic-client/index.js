import EmptyState from '../../components/empty-state'
import { DATASETS } from '../../data/dynamic-client'

export default EmptyState

export function getStaticProps() {
  return {
    props: {
      // `id` used as prefix for page title
      id: 'Dynamic client',
      // `datasets` for use in sidebar dropdown
      datasets: DATASETS.filter((d) => !d.hideInDropdown),
    },
  }
}
