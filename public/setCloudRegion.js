var regionArray = []

export function getOrganzationName(cloudRegion)
{
    const orgArray = ['ktech', 'kainos1']

    for ( let i = 0; i < orgArray.length; i++ )
    {
        if ( cloudRegion.includes(orgArray[i]) )
        {
            cloudRegion = '.us_east_1'
            var proxy = 'api'
            regionArray.push(cloudRegion, proxy)
            return regionArray
        }
    }
    cloudRegion = '.sa_east_1'
    var proxy = 'apiSae1'
    regionArray.push(cloudRegion, proxy)
    return regionArray
}

export { regionArray }