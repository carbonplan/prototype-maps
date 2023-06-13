import DATASETS from '../../data/zarr-v2'
import ZarrV2 from '../../components/zarr-v2'

export default ZarrV2

export function getStaticProps() {
  return {
    props: { dataset: DATASETS[0] },
  }
}
