const DAYS = [0, 729]

export const V2_DATASETS = [
  {
    id: '1MB-chunks',
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
    id: '5MB-chunks',
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
    id: '10MB-chunks',
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
    id: '25MB-chunks',
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
    id: '1MB-chunks',
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
    id: '5MB-chunks',
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
    id: '10MB-chunks',
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
    id: '25MB-chunks',
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
