const DAYS = [0, 729]

export const V2_DATASETS = [
  {
    id: 'c2',
    source:
      'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/pyramids-v2-3857-1MB',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: DAYS,
    },
  },
  {
    id: 'c3',
    source:
      'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/pyramids-v2-3857-5MB',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: DAYS,
    },
  },
  {
    id: 'c4',
    source:
      'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/pyramids-v2-3857-10MB',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: DAYS,
    },
  },
  {
    id: 'c5',
    source:
      'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/pyramids-v2-3857-25MB',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: DAYS,
    },
  },
]

export const V3_DATASETS = [
  {
    id: 'c2',
    source:
      'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/pyramids-v3-sharded-4326-1MB',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: DAYS,
    },
  },
  {
    id: 'c3',
    source:
      'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/pyramids-v3-sharded-4326-5MB',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: DAYS,
    },
  },
  {
    id: 'c4',
    source:
      'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/pyramids-v3-sharded-4326-10MB',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: DAYS,
    },
  },
  {
    id: 'c5',
    source:
      'https://carbonplan-benchmarks.s3.us-west-2.amazonaws.com/data/NEX-GDDP-CMIP6/ACCESS-CM2/historical/r1i1p1f1/tasmax/tasmax_day_ACCESS-CM2_historical_r1i1p1f1_gn/pyramids-v3-sharded-4326-25MB',
    clim: [220, 320],
    variable: 'tasmax',
    selectors: {
      // non-spatial dimensions
      time: DAYS,
    },
  },
]
