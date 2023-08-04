export function getDataTableRow(dataTableId, referenceKey, newToken) {

    const headers = {

        'Authorization': `Bearer ${newToken}`,
        "Content-Type": 'application/json'

    }
        
    axios.get(`apiSae1/api/v2/flows/datatables/${dataTableId}/rows/${referenceKey}?showbrief=false`, {headers})

    .then((data) => {
        console.log(`getFlowsDatatableRow success! data: ${JSON.stringify(data.data.status, null, 2)}`);
        return data.data.status
    })
    
    .catch((error) => {
        console.log(error)
        return error
    })

}
