var axios = require('axios')

exports.targetFunctions = {
    campaignActivated : campaignActivated,
    eventAPI : eventAPI,
    axiosCall : axiosCall
}

function eventAPI (visitorId,eventId,eventkey,eventuuid,eventtimestamp){
    
    var visitor_id = visitorId
    var entity_id = eventId
    var key = eventkey
    var uuid = eventuuid
    var timestamp = eventtimestamp

    var eeteventAPI = {
        "account_id": '8367220380',
        "visitors":
        [
            {
                "visitor_id": visitor_id,
                "attributes": {},
                "snapshots": [
                {
                "decisions": [],
                "events": [
                    {
                        "entity_id": entity_id,
                        "timestamp": timestamp,
                        "uuid": uuid,
                        "key" : key
                    }
                ]
                }
            ]
        }
        ],
        "client_name": "Optimizely/event-api-demo",
        "client_version": "1.0.0",
        "enrich_decisions": true
    }
    return eeteventAPI
}

function campaignActivated (visitorId, eventtimestamp){
    var visitor_id = visitorId
    var timestamp = eventtimestamp

    var campaignActivatedAPI = {
        "account_id": "8367220380",
        "visitors": [
          {
            "visitor_id": visitor_id,
            "snapshots": [
              {
                "decisions": [
                  {
                    "campaign_id": "16030340702",
                    "experiment_id": "16056240079",
                    "variation_id": "16026780488"
                  }
                ],
                "events": [
                  {
                    "entity_id": "16030340702",
                    "type": "campaign_activated",
                    "timestamp": timestamp,
                    "uuid": visitorId+timestamp
                  }
                ]
              }
            ]
          }
        ],
        "anonymize_ip": true,
        "client_name": "Optimizely/event-api-demo",
        "client_version": "1.0.0",
        "enrich_decisions": true
      }
    //console.log ('event uuid is',campaignActivatedAPI.visitors[0].snapshots[0].events)
   return campaignActivatedAPI
}

function axiosCall(type){

  axios.post('https://logx.optimizely.com/v1/events',type).then((res) => {
      console.log(res.status)
    })
    .catch((error) => {
      console.error(error)
    })
}

