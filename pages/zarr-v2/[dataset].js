import DATASETS from '../../data/zarr-v2'
import ZarrV2 from '../../components/zarr-v2'

export default ZarrV2

export function getStaticPaths() {
  return {
    paths: DATASETS.map((d) => ({
      params: {
        dataset: d.id,
      },
    })),
    fallback: false,
  }
}

export function getStaticProps({ params: { dataset } }) {
  return {
    props: { id: 'Zarr v2', dataset: DATASETS.find((d) => d.id === dataset) },
  }
}
