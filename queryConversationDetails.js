const { genesysIntervalFilter } = require('./genesysIntervalFilter.js')

async function queryConversationDetails(tel, accessToken, cloudRegion) {

    return new Promise((resolve, reject) => {

      const date_array = genesysIntervalFilter()
        
      const platformClient = require("purecloud-platform-client-v2");
      const client = platformClient.ApiClient.instance;
      client.setEnvironment(platformClient.PureCloudRegionHosts+cloudRegion);
      client.setAccessToken(accessToken);
      let apiInstance = new platformClient.ConversationsApi();
      
      let body = {"order":"desc","orderBy":"conversationStart","paging":{"pageSize":100,"pageNumber":1},"segmentFilters":[{"type":"or","predicates":[{"dimension":"direction","value":"inbound"},{"dimension":"direction","value":"outbound"}]}],"conversationFilters":[{"type":"or","predicates":[{"dimension":"externalTag","value":`55${tel}`}]}],"evaluationFilters":[],"surveyFilters":[],"interval":`${date_array.currentYear}-${date_array.month}-${date_array.currentDay}T${date_array.hour}:${date_array.minute}:${date_array.second}.${date_array.millisecond}Z/${date_array.currentDate.toISOString()}`};

      apiInstance.postAnalyticsConversationsDetailsQuery(body)

        .then((data) => {

          const obj = data.conversations
          //console.log(obj)

          let i = 0
          let conversationEnd = []

          while ( i < obj.length ) {

            conversationEnd[i] = obj[i].conversationEnd
            if ( obj[i].conversationEnd === undefined ) {

              //console.log(true)
              resolve(true)
              return
              
            } else { /*console.log(false)*/ }

            i++
            
          }

          //console.log(conversationEnd)
          resolve(false)

        })

        .catch((err) => {

          console.log(err)
          resolve(false)
          
        });
    })
}

module.exports = { queryConversationDetails }