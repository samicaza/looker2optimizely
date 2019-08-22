const aws = require('aws-sdk');
const s3 = new aws.S3({ apiVersion: '2006-03-01' });
var csvToJSON = require('csvtojson')
var eventAPI = require('./eventAPI').targetFunctions
var axios = require('axios')
var axiosCall = eventAPI.axiosCall

exports.handler = async (event, context) => {
  
    const params = {
        Bucket: 'thisismyfirstcsvparserbucket',
        Key: 'test.csv',
    }
    
    try {
        
    const csvParser = await s3.getObject(params).createReadStream().pipe(csvToJSON())
    // console.log('csvLength',csvParser.length)
    // console.log('first object',csvParser[0])
    
    for (var i=0;i<csvParser.length;i++){
      var optimizely_id = csvParser[i].optimizely_id
      var eventId = csvParser[i]['event id']
      var eventKey = csvParser[i]['event key']
      var eventUUID = csvParser[i]['event uuid']
      //console.log('this is csvParser[i]',csvParser[i])

      var axiosCampaignActivated = eventAPI.campaignActivated(optimizely_id,Date.now())
      axiosCall(axiosCampaignActivated)
      var axiosEETActivated = eventAPI.eventAPI(optimizely_id,eventId,eventKey,eventUUID,Date.now())
      axiosCall(axiosEETActivated)
    }

    return csvParser;

    } 
    catch (err) {
        console.log(err);
    }
};
