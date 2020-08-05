import React from 'react';
import FlatfileImporter from "flatfile-csv-importer"

FlatfileImporter.setVersion(2)

const license = '1280cf65-f3a7-4b26-ae74-90288f0c5e85'

const flatfileConfig = {
    type: "vsacDb-import",
    fields: [
        {
            label: "Provider Name",
            key: "providerName"
        },
        {
            label: "Program Name",
            key: "program"
        },
        {
            label: "Certification or Credential",
            key: "certification"
        },
        {
            label: "County of Vermont",
            key: "region"
        },
        {
            label: "Mode of Instruction",
            key: "modality"
        },
        {
            label: "Cost of Program",
            key: "price"
        },
        {
            label: "Pell Grant Eligibility",
            key: "pell"
        },
        {
            label: "VT Advancement Grant Eligibility",
            key: "VTAdvancementGrant"
        },
        {
            label: "Start Date - End Date",
            key: "startEndDate"
        },
        {
            label: "Provider Website",
            key: "providerLink"
        },
        {
            label: "Contact Email",
            key: "contactEmail"
        },
        {
            label: "Record Created By",
            key: "recordCreatedBy"
        },
        {
            label: "Record Created On",
            key: "lastUpdate"
        },
        
    ]
}

const importer = new FlatfileImporter(license, flatfileConfig)

importer.setCustomer ({
     userId: "12345"
})

const launchFlatfile = () => {
    importer.requestDataFromUser().then(results => {
        importer.displayLoader();
        setTimeout( () => {
            importer.displaySuccess("Successful Upload");
             console.log(JSON.stringify(results.validData, null, 2))
            //console.log(results)
            let dataSet = results.validData
            
            for (let data of dataSet) {
                
            }

        },  1500)
    })
}

function CSVReader() {
    return (
        <div className="csv-reader">
            <button id="csv-button" onClick={launchFlatfile}>
                Click Here <br />to Upload CSV File <br />or Manually Input Program Data
            </button>
        </div>
    )
}

export default CSVReader;