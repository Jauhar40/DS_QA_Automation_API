// .mocharc.js 
module.exports = { 
    spec: "testcase/test-script.js", 
    timeout: 5000, 
    reporter: "mochawesome", 
    'reporter-option' : [
        'reportDir=Report',
        'reportFilename=[status] [datetime]-[name]-report',
        'html=true',
        'json=false',
        'overwrite=false',
        'timestamp=longDate',
    ]
   };
   