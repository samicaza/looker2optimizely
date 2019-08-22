# looker2s3
This is the integration for sending Looker data to Optimizely. 

This solves use cases such as:
- Sending Salesforce MQL and SQL data to Optimizely via Looker
- Sending any other conversion events to Optimizely via Looker

At a high level, this integration uses the following workflow:
Looker > S3 > Lambda - in Lambda use the Event API to send to Optimizely


