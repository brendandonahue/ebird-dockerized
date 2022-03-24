const getSpeciesByName = (birds, bird) => {
    const species = birds.find(x => x.name === bird)
    const code = species.code
    return code
  }
export default getSpeciesByName