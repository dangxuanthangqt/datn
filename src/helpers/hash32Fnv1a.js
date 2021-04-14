const FNV_PRIME_32 = 0x1000193
const FNV_OFFSET_32 = 0x811c9dc5

/**
 * Creates FNV-1a hash from a json string
 */
function hash32Fnv1a( data ) {
  // eslint-disable-next-line no-shadow
  const hash = data.split( '' ).reduce( ( hash, _, index ) => {
    // eslint-disable-next-line no-bitwise
    hash ^= data.charCodeAt( index )
    // eslint-disable-next-line no-param-reassign
    hash *= FNV_PRIME_32
    return hash
  }, FNV_OFFSET_32 )
  return hash.toString( 16 )
}

export default hash32Fnv1a
