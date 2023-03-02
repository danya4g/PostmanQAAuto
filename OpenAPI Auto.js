//PM-01 CompaniesDefaultRequest
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Status code is success", function () {
    pm.response.to.be.success;
});
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
pm.test("Headers is valid", function() {

pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');

pm.expect(pm.response.headers.get('Connection')).to.eql('keep-alive')

});
let DataJson = pm.response.json().data
pm.test("Len of JSON with default limit", function() {

let countLenData = Object.keys(DataJson).length
console.log(DataJson)
pm.expect(countLenData).to.eql(3)
console.log(countLenData)
});

let schema = {
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": 
        {
          "type": "object",
          "properties": {
            "company_id": {
              "type": "integer"
            },
            "company_name": {
              "type": "string"
            },
            "company_address": {
              "type": "string"
            },
            "company_status": {
              "type": "string",
              "enum": [ "ACTIVE", "CLOSED", "BANKRUPT" ]
            },
          },
          "required": [
            "company_id",
            "company_name",
            "company_address",
            "company_status"
          ]
        }
    },
    "meta": {
      "type": "object",
      "properties": {
        "limit": {
          "type": "integer"
        },
        "offset": {
          "type": "integer"
        },
        "total": {
          "type": "integer"
        }
      },
      "required": [
        "total"
      ]
    }
  },
  "required": [
    "data",
    "meta"
  ]
};

pm.test('Schema is valid', function() {

pm.response.to.have.jsonSchema(schema);

});

//PM-2 CompaniesEnableSSL
pm.test("Status code is 301", function () {
    pm.response.to.have.status(301);
});
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
pm.test("Request by http", function() {

pm.expect(pm.request.url.protocol).to.eql("http")

});

pm.test("Headers is vaild", function() {

    pm.expect(pm.response.headers.get('Connection')).to.eql('keep-alive');

    pm.expect(pm.response.headers.get('Location')).to.eql('https://send-request.me/api/companies/');

});

//PM-03 CompaniesWithLimitsAndOffsets
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});

pm.test("Headers is vaild", function() {

    pm.expect(pm.response.headers.get('Connection')).to.eql('keep-alive');

    pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');

});
let DataJson = pm.response.json().data;
pm.test("Len of JSON with limit=5", function()  {
    let countLenData = Object.keys(DataJson).lenght
    pm.expect(countLenData).to.eql(5)
});
pm.test("Verify offset", function() {
    pm.expect(DataJson[0].company_id).to.eql(3)
});

//PM-04 CompaniesStatusActive
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Status code is success", function () {
    pm.response.to.be.success;
});
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
pm.test("Headers is valid", function() {

pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');

pm.expect(pm.response.headers.get('Connection')).to.eql('keep-alive')

});
let DataJson = pm.response.json().data
pm.test("Len of JSON with default limit", function() {

let countLenData = Object.keys(DataJson).length
console.log(DataJson)
pm.expect(countLenData).to.eql(3)
console.log(countLenData)
});

let schema = {
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": 
        {
          "type": "object",
          "properties": {
            "company_id": {
              "type": "integer"
            },
            "company_name": {
              "type": "string"
            },
            "company_address": {
              "type": "string"
            },
            "company_status": {
              "type": "string",
              "enum": [ "ACTIVE" ]
            },
          },
          "required": [
            "company_id",
            "company_name",
            "company_address",
            "company_status"
          ]
        }
    },
    "meta": {
      "type": "object",
      "properties": {
        "limit": {
          "type": "integer"
        },
        "offset": {
          "type": "integer"
        },
        "total": {
          "type": "integer"
        }
      },
      "required": [
        "total"
      ]
    }
  },
  "required": [
    "data",
    "meta"
  ]
};

pm.test('Schema is valid', function() {

pm.response.to.have.jsonSchema(schema);

});

//PM-05 CompaniesWithStatusClosed
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Status code is success", function () {
    pm.response.to.be.success;
});
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
pm.test("Headers is valid", function() {

pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');

pm.expect(pm.response.headers.get('Connection')).to.eql('keep-alive')

});
let DataJson = pm.response.json().data
pm.test("Len of JSON with default limit", function() {

let countLenData = Object.keys(DataJson).length
console.log(DataJson)
pm.expect(countLenData).to.eql(2)
console.log(countLenData)
});

let schema = {
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": 
        {
          "type": "object",
          "properties": {
            "company_id": {
              "type": "integer"
            },
            "company_name": {
              "type": "string"
            },
            "company_address": {
              "type": "string"
            },
            "company_status": {
              "type": "string",
              "enum": [ "CLOSED" ]
            },
          },
          "required": [
            "company_id",
            "company_name",
            "company_address",
            "company_status"
          ]
        }
    },
    "meta": {
      "type": "object",
      "properties": {
        "limit": {
          "type": "integer"
        },
        "offset": {
          "type": "integer"
        },
        "total": {
          "type": "integer"
        }
      },
      "required": [
        "total"
      ]
    }
  },
  "required": [
    "data",
    "meta"
  ]
};

pm.test('Schema is valid', function() {

pm.response.to.have.jsonSchema(schema);

});

//PM-06 CompaniesWithStatusBankrupt

pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Status code is success", function () {
    pm.response.to.be.success;
});
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
pm.test("Headers is valid", function() {

pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');

pm.expect(pm.response.headers.get('Connection')).to.eql('keep-alive')

});
let DataJson = pm.response.json().data
pm.test("Len of JSON with default limit", function() {

let countLenData = Object.keys(DataJson).length
console.log(DataJson)
pm.expect(countLenData).to.eql(2)
console.log(countLenData)
});

let schema = {
  "type": "object",
  "properties": {
    "data": {
      "type": "array",
      "items": 
        {
          "type": "object",
          "properties": {
            "company_id": {
              "type": "integer"
            },
            "company_name": {
              "type": "string"
            },
            "company_address": {
              "type": "string"
            },
            "company_status": {
              "type": "string",
              "enum": [ "BANKRUPT" ]
            },
          },
          "required": [
            "company_id",
            "company_name",
            "company_address",
            "company_status"
          ]
        }
    },
    "meta": {
      "type": "object",
      "properties": {
        "limit": {
          "type": "integer"
        },
        "offset": {
          "type": "integer"
        },
        "total": {
          "type": "integer"
        }
      },
      "required": [
        "total"
      ]
    }
  },
  "required": [
    "data",
    "meta"
  ]
};

pm.test('Schema is valid', function() {

pm.response.to.have.jsonSchema(schema);

});

//PM-07 CompaniesWithInvQueryStatus
pm.test("Status code is 200", function () {
    pm.response.to.have.status(200);
});
pm.test("Status code is success", function () {
    pm.response.to.be.success;
});
pm.test("Response time is less than 500ms", function () {
    pm.expect(pm.response.responseTime).to.be.below(500);
});
pm.test("Headers is valid", function() {

pm.expect(pm.response.headers.get('Content-Type')).to.eql('application/json');

pm.expect(pm.response.headers.get('Connection')).to.eql('keep-alive')

});
