import EmptyState from '../../components/empty-state'
import { tileData } from '../../data/tiling'
import TitilerZarr from '../../components/titiler'

// List of datasets that is read by the sidebar components. Specifically, each entry
// is expected to have an `id` used for identifying dataset in dropdown and a `selectors.time`
// array that specifies the range of valid values for the time dimension.
// If definition moved into `getStaticPaths` and `getStaticProps`, can be fetched from
// remote data source.
// (see https://nextjs.org/docs/pages/building-your-application/data-fetching/get-static-props#write-server-side-code-directly).
const DATASETS = [...tileData]

const Tiling = ({ dataset }) => {
  if (!dataset) {
    return <EmptyState />
  }
  return <TitilerZarr />
}

export default Tiling

export function getStaticPaths() {
  return {
    paths: [
      ...DATASETS.map((d) => ({
        params: {
          dataset: d.id,
        },
      })),
    ],
    fallback: false,
  }
}

export function getStaticProps({ params: { dataset } }) {
  return {
    props: {
      // `id` used as prefix for page title
      id: 'Dynamic tiling',
      // `dataset` for use within this page and for introspection in sidebar
      dataset: DATASETS.find((d) => d.id === dataset) ?? null,
      // `datasets` for use in sidebar dropdown
      datasets: DATASETS,
    },
  }
}
