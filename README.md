# looker2optimizely
This is a proof of concept for an integration between Looker and Optimizely.

The integration would work the following way:
- Scheduling sending data from Looker to an Amazon S3 bucket as a CSV file
  - https://docs.looker.com/sharing-and-publishing/scheduling-and-sharing/send-amazon-s3
- Triggering a Lambda function
- In the Lambda function, parsing CSV file and sending conversion data to Optimizely via Optimizely Event API
  - https://developers.optimizely.com/x/events/api/index.html

This solves use cases such as:
- Sending Salesforce MQL and SQL data to Optimizely via Looker
- Sending any other conversion events to Optimizely via Looker


