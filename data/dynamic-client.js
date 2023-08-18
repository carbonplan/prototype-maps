const DAYS = [0, 729]

const UNUSED_ATTRS = {
  pyramids: true,
  consolidatedMetadata: true,
  compressor: 'gzip',
  pixelsPerTile: 128,
  dtype: 'f4',
  shardOrientation: 'space',
  coordinateChunking: 0,
  coordinateSharding: 1,
  inflevel: 99,
  gcm: 'ACCESS-CM2',
}

const SHARED_ATTRS = {
  ...UNUSED_ATTRS,
  variables: ['tasmax'],
  selectors: {
    time: DAYS,
  },
  clim: [220, 320],
  shardSize: 100, // only applicable for v3 data
}

export const DATASETS = [
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-1MB',
    version: 'v2',
    chunkSize: 1,
    timeChunks: 10,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-5MB',
    version: 'v2',
    chunkSize: 5,
    timeChunks: 73,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-10MB',
    version: 'v2',
    chunkSize: 10,
    timeChunks: 146,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-3857-25MB',
    version: 'v2',
    chunkSize: 25,
    timeChunks: 365,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-1MB',
    version: 'v2',
    chunkSize: 1,
    timeChunks: 10,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-5MB',
    version: 'v2',
    chunkSize: 5,
    timeChunks: 73,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-10MB',
    version: 'v2',
    chunkSize: 10,
    timeChunks: 146,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v2-4326-25MB',
    version: 'v2',
    chunkSize: 25,
    timeChunks: 365,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-sharded-4326-1MB',
    version: 'v3',
    chunkSize: 1,
    timeChunks: 10,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-sharded-4326-5MB',
    version: 'v3',
    chunkSize: 5,
    timeChunks: 73,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-sharded-4326-10MB',
    version: 'v3',
    chunkSize: 10,
    timeChunks: 146,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-sharded-4326-25MB',
    version: 'v3',
    chunkSize: 25,
    timeChunks: 365,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-sharded-3857-1MB',
    version: 'v3',
    chunkSize: 1,
    timeChunks: 10,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-sharded-3857-5MB',
    version: 'v3',
    chunkSize: 5,
    timeChunks: 73,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-sharded-3857-10MB',
    version: 'v3',
    chunkSize: 10,
    timeChunks: 146,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-sharded-3857-25MB',
    version: 'v3',
    chunkSize: 25,
    timeChunks: 365,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-1MB',
    version: 'v3',
    chunkSize: 1,
    shardSize: 1,
    timeChunks: 10,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-5MB',
    version: 'v3',
    chunkSize: 5,
    shardSize: 5,
    timeChunks: 73,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-10MB',
    version: 'v3',
    chunkSize: 10,
    shardSize: 10,
    timeChunks: 146,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-4326-25MB',
    version: 'v3',
    chunkSize: 25,
    shardSize: 25,
    timeChunks: 365,
    projection: 'equirectangular',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-1MB',
    version: 'v3',
    chunkSize: 1,
    shardSize: 1,
    timeChunks: 10,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-5MB',
    version: 'v3',
    chunkSize: 5,
    shardSize: 5,
    timeChunks: 73,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-10MB',
    version: 'v3',
    chunkSize: 10,
    shardSize: 10,
    timeChunks: 146,
    projection: 'mercator',
  },
  {
    ...SHARED_ATTRS,
    id: 'pyramids-v3-3857-25MB',
    version: 'v3',
    chunkSize: 25,
    shardSize: 25,
    timeChunks: 365,
    projection: 'mercator',
  },
]
