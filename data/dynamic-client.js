const DAYS = [0, 729]

const UNUSED_ATTRS = {
  pyramids: true,
  compressor: 'gzip',
  pixelsPerTile: 128,
  dtype: 'f4',
  coordinateChunking: 0,
  coordinateSharding: 1,
  inflevel: 100,
  gcm: 'ACCESS-CM2',
  emptyChunks: true,
}

const SHARED_ATTRS = {
  ...UNUSED_ATTRS,
  variables: ['tasmax'],
  selectors: {
    time: DAYS,
  },
  clim: [220, 320],
}

export const DATASETS = [
  {
    timeChunks: 10,
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-True-128-1-0-0-f4-0-0-0-gzipL1-100',
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 1,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-True-128-1-0-0-f4-0-0-0-gzipL1-100',
    version: 'v2',
    projection: 'equirectangular',
    shardSize: false,
    chunkSize: 1,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-True-128-5-0-0-f4-0-0-0-gzipL1-100',
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 5,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-True-128-5-0-0-f4-0-0-0-gzipL1-100',
    version: 'v2',
    projection: 'equirectangular',
    shardSize: false,
    chunkSize: 5,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-True-128-10-0-0-f4-0-0-0-gzipL1-100',
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 10,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-True-128-10-0-0-f4-0-0-0-gzipL1-100',
    version: 'v2',
    projection: 'equirectangular',
    shardSize: false,
    chunkSize: 10,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-True-128-25-0-0-f4-0-0-0-gzipL1-100',
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 25,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-True-128-25-0-0-f4-0-0-0-gzipL1-100',
    version: 'v2',
    projection: 'equirectangular',
    shardSize: false,
    chunkSize: 25,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-True-256-1-0-0-f4-0-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 1,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-True-256-1-0-0-f4-0-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v2',
    projection: 'equirectangular',
    shardSize: false,
    chunkSize: 1,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-True-256-5-0-0-f4-0-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 5,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-True-256-5-0-0-f4-0-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v2',
    projection: 'equirectangular',
    shardSize: false,
    chunkSize: 5,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-True-256-10-0-0-f4-0-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 10,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-True-256-10-0-0-f4-0-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v2',
    projection: 'equirectangular',
    shardSize: false,
    chunkSize: 10,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-True-256-25-0-0-f4-0-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v2',
    projection: 'mercator',
    shardSize: false,
    chunkSize: 25,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-True-256-25-0-0-f4-0-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v2',
    projection: 'equirectangular',
    shardSize: false,
    chunkSize: 25,
    consolidatedMetadata: true,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-1-0-0-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 0,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-1-both-50-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 50,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-1-both-100-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 100,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-1-0-0-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 0,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-1-both-50-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 50,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-1-both-100-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 100,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-5-0-0-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 0,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-5-both-50-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 50,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-5-both-100-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 100,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-5-0-0-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 0,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-5-both-50-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 50,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-5-both-100-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 100,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-10-0-0-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 0,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-10-both-50-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 50,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-10-both-100-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 100,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-10-0-0-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 0,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-10-both-50-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 50,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-10-both-100-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 100,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-25-0-0-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 0,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-25-both-50-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 50,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-128-25-both-100-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'mercator',
    shardSize: 100,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-25-0-0-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 0,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-25-both-50-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 50,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-128-25-both-100-f4-0-0-gzipL1-100',
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 100,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-1-0-0-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 0,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-1-both-50-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 50,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-1-both-100-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 100,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-1-0-0-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 0,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-1-both-50-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 50,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-1-both-100-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 100,
    chunkSize: 1,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-5-0-0-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 0,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-5-both-50-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 50,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-5-both-100-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 100,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-5-0-0-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 0,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-5-both-50-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 50,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-5-both-100-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 100,
    chunkSize: 5,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-10-0-0-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 0,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-10-both-50-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 50,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-10-both-100-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 100,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-10-0-0-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 0,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-10-both-50-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 50,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-10-both-100-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 100,
    chunkSize: 10,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-25-0-0-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 0,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-25-both-50-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 50,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-True-256-25-both-100-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'mercator',
    shardSize: 100,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-25-0-0-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 0,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: false,
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-25-both-50-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 50,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-True-256-25-both-100-f4-0-0-gzipL1-100',
    hideInDropdown: true,
    version: 'v3',
    projection: 'equirectangular',
    shardSize: 100,
    chunkSize: 25,
    consolidatedMetadata: false,
    shardOrientation: 'both',
    timeChunks: 10,
  },
]
