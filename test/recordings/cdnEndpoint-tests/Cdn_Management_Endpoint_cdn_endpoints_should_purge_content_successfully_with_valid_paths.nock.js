// This file has been autogenerated.

exports.setEnvironment = function() {
  process.env['AZURE_TEST_LOCATION'] = 'West US';
  process.env['AZURE_SUBSCRIPTION_ID'] = 'b4871d65-b439-4433-8702-08fa2cc15808';
};

exports.scopes = [[function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818/purge?api-version=2015-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/344efef2-7422-45d8-a407-069a3130551b/profileresults/cdnTestProfile45/endpointresults/cdnTestEndpoint1818?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '0527025e-ef3f-4219-ab99-9b9ad448db6c',
  'x-ms-client-request-id': '48859e25-3857-4d31-ada4-ebeffa2fca46',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/344efef2-7422-45d8-a407-069a3130551b?api-version=2015-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1e963abd-bbee-40be-b97d-6b8bfac0ab43',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221157Z:1e963abd-bbee-40be-b97d-6b8bfac0ab43',
  date: 'Tue, 01 Mar 2016 22:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .filteringRequestBody(function (path) { return '*';})
.post('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourceGroups/cdnTestGroup821/providers/Microsoft.Cdn/profiles/cdnTestProfile45/endpoints/cdnTestEndpoint1818/purge?api-version=2015-06-01', '*')
  .reply(202, "", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '0',
  expires: '-1',
  location: 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/344efef2-7422-45d8-a407-069a3130551b/profileresults/cdnTestProfile45/endpointresults/cdnTestEndpoint1818?api-version=2015-06-01',
  'retry-after': '10',
  'x-ms-request-id': '0527025e-ef3f-4219-ab99-9b9ad448db6c',
  'x-ms-client-request-id': '48859e25-3857-4d31-ada4-ebeffa2fca46',
  'azure-asyncoperation': 'https://management.azure.com/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/344efef2-7422-45d8-a407-069a3130551b?api-version=2015-06-01',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-writes': '1198',
  'x-ms-correlation-request-id': '1e963abd-bbee-40be-b97d-6b8bfac0ab43',
  'x-ms-routing-request-id': 'CENTRALUS:20160301T221157Z:1e963abd-bbee-40be-b97d-6b8bfac0ab43',
  date: 'Tue, 01 Mar 2016 22:11:56 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('http://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/344efef2-7422-45d8-a407-069a3130551b?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'cced8079-ad77-45ca-b9f8-96ef23f8895d',
  'x-ms-client-request-id': 'c01c287b-84b9-4043-a843-0e6c2b3354f9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'f5b74c2d-3369-4dcc-ab28-ede90aac8de0',
  'x-ms-routing-request-id': 'WESTUS:20160301T221235Z:f5b74c2d-3369-4dcc-ab28-ede90aac8de0',
  date: 'Tue, 01 Mar 2016 22:12:34 GMT',
  connection: 'close' });
 return result; },
function (nock) { 
var result = 
nock('https://management.azure.com:443')
  .get('/subscriptions/b4871d65-b439-4433-8702-08fa2cc15808/resourcegroups/cdnTestGroup821/providers/Microsoft.Cdn/operationresults/344efef2-7422-45d8-a407-069a3130551b?api-version=2015-06-01')
  .reply(200, "{\r\n  \"status\":\"Succeeded\",\"error\":{\r\n    \"code\":\"None\",\"message\":null\r\n  }\r\n}", { 'cache-control': 'no-cache',
  pragma: 'no-cache',
  'content-length': '77',
  'content-type': 'application/json; odata.metadata=minimal; odata.streaming=true',
  expires: '-1',
  'x-ms-request-id': 'cced8079-ad77-45ca-b9f8-96ef23f8895d',
  'x-ms-client-request-id': 'c01c287b-84b9-4043-a843-0e6c2b3354f9',
  'odata-version': '4.0',
  'strict-transport-security': 'max-age=31536000; includeSubDomains',
  server: 'Microsoft-IIS/8.5',
  'x-aspnet-version': '4.0.30319',
  'x-powered-by': 'ASP.NET',
  'x-ms-ratelimit-remaining-subscription-reads': '14998',
  'x-ms-correlation-request-id': 'f5b74c2d-3369-4dcc-ab28-ede90aac8de0',
  'x-ms-routing-request-id': 'WESTUS:20160301T221235Z:f5b74c2d-3369-4dcc-ab28-ede90aac8de0',
  date: 'Tue, 01 Mar 2016 22:12:34 GMT',
  connection: 'close' });
 return result; }]];