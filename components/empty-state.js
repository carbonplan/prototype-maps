import { Flex } from 'theme-ui'

const EmptyState = () => {
  return (
    <Flex
      sx={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
        fontFamily: 'mono',
        letterSpacing: 'mono',
        textTransform: 'uppercase',
        color: 'secondary',
      }}
    >
      Select a dataset to get started
    </Flex>
  )
}

export default EmptyState
