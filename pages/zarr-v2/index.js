import DATASETS from '../../data/zarr-v2'
import ZarrV2 from '../../components/zarr-v2'

export default ZarrV2

export function getStaticProps() {
  return {
    props: { id: 'Zarr v2', dataset: DATASETS[0] },
  }
}
