var regionArray = []

export function getOrganzationName(organizationName)
{
    const orgArray = ['ktech', 'kainos1']

    for ( let i = 0; i < orgArray.length; i++ )
    {
        if ( organizationName.includes(orgArray[i]) )
        {
            var cloudRegion = '.us_east_1'
            var proxy = 'api'
            regionArray.push(cloudRegion, proxy)
            return regionArray
        }
    }
    var cloudRegion = '.sa_east_1'
    var proxy = 'apiSae1'
    regionArray.push(cloudRegion, proxy)
    return regionArray
}