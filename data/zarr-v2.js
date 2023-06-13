import { MONTHS } from './coordinates'

const DATASETS = [
  {
    id: 'c2',
    source:
      'https://carbonplan-benchmarks.s3-us-west-2.amazonaws.com/data/c2/nex-gddp-cmip6/monthly/CMIP6_ensemble_median/tasmax/tasmax_month_ensemble-median_historical.zarr',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: MONTHS,
    },
  },
  {
    id: 'c3',
    source:
      'https://carbonplan-benchmarks.s3-us-west-2.amazonaws.com/data/c3/nex-gddp-cmip6/monthly/CMIP6_ensemble_median/tasmax/tasmax_month_ensemble-median_historical.zarr',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: MONTHS,
    },
  },
  {
    id: 'c4',
    source:
      'https://carbonplan-benchmarks.s3-us-west-2.amazonaws.com/data/c4/nex-gddp-cmip6/monthly/CMIP6_ensemble_median/tasmax/tasmax_month_ensemble-median_historical.zarr',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: MONTHS,
    },
  },
  {
    id: 'c5',
    source:
      'https://carbonplan-benchmarks.s3-us-west-2.amazonaws.com/data/c5/nex-gddp-cmip6/monthly/CMIP6_ensemble_median/tasmax/tasmax_month_ensemble-median_historical.zarr',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: MONTHS,
    },
  },
]

export default DATASETS
